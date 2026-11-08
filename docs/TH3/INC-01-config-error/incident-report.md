
# Incident Report - INC-01

## 1. Tóm tắt sự cố
- Dự án: GraphQuest
- Loại: Lỗi cấu hình API_URL
- Môi trường: Test
- Trạng thái: Đã sửa trong tình huống mô phỏng

## 2. Mô tả
Khi thiếu API_URL, hàm kết nối ban đầu phát sinh lỗi.
Đây là sự cố được mô phỏng trong bài thực hành.

## 3. Phát hiện
Sử dụng test-inc-01.js để tái hiện trường hợp
thiếu cấu hình API_URL.

## 4. Nguyên nhân gốc - 5 Whys
1. Vì sao lỗi? Thiếu API_URL.
2. Vì sao thiếu? Chưa cung cấp cấu hình.
3. Vì sao ứng dụng báo lỗi? Hàm ban đầu throw Error.
4. Vì sao chưa xử lý an toàn? Chưa có cơ chế fallback.
5. Nguyên nhân gốc: Thiếu xử lý cấu hình không hợp lệ.

## 5. Khắc phục
- Tạo src/config.js.
- Trả về trạng thái degraded khi thiếu API_URL.
- Trả về connected khi cấu hình hợp lệ.

## 6. Kiểm chứng
- node tests/test-inc-01.js
- npm test
- Kết quả: Ghi theo kết quả chạy thực tế.

## 7. Phòng ngừa
- Kiểm tra cấu hình đầu vào.
- Bổ sung unit test.
- Không ghi thông tin bí mật vào log.


## 8. Rollback và thời gian
- Phiên bản kiểm thử rollback: v1.0.0
- Phương pháp: Git worktree
- Kiểm thử: npm test
- Kết quả: PASS
- Minh chứng: docs/TH3/evidence/rollback-test.txt
- Thời gian phát hiện: Chưa đo
- Thời gian khôi phục: Chưa đo
- Ghi chú: Đã kiểm thử phiên bản cũ, chưa diễn tập chuyển đổi dịch vụ thực tế.
