Câu A1:
Có 3 cách nhúng CSS vào trong HTML:
    1.Sử dụng Inline CSS và nhúng trực tiếp vào trong HTML.
    vd: <h1 style:"color = red,font-size:24px">Vi du</h1>
    Ưu điểm là có thể sử dụng ngay, và sẽ ghi đè lên 2 cách còn lại.
    Nhược điểm là thiếu đa dụng, chỉ có thể sử dụng trong 1 thẻ này và nếu sử dụng nhiều có thể rối.
    Chỉ nên dùng khi cần chỉnh sửa CSS trong 1 thẻ duy nhất.

    2.Sử dụng Internal CSS
    vd: <head>
            <style>
                div {color:red,font-size=24px}
            </style>
        </head>
    Ưu điểm là style này đỡ rối hơn Inline, không cần tạo file riêng.
    Nhược điểm là chỉ có thể sử dụng cho 1 trang duy nhất.
    Chỉ nên dùng cho các trang riêng.

    3.Sử dụng External CSS
    vd: tạo 1 file style.css là
        p {
            color: red;
            font-size: 16px;
        }

    nhúng vào file HTML sử dụng

    <head>
        <link rel="stylesheet" href="styles.css">
    </head>

    Ưu điểm là có thể tái sử dụng rất nhiều lần, tách biệt HTML nên dễ kiểm soát hơn.
    Nhược điểm là nếu file bị mất hay lỗi thì web sẽ bị lỗi theo.
    Có thể dùng được hầu hết cho mọi trường hợp.

    Nếu cả 3 cách CSS thì cái được ưu tiên nhất là Inline tại vì nó được viết đè ngay trong thẻ đấy -> Tính ưu tiên cao nhất.

    Câu A2:
    1. h1                           → Chọn: ShopTLU
    2. .price                       → Chọn: 45.990.000đ
    3. #app header                  → Chọn: ShopTLU,Home,Products,About
    4. nav a:first-child             → Chọn: Home
    5. .product.featured h2         → Chọn: MacBook Pro
    6. article > p                  → Chọn: 25.990.000đ, Mô tả sản phẩm
    7. a[href="/"]                  → Chọn: Home
    8. .top-bar.dark h1              → Chọn: ShopTLU

    Câu A3:
    Trường hợp 1:
        +Chiều rộng hiển thị là 400pixel + 20*2 + 5*2= 450 pixel
        +Không gian chiếm trên trang là 450 + 10*2 = 470 pixel

    Trường hợp 2:
        +Chiều rộng hiển thị là 400 pixel
        +Kích thước content trong box thực tế là 400 - 20*2 - 5*2 = 350pixel
        +Khoong gian chiếm trên trang là 400 + 10*2 = 420pixel

    Trường hợp 3:
        +Khoangr cách giữa box a và box b là 40 pixel
        +Ko phải 65 do bottom của box a và top box b nên bị đè nhau nên lấy giá trị lớn hơn , ko phải là cộng lại

    Câu A4:
        1.  Rule A: p { color: black; } → (0, 0, 1) vì chỉ có 1 selector thẻ p
            Rule B: .price { color: blue; } → (0, 1, 0) vì có 1 class.
            Rule C: #main-price { color: red; } → (1, 0, 0) vì có 1 ID.
            Rule D: p.price { color: green; } → (0, 1, 1) vì có 1 class và 1 element

        2.Element <p class="price" id="main-price"> sẽ có màu là red, do rule C có specificity cao nhất (1, 0, 0), nên nó thắng các rule còn lại.

        3. Nếu thêm inline style với <p class="price" id="main-price" style="color: orange;">, element sẽ có màu là orange.

        4. Nếu rule A thêm !important thì element sẽ có màu black, !important làm declaration đó được ưu tiên cao hơn các cách CSS khác không có !important, kể cả inline style thường.


    Câu C1:
    1. Chiều rộng thực tế
        Sidebar: 300 + 20*2 + 1*2 = 342px.
        Content: 660 + 30*2 + 1*2 = 722px.
    2. Trong content-box, phần padding và border nằm ngoài width đã đặt sẵn, nên kích thước thật luôn lớn hơn con số được đặt, khi tổng width của các float vượt quá bề rộng container, phần tử sau sẽ bị đẩy xuống dòng.
    
    3. 
        +Cách 1: Dùng .sidebar, .content {
                                    box-sizing: border-box;
                                    }
        Khi đó width sẽ bao gồm cả padding và border, sidebar vẫn là 3000px và content vẫn là 660px. Cách này đơn giản hơn

        +Cách 2: Giữ nguyên content-box nhưng giảm width để bù lại cho padding và border.

    4. 


    Câu C2:
        1. Sản phẩm A có font-size là 20px và color là green, A là class title nên font-size là 20px, và do !important thắng tất cả, dù specificity thấp hơn #featured .title, và A được thuộc class highlight, thuộc class important nên màu green được đẩy lên trên.
        2. p trong card featured có color là blue do .card p { color: inherit } inherit từ .card { color: blue } neen p nhận blue, inherit lấy giá trị từ parent của p là .card.
        3. Sản phẩm B có font-size là 20px và color là blue, do giống A, đều là class title nên font-size là 20px, còn màu blue là do B lấy từ .card và ko được highlight !important như A nên nhận màu blue. 
        4. Mô tả sản phẩm B có color là green do mô tả thuộc class highlight !important nên độ ưu tiên được đẩy lên cao nhất.


        