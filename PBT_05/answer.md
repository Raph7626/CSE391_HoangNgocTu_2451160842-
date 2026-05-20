

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

cÂU B3:
Lệnh compile: sass scss/style.scss style.css
  

Câu C1 
Trang web được chọn: Shopee.vn
1. Phân tích Responsive trên 3 kích thước màn hình
    a. Mobile (375px):

    Navigation: Sử dụng icon hamburger ☰ ở góc trái. Khi click sẽ hiện menu trượt từ bên trái (sidebar menu). Logo ở giữa, biểu tượng giỏ hàng và thông báo ở góc phải.
    Lưới content: Hiển thị 2 cột sản phẩm.
    Elements bị ẩn: Thanh tìm kiếm thu gọn, một số banner lớn bị cắt hoặc chuyển thành carousel, một số filter và danh mục bị ẩn hoặc chuyển xuống dưới dạng tab.
    Font size: Chữ nhỏ hơn, khoảng 14px, dễ đọc trên mobile.

    b. Tablet (768px):

    Navigation: Hamburger vẫn còn nhưng menu bắt đầu hiện dạng ngang nhiều hơn. Thanh tìm kiếm xuất hiện đầy đủ.
    Lưới content: Tăng lên 3 cột sản phẩm.
    Elements: Sidebar filter bắt đầu hiện, banner to hơn.
    Font size: Tăng nhẹ so với mobile.

    c. Desktop (1440px):

    Navigation: Menu hiển thị đầy đủ dạng ngang (Trang chủ, Danh mục, Flash Sale, Mall…).
    Lưới content: Hiển thị 5-6 cột sản phẩm tùy khu vực.
    Elements: Toàn bộ filter bên trái hiện rõ, nhiều banner quảng cáo lớn, footer đầy đủ thông tin.
    Font size: Lớn và rõ ràng nhất.

2. Tóm tắt thay đổi chính

    Navigation: Từ hamburger (mobile) → menu ngang đầy đủ (desktop).
    Số cột sản phẩm: 2 cột (mobile) → 3 cột (tablet) → 5-6 cột (desktop).
    Elements bị ẩn trên mobile: Bộ lọc bên trái, một số link trên header, banner phụ, một số thông tin footer.
    Font size: Tăng dần theo kích thước màn hình để đảm bảo trải nghiệm tốt.

3. Media Queries của Shopee (từ DevTools)
    Shopee sử dụng nhiều media queries, trong đó có một số breakpoint chính:

    @media (max-width: 767px) → Dành cho mobile
    @media (min-width: 768px) and (max-width: 1023px) → Tablet
    @media (min-width: 1024px) → Desktop và lớn hơn

    Ví dụ điển hình:
    CSS@media (max-width: 767.98px) {
        .header-main { ... }           /* Hamburger mode */
        .product-grid { grid-template-columns: repeat(2, 1fr); }
    }

    @media (min-width: 1024px) {
        .product-grid { grid-template-columns: repeat(5, 1fr); }
    }

Câu C2 (10đ) — Thiết kế Responsive Strategy
Trang web: Đặt bàn nhà hàng (Restaurant Reservation)
1. Wireframe cho 3 kích thước màn hình
    a. Mobile (< 768px)
    text
    ┌────────────────────────────┐
    │         HEADER             │  (Logo + Hotline)
    ├────────────────────────────┤
    │       HERO IMAGE           │  (Toàn màn hình)
    ├────────────────────────────┤
    │     6 ẢNH MÓN ĂN           │  (Grid 2 cột)
    │   (2 cột x 3 hàng)         │
    ├────────────────────────────┤
    │       FORM ĐẶT BÀN         │  (Full width)
    ├────────────────────────────┤
    │     GOOGLE MAPS            │  (Full width)
    ├────────────────────────────┤
    │         FOOTER             │
    └────────────────────────────┘

    Ẩn: Không có sidebar. Một số text mô tả ngắn lại.

    b. Tablet (768px - 1023px)
    text┌────────────────────────────┐
    │         HEADER             │
    ├─────────────┬──────────────┤
    │   HERO      │              │
    ├─────────────┴──────────────┤
    │     6 ẢNH MÓN ĂN (3 cột)   │
    ├─────────────┬──────────────┤
    │   FORM      │   MAPS       │  (2 cột)
    ├─────────────┴──────────────┤
    │         FOOTER             │
    └────────────────────────────┘
    c. Desktop (≥ 1024px)
    text┌────────────────────────────┐
    │         HEADER             │
    ├──────┬─────────────────────┤
    │      │     HERO (full)     │
    ├──────┼──────────┬──────────┤
    │      │  6 ẢNH   │  FORM    │
    │ SIDEBAR│ (3 cột) │ ĐẶT BÀN │
    │ (Menu)│          │          │
    ├──────┼──────────┴──────────┤
    │      │    GOOGLE MAPS      │
    ├──────┴─────────────────────┤
    │         FOOTER             │
    └────────────────────────────┘
    2. CSS Skeleton (Mobile-First + Grid)
    CSS/* ==================== MOBILE FIRST ==================== */
    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 15px;
    }

    .main-grid {
        display: grid;
        gap: 20px;
    }

    /* Header + Hero */
    .header, .hero {
        grid-column: 1 / -1;
    }

    /* Gallery ảnh món ăn */
    .gallery {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 15px;
    }

    /* Form và Map */
    .form-section, .map-section {
        grid-column: 1 / -1;
    }

    /* ==================== TABLET ==================== */
    @media (min-width: 768px) {
        .gallery {
            grid-template-columns: repeat(3, 1fr);
        }
        
        .content-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 25px;
        }
        
        .form-section, .map-section {
            grid-column: auto;
        }
    }

    /* ==================== DESKTOP ==================== */
    @media (min-width: 1024px) {
        .main-grid {
            grid-template-columns: 250px 1fr 350px;
        }
        
        .sidebar {
            grid-column: 1 / 2;
        }
        
        .hero {
            grid-column: 2 / -1;
        }
        
        .gallery {
            grid-column: 2 / 3;
            grid-template-columns: repeat(3, 1fr);
        }
        
        .form-section {
            grid-column: 3 / 4;
        }
        
        .map-section {
            grid-column: 2 / -1;
        }
    }

    Tóm tắt chiến lược Responsive:

    Sử dụng Mobile-First (code mobile trước).
    Dùng CSS Grid làm layout chính.
    Breakpoints: 768px (tablet) và 1024px (desktop).
    Ưu tiên nội dung quan trọng (Form đặt bàn) luôn hiện rõ và dễ tương tác trên mobile.