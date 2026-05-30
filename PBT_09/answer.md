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