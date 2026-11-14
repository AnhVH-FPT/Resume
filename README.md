# Ha Anh Vu – Academic website / Website học thuật

Static bilingual (EN/VI) site, ready for GitHub Pages. No build step.

## Cấu trúc
```
index.html            # khung trang
assets/css/style.css  # giao diện
assets/js/main.js     # TOÀN BỘ nội dung song ngữ (sửa ở đây)
assets/img/avatar.jpg # ảnh đại diện của bạn (tự thêm)
.nojekyll
```

## Thêm avatar
Đặt ảnh vuông (khoảng 600×600 px) tên `avatar.jpg` vào `assets/img/`. Chưa có ảnh thì trang tự hiện chữ "HV".

## Đưa lên GitHub Pages
1. Tạo repo tên `<username>.github.io` (hoặc tên bất kỳ), đẩy toàn bộ thư mục này lên nhánh `main`.
2. Vào **Settings → Pages → Build and deployment → Deploy from a branch → main / (root)**.
3. Truy cập `https://<username>.github.io`.

## Cập nhật nội dung
Sửa các mảng `PUBS`, `EXP`, `EDU`, `HONORS`, `RESEARCH` trong `assets/js/main.js`; mỗi đoạn có bản `b("English", "Tiếng Việt")`.
