
# Runbook - Backup & Restore GraphQuest

## 1. Phạm vi
- Dự án: GraphQuest (Node.js).
- Dữ liệu sao lưu hiện tại:
  - package.json
  - .env.example
- Chưa bao gồm dữ liệu nghiệp vụ hoặc CSDL.

## 2. Mục tiêu
- RPO mục tiêu: 24 giờ.
- RTO mục tiêu: 30 phút.
- Các mục tiêu cần được kiểm chứng khi diễn tập.

## 3. Điều kiện trước
- Có Node.js và PowerShell.
- Có các script backup.ps1 và restore.ps1.
- Thực hiện trên môi trường test.

## 4. Các bước sao lưu
Mở Terminal tại thư mục GraphQuest:

    .\scripts\backup.ps1

Kiểm tra file sao lưu:

    dir backups

File kết quả có dạng backup_YYYYMMDD_HHMMSS.zip.

## 5. Các bước phục hồi
Chạy lệnh:

    .\scripts\restore.ps1

Kiểm tra:

    dir restore-test

Dữ liệu được giải nén vào restore-test,
không ghi đè file gốc.

## 6. Kiểm chứng
- Kiểm tra package.json đã phục hồi.
- Kiểm tra .env.example đã phục hồi.
- So sánh hash SHA256 với file nguồn.
- Chạy npm test để smoke test ứng dụng.
- Ghi nhận kết quả và thời gian phục hồi.

## 7. Lần diễn tập gần nhất
- Ngày: 08/11/2026
- Backup: Thành công
- Restore: Thành công
- Kiểm tra dữ liệu: 2/2 file trùng khớp
- Smoke test (npm test): Thành công
- Thời gian phục hồi: Chưa đo
- Ghi chú: Backup hiện chỉ gồm file cấu hình mẫu