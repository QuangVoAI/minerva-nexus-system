#!/usr/bin/env bash
# Script biên dịch toàn bộ hệ thống Minerva Nexus
set -e

# Xác định đường dẫn Java SDK
if [ -f "/opt/homebrew/opt/java/bin/javac" ]; then
    JAVAC_CMD="/opt/homebrew/opt/java/bin/javac"
elif command -v javac &> /dev/null && javac -version &> /dev/null; then
    JAVAC_CMD="javac"
elif [ -n "$JAVA_HOME" ] && [ -f "$JAVA_HOME/bin/javac" ]; then
    JAVAC_CMD="$JAVA_HOME/bin/javac"
else
    echo "❌ Lỗi: Không tìm thấy javac. Vui lòng cài đặt OpenJDK hoặc cấu hình biến môi trường JAVA_HOME."
    exit 1
fi

echo "=================================================="
echo "  BIÊN DỊCH DỰ ÁN MINERVA NEXUS (TDTU - N10)"
echo "  Trình biên dịch: $($JAVAC_CMD -version)"
echo "=================================================="

mkdir -p bin
$JAVAC_CMD -d bin -sourcepath src $(find src -name "*.java")

echo "✅ Biên dịch thành công! Các file .class đã sẵn sàng trong thư mục bin/"
