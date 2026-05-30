Câu A1:
    1. Function Declaration
    function tinhThueBaoHiem(luong) {
        const thue = luong > 11000000 ? luong * 0.1 : 0;
        const thucNhan = luong - thue;
        return {
            thue: thue,
            thuc_nhan: thucNhan
        };
    }

    2. Function Expression
    const tinhThueBaoHiem = function(luong) {
        const thue = luong > 11000000 ? luong * 0.1 : 0;
        const thucNhan = luong - thue;
        return {
            thue: thue,
            thuc_nhan: thucNhan
        };
    };

    3. Arrow Function
    const tinhThueBaoHiem = (luong) => {
        const thue = luong > 11000000 ? luong * 0.1 : 0;
        const thucNhan = luong - thue;
        return {
            thue: thue,
            thuc_nhan: thucNhan
        };
    };


3 cách này có khác nhau về hoisting.

Câu A2:

    // Đoạn 1:
    function counter() {
        let count = 0;
        return {
            increment: () => ++count,
            decrement: () => --count,
            getCount: () => count
        };
    }
    const c = counter();
    console.log(c.increment());  // 1
    console.log(c.increment());  // 2
    console.log(c.increment());  // 3
    console.log(c.decrement());  // 2
    console.log(c.getCount());   // 2

    // Đoạn 2:
    for (var i = 0; i < 3; i++) {
        setTimeout(() => console.log("var:", i), 100);
    }
    for (let j = 0; j < 3; j++) {
        setTimeout(() => console.log("let:", j), 200);
    }
    // Output sau 200ms:    var: 3
                            var: 3
                            var: 3
                            let: 0
                            let: 1
                            let: 2

Var vs Let trong setTimeout:
    +var i:
    var có function scope (không có block scope).
    Biến i chỉ có một bản duy nhất.
    Khi for loop chạy xong, i = 3.
    setTimeout chạy muộn hơn (sau khi loop kết thúc), nên cả 3 callback đều thấy i = 3.
    +let j:
    let có block scope (phạm vi khối {}).
    Mỗi lần lặp, JavaScript tạo ra một biến j mới riêng biệt.
    Mỗi setTimeout đóng closure lại với giá trị j của lần lặp đó.
    Do đó in ra đúng 0, 1, 2.

Câu A3:
    // 1. Lấy các số chẵn
    const chan = nums.filter(n => n % 2 === 0);

    // 2. Nhân mỗi số với 3
    const nhanBa = nums.map(n => n * 3);

    // 3. Tính tổng tất cả
    const tong = nums.reduce((sum, n) => sum + n, 0);

    // 4. Tìm số đầu tiên > 7
    const soDauTien = nums.find(n => n > 7);

    // 5. Kiểm tra CÓ số > 10 không
    const coLonHon10 = nums.some(n => n > 10);

    // 6. Kiểm tra TẤT CẢ đều > 0
    const tatCaLonHon0 = nums.every(n => n > 0);

    // 7. Tạo mảng "Số X là [chẵn/lẻ]"
    const moTa = nums.map(n => `Số ${n} là ${n % 2 === 0 ? "chẵn" : "lẻ"}`);

    // 8. Đảo ngược mảng (không mutate gốc)
    const daoNguoc = [...nums].reverse();

Câu A4:
    const product = {
    name: "iPhone 16",
    price: 25990000,
    specs: { ram: 8, storage: 256, color: "Titan" }
    };

    // Destructuring
    const { name, price, specs: { ram, color } } = product;
    console.log(name, price, ram, color);  // iPhone 16 25990000 8 Titan
    console.log(specs);                     //ReferenceError: specs is not defined

    // Spread
    const updated = { ...product, price: 23990000, sale: true };
    console.log(updated.price);            // 23990000
    console.log(updated.sale);             // true
    console.log(product.price);            // 25990000  (gốc ko bij thay ddooir)

    // Spread gotcha
    const copy = { ...product };
    copy.specs.ram = 16;
    console.log(product.specs.ram);        // 16 (16 có bị thay đổi do specs là 1 object, copy.specs và product.specs cùng chỉ vaò 1 vùng nhớ)

Câu C1
    function processOrders(orders) {
        return orders
            .filter(order => order.status === "completed" && order.total > 100000)
            .map(order => ({
                id: order.id,
                customer: order.customer,
                total: order.total,
                discount: order.total * 0.1,
                finalTotal: order.total * 0.9
            }))
            .sort((a, b) => b.finalTotal - a.finalTotal);
    }

Câu C2: