Câu A1:

Mobile:
    Box 1
    Box 2
    Box 3
    Box 4

Tablet:
    Box 1    Box 2
    Box 3    Box 4

Desktop:
    Box 1    Box 2    Box 3    Box 4

col-md-6 là từ kích thước màn hình trung bình (medium ≥ 768px) trở lên, mỗi Box sẽ chiếm 6 cột trong hàng 12 cột. (viết tắt của column-medium-6)

Ko cần ghi col-sm-12 vì trong Bootstrap Grid nếu không ghi class col thì mặc định là col-12 sẽ chiếm toàn bộ chiều rộng và col-12 là class mặc định cho mobile 

Câu A2:

1. Giải thích class d-none d-md-block
    d-none: Ẩn hoàn toàn element (display: none).
    d-md-block: Từ kích thước medium (≥ 768px) trở lên thì hiển thị (display: block).

    Kết luận:
    Element này sẽ ẩn trên mobile (< 768px) và hiển thị từ Tablet trở lên.
    Đây là kỹ thuật rất hay để ẩn bớt một số thành phần không cần thiết trên mobile.

2. 5 space utilities phổ biến
    + mt-3 là margin-top-3
    + mb-4 là margin-bottom-4
    + mx-auto là margin-left-right-auto (có thể nghĩ x là trục hoành) 
    + px-4  là padding-left-right-4
    + py-2  là padding-top-bottom-2 (y  là trục tung)

3. 
+container có chiều rộng cố định, có padding 2 bên, tự căn giữa, responsive theo breakpoint. Dùng phổ biến nhất cho nội dung chính.

+container-fluid có chiều rộng 100% toàn màn hình, chỉ có padding nhỏ 2 bên. Làm full-width section (hero, banner)

+container-md thì dưới md (< 768px) chiếm 100% width còn từ md (≥ 768px) trở lên thì có chiều rộng cố định. Dùng khi muốn full width trên mobile, nhưng giới hạn chiều rộng trên tablet/desktop.

Câu C1:
Component đã chọn: Product Card (từ bài trước)
So sánh:

    HTML file size:
    CSS thuần: HTML ngắn gọn, chỉ khoảng 8-10 dòng. Toàn bộ style nằm ở file .css riêng.
    Tailwind: HTML dài hơn nhiều (20-25 dòng) vì phải viết rất nhiều class utility (bg-white rounded-xl shadow-md hover:scale-105 transition...).

    Dễ đọc và sửa:
    CSS thuần: Dễ đọc hơn, code rõ ràng theo tên class (.product-card { ... }). Khi sửa style chỉ cần sửa 1 chỗ trong file CSS.
    Tailwind: Ban đầu hơi khó đọc vì HTML đầy class. Tuy nhiên khi quen thì sửa nhanh ngay trên HTML, không phải chuyển qua file CSS.

    Tái sử dụng:
    CSS thuần: Phải viết class mới hoặc dùng @extend. Tái sử dụng tốt nhưng phải quản lý nhiều file CSS.
    Tailwind: Tái sử dụng cực tốt nhờ @apply. Có thể tạo component trong CSS:

    .card-product {
        @apply bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300;
    }

Câu C2:
1.Tailwind chỉ sinh ra những class utility thực sự được sử dụng trong dự án. Bootstrap thì sinh ra gần như toàn bộ CSS (có cả những class không dùng). Do đó file CSS của Tailwind thường chỉ khoảng 20-60KB, trong khi Bootstrap có thể lên đến 150-200KB.

2.PurgeCSS sẽ quét toàn bộ file HTML để xem class nào đang được dùng, sau đó chỉ giữ lại những class đó và loại bỏ hết những class không sử dụng.

3.Ko nên dùng trong :
+Các dự án nhỏ, landing page 1-2 trang, thời gian gấp → Dùng CSS thuần hoặc Bootstrap nhanh hơn.
+Team designer + developer làm việc chung, cần thiết kế pixel-perfect theo đúng design system phức tạp. 

Câu A3:
    console.log(5 == "5");           // true
    console.log(5 === "5");          // false
    console.log(null == undefined);  // true
    console.log(null === undefined); // false
    console.log(NaN == NaN);         // false
    console.log(0 == false);         // true
    console.log(0 === false);        // false
    console.log("" == false);        // true

Câu A4:
    Các giá trị Falsy trong JavaScript:

    +false
    +0 
    +"" (chuỗi rỗng)
    +null
    +undefined
    +NaN

    Dự đoán kết quaqr:
    if ("0") console.log("A");           // In A          (Truthy)
    if ("") console.log("B");            // Không in      (Falsy)
    if ([]) console.log("C");            // In C          (Truthy)
    if ({}) console.log("D");            // In D          (Truthy)
    if (null) console.log("E");          // Không in      (Falsy)
    if (0) console.log("F");             // Không in      (Falsy)
    if (-1) console.log("G");            // In G          (Truthy)
    if (" ") console.log("H");           // In H          (Truthy)

Câu A5:
    +Cách 1:
    var greeting = `Xin chào ${name}! Bạn ${age} tuổi.`;

    +Cách 2:
    var url = `https://api.example.com/users/${userId}/orders?page=${page}`;

    +Cách 3:
    var html = `<div class="card">
        <h2>${title}</h2>
        <p>${description}</p>
        <span>Giá: ${price}đ</span>
    </div>`;