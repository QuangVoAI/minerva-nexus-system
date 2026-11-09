#!/usr/bin/env bash
# Script khởi chạy ứng dụng đồ họa Minerva Nexus
set -e

# Xác định đường dẫn Java Runtime
if [ -f "/opt/homebrew/opt/java/bin/java" ]; then
    JAVA_CMD="/opt/homebrew/opt/java/bin/java"
elif command -v java &> /dev/null && java -version &> /dev/null; then
    JAVA_CMD="java"
elif [ -n "$JAVA_HOME" ] && [ -f "$JAVA_HOME/bin/java" ]; then
    JAVA_CMD="$JAVA_HOME/bin/java"
else
    echo "❌ Lỗi: Không tìm thấy java runtime. Vui lòng cài đặt OpenJDK."
    exit 1
fi

# Tự động biên dịch nếu chưa có thư mục bin
if [ ! -d "bin" ] || [ -z "$(ls -A bin 2>/dev/null)" ]; then
    echo "Chưa tìm thấy bản build, đang tiến hành biên dịch..."
    ./compile.sh
fi

echo "=================================================="
echo "  KHỞI CHẠY HỆ THỐNG MINERVA NEXUS"
echo "  Backend REST API & Web Frontend: http://localhost:8080"
echo "  Runtime: $($JAVA_CMD -version 2>&1 | head -n 1)"
echo "=================================================="

# Tự động mở trình duyệt hiển thị Web Frontend trên macOS
(sleep 1 && which open &>/dev/null && open http://localhost:8080) &

$JAVA_CMD -cp bin vn.edu.tdtu.minervanexus.Main
