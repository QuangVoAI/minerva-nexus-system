import { chromium } from "playwright";

async function run() {
  console.log("=== KIỂM THỬ E2E ĐĂNG NHẬP JWT (HS256) ===");
  const browser = await chromium.launch({ channel: "chrome", headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  // 1. Test sai mật khẩu -> bị từ chối 401, hiển thị lỗi, không lưu JWT
  await page.goto("http://localhost:3000/react/#login", { waitUntil: "networkidle" });
  await page.waitForTimeout(500);
  await page.locator('input[type="password"]').fill("sai_mat_khau");
  await page.locator('button[type="submit"]').click();
  await page.waitForTimeout(600);
  const errBody = await page.textContent("body");
  const tokenAfterFail = await page.evaluate(() => localStorage.getItem("minerva_jwt_token"));
  console.log("1. Sai mật khẩu -> báo lỗi & không cấp JWT:", errBody.includes("Sai tên đăng nhập hoặc mật khẩu") && !tokenAfterFail);
  if (!errBody.includes("Sai tên đăng nhập hoặc mật khẩu") || tokenAfterFail) {
    throw new Error("Expected 401 error message and no token on wrong password");
  }

  // 2. Test đăng nhập hợp lệ NV0128 / password123 -> cấp HS256 JWT (3 phần), chuyển #dashboard
  await page.locator('input[type="password"]').fill("password123");
  await page.locator('button[type="submit"]').click();
  await page.waitForTimeout(800);
  const token = await page.evaluate(() => localStorage.getItem("minerva_jwt_token"));
  const userJson = await page.evaluate(() => localStorage.getItem("minerva_auth_user"));
  const urlAfterLogin = page.url();
  const isThreePartJwt = !!token && token.split(".").length === 3;
  console.log("2. Đăng nhập NV0128 -> cấp JWT 3 phần & vào #dashboard:", isThreePartJwt && urlAfterLogin.includes("#dashboard"));
  if (!isThreePartJwt || !urlAfterLogin.includes("#dashboard")) {
    throw new Error(`Invalid JWT or URL: token=${token}, url=${urlAfterLogin}`);
  }

  // 3. Test GET /api/auth/me với Bearer token -> 200 OK; không token -> 401; token giả -> 401
  const apiChecks = await page.evaluate(async (jwt) => {
    const rValid = await fetch("/api/auth/me", { headers: { Authorization: `Bearer ${jwt}` } });
    const rNoToken = await fetch("/api/auth/me");
    const rTampered = await fetch("/api/auth/me", { headers: { Authorization: `Bearer ${jwt.slice(0, -2)}xx` } });
    return {
      validStatus: rValid.status,
      validBody: await rValid.json(),
      noTokenStatus: rNoToken.status,
      tamperedStatus: rTampered.status,
    };
  }, token);
  console.log("3. Xác thực /api/auth/me (hợp lệ=200, thiếu=401, giả mạo=401):", apiChecks.validStatus, apiChecks.noTokenStatus, apiChecks.tamperedStatus);
  if (apiChecks.validStatus !== 200 || apiChecks.noTokenStatus !== 401 || apiChecks.tamperedStatus !== 401) {
    throw new Error("Unexpected /api/auth/me status codes: " + JSON.stringify(apiChecks));
  }

  // 4. Test đăng xuất trên sidebar -> xóa JWT & quay về #login
  await page.locator('[data-name="Phiên trực"]').click();
  await page.waitForTimeout(500);
  const tokenAfterLogout = await page.evaluate(() => localStorage.getItem("minerva_jwt_token"));
  console.log("4. Bấm Đăng xuất -> xóa JWT & về #login:", !tokenAfterLogout && page.url().includes("#login"));
  if (tokenAfterLogout || !page.url().includes("#login")) {
    throw new Error("Logout failed to clear JWT or redirect to #login");
  }

  // 5. Test đăng nhập mobile tài xế (#login-driver) với TX045 / password123 -> JWT role DRIVER & vào #driver
  await page.goto("http://localhost:3000/react/#login-driver", { waitUntil: "networkidle" });
  await page.waitForTimeout(500);
  await page.locator('button[type="submit"]').click();
  await page.waitForTimeout(800);
  const driverToken = await page.evaluate(() => localStorage.getItem("minerva_jwt_token"));
  const driverUser = JSON.parse(await page.evaluate(() => localStorage.getItem("minerva_auth_user") || "{}"));
  console.log("5. Đăng nhập tài xế TX045 -> role=DRIVER & vào #driver:", !!driverToken && driverUser.role === "DRIVER" && page.url().includes("#driver"));
  if (!driverToken || driverUser.role !== "DRIVER" || !page.url().includes("#driver")) {
    throw new Error("Driver JWT login check failed");
  }

  await browser.close();
  console.log("✓ ALL 5 JWT AUTH E2E CHECKS PASSED (100%)!");
}

run().catch((err) => {
  console.error("✗ JWT E2E FAILED:", err);
  process.exit(1);
});
