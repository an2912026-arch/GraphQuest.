# GraphQuest

Dự án Node.js minh họa tìm đường đi bằng BFS, Dijkstra và chức năng CR-01 search.

## Yêu cầu
- Node.js 20+ và npm.

## Chạy chương trình
```bash
npm ci
npm start
```
Nhập điểm A–D để xem đường đi theo Dijkstra, BFS và CR-01. Đây là chương trình CLI minh họa, chưa phải ứng dụng Web có giao diện đầy đủ.

## Kiểm thử và CI
```bash
npm test
```
Workflow: `.github/workflows/ci.yml`. Các test gồm Dijkstra, BFS, use cases, logging, CR-01 và INC-01.

## Cấu trúc
- `src/`: thuật toán, tìm đường, cấu hình và logging
- `tests/`: kiểm thử
- `docs/TH1`–`TH4`: báo cáo lab
- `docs/Final/BaoCao_Final.docx`: bản báo cáo tổng hợp, các mục cần xác minh được nêu rõ
- `docs/TH3/`: báo cáo sự cố INC-01 và bằng chứng
- `scripts/`: sao lưu và phục hồi

## Trạng thái yêu cầu đề cuối kỳ
**Chưa hoàn thành**: tích hợp cổng thanh toán sandbox thật, minh chứng thanh toán, tài khoản sandbox và xác minh GitHub Release/PR trực tuyến. Không dùng mock thay cổng thanh toán thật.

## Lưu ý an toàn
Không commit `.env`, API key, token, logs hoặc dữ liệu nhạy cảm. Sao chép `.env.example` thành `.env` khi cần.

## Nộp bài
Kiểm tra báo cáo và bổ sung minh chứng thực tế; đẩy các thay đổi bằng branch/PR theo quy định, không đẩy trực tiếp lên main sau baseline.
