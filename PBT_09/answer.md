Câu A1:
#app
├── header
│   ├── h1 → "Todo App"
│   └── nav
│       ├── a.active → "All"
│       ├── a → "Active"
│       └── a → "Completed"
└── main
    ├── form#todoForm
    │   ├── input#todoInput (type="text")
    │   └── button → "Add"
    └── ul#todoList
        ├── li.todo-item → "Learn HTML"
        └── li.todo-item.completed → "Learn CSS"   
    

Các querySelector chọn thẻ:
    + Chọn thẻ <h1>
    document.querySelector('h1')
    document.querySelector('#app h1')

    +Chọn input trong form
    document.querySelector('#todoInput')
    document.querySelector('input#todoInput')
    document.querySelector('#todoForm input')

    +Chọn tất cả .todo-item
    document.querySelectorAll('.todo-item')

    + Chọn link đang active
    document.querySelector('a.active')
    document.querySelector('nav a.active')

    +Chọn <li> đầu tiên trong #todoList
    document.querySelector('#todoList li')
    document.querySelector('#todoList li:first-child')

    + Chọn tất cả <a> bên trong <nav>
    document.querySelectorAll('nav a')
    document.querySelectorAll('#app nav a') 
   

Câu A2:
Sự khác nhau giữa innerHTML và textContent:
    +innerHTML đọc/ghi HTML vào element còn textContent đọc/ghi chỉ text thuần (không HTML)
    +innerHTML hỗ trợ các thẻ HTML như <img>,... còn textContent thì không
    +innerHTML chậm hơn so với textContent do phải chạy parseHTML
    +innerHTML dễ bị xâm nhập hơn so với textContent

VD: 
    // innerHTML - Có thể chèn HTML
    demo.innerHTML = "<b>Chữ đậm</b> <span style='color:red'>Màu đỏ</span>";

    // textContent - Chỉ text thuần
    demo.textContent = "<b>Chữ đậm</b> <span style='color:red'>Màu đỏ</span>";
    // Kết quả: hiển thị nguyên chuỗi "<b>Chữ đậm</b> ..." (không render HTML)

Lí do innerHTML có thể gây lỗ hổng XSS: XSS (Cross-Site Scripting) là lỗ hổng cho phép kẻ tấn công chèn mã JavaScript vào website.
code vi du:
    // Giả sử người dùng nhập vào ô tìm kiếm
    const userInput = document.querySelector("#search").value;
    // userInput = <img src=x onerror="alert('Hacked!')">

    document.querySelector("#result").innerHTML = userInput;  
    // → Trang web sẽ thực thi alert('Hacked!') → LỖ HỔNG XSS

Câu A3:
    1.  Khi không có stopPropagation(): 
        BUTTON
        INNER
        OUTER

    2. Nếu uncomment dòng e.stopPropagation():
        BUTTON

Câu C1:
    1.Dòng: addEventListener("onclick", ...)
    Lỗi: Sai tên event.
    Sửa: addEventListener("click", ...)

    2.Dòng: countDisplay = count;
    Lỗi: Gán sai cho element.
    Sửa: countDisplay.textContent = count;

    3.Dòng: historyList.innerHTML = null;
    Lỗi: Gán null không xóa được nội dung.
    Sửa: historyList.innerHTML = '';

    4.Dòng: item.remove;
    Lỗi: Thiếu dấu ngoặc ().
    Sửa: item.remove();

    5.Dòng: count = localStorage.getItem("count");
    Lỗi: Không chuyển chuỗi sang số.
    Sửa: count = parseInt(localStorage.getItem("count")) || 0;

    6.Dùng innerHTML cho countDisplay
    Lỗi: Không cần thiết và kém an toàn.
    Sửa: Dùng textContent.

    7.Không load history từ localStorage khi refresh trang.
    Sửa: Thêm code load historyList.innerHTML.

    8.Không lưu history vào localStorage sau khi xóa item.
    Sửa: Gọi saveData() sau mỗi thay đổi.

Câu C2:
    1. Bind event lên 1000 elements riêng lẻ là BAD PRACTICE vì:

    Tiêu tốn bộ nhớ: Mỗi element giữ một listener → RAM tăng cao.
    Chậm khi attach: Phải loop 1000 lần để addEventListener.
    Khó maintain: Code dài, khó gỡ event sau này.
    Hiệu suất kém: Khi DOM thay đổi (thêm/xóa element), phải bind lại hết.

    Event Delegation giải quyết như thế nào?
    Chỉ bind 1 event listener lên phần tử cha (ví dụ: #todoList hoặc document).
    Khi click bất kỳ con nào, event sẽ bubbling lên cha → kiểm tra event.target để xử lý.

    2. Refactor code dùng DocumentFragment
        const fragment = document.createDocumentFragment();

    for (let i = 0; i < 1000; i++) {
        const div = document.createElement("div");
        div.textContent = `Item ${i}`;
        fragment.appendChild(div);        // Chỉ thao tác trên fragment
    }

    document.body.appendChild(fragment);  // Chỉ 1 lần reflow!

    Giải thích: Reflow & Repaint là 2 thao tác rất tốn kém của trình duyệt, code gốc: Mỗi lần appendChild vào document.body → trình duyệt phải reflow (tính toán lại layout) 1000 lần.
