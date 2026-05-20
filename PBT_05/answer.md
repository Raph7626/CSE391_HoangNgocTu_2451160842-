

Câu A1:

1. Thẻ meta viewport chuẩn:
HTML<meta name="viewport" content="width=device-width, initial-scale=1.0">

width=device-width: Chiều rộng trang bằng đúng chiều rộng thiết bị.
initial-scale=1.0: Tỷ lệ phóng to ban đầu là 100% .

2. Nếu thiếu thẻ này, trên iPhone trang web sẽ bị thu nhỏ lại như đang xem bản desktop, nhỏ.
3.
    Mobile-First: Viết CSS cho mobile trước, sau đó dùng @media (min-width: ...) để thêm style cho màn hình lớn hơn.
    Desktop-First: Viết CSS cho desktop trước, dùng @media (max-width: ...) để chỉnh cho màn hình nhỏ.

Ví dụ Mobile-First:
    CSS.container { width: 100%; }               

    @media (min-width: 768px) {
        .container { width: 720px; }
    }
Mobile-First được khuyên dùng vì load nhanh hơn trên mobile và code sạch hơn.

Câu A2:
    +< 576px: Mobile nhỏ (XS) → hiển thị 1 hoặc 2 cột.
    +>= 576px: Mobile lớn (SM) → hiển thị 2 cột.
    +>= 768px: Tablet (MD) → hiển thị 3 cột.
    +>= 992px: Laptop (LG) → hiển thị 4 cột.
    +>= 1200px: Desktop (XL) → hiển thị 4 hoặc 5 cột.
    +>= 1400px: Desktop lớn (XXL) → hiển thị 5-6 cột.

Câu A3:
+Màn hình 375px (iPhone SE): .container có width 100%.
+Màn hình 600px: .container có width 540px.
+Màn hình 800px: .container có width 720px.
+Màn hình 1000px: .container có width 960px.
+Màn hình 1400px: .container có width 1140px.

Câu A4
4 tính năng chính của SCSS:
    +Variables (Biến): Dùng để lưu giá trị màu, kích thước…
    Ví dụ: $primary-color: #3498db;
    
    +Nesting (Lồng nhau): Viết CSS theo cấu trúc HTML.
    Ví dụ:SCSS.card {
            background: white;
            &:hover { transform: translateY(-5px); }
        }

    +Mixins: Tạo hàm tái sử dụng code.
    Ví dụ:SCSS@mixin flex-center { display: flex; align-items: center; justify-content: center; }

    +@extend (Kế thừa): Cho phép một class kế thừa style từ class khác.


Tại sao trình duyệt không đọc được file .scss?
Vì .scss là ngôn ngữ tiền xử lý, trình duyệt chỉ hiểu được CSS thuần.
Cách khắc phục: Phải biên dịch (compile) file .scss sang file .css trước khi dùng (dùng Live Sass Compiler hoặc công cụ khác).