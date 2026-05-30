function createCart() {
    let items = [];
    let discountRate = 0;

    return {
        // Thêm sản phẩm (tăng quantity nếu đã tồn tại)
        addItem(product, quantity = 1) {
            const existing = items.find(item => item.id === product.id);
            if (existing) {
                existing.quantity += quantity;
            } else {
                items.push({ ...product, quantity });
            }
            return this;
        },

        // Xóa sản phẩm theo id
        removeItem(productId) {
            items = items.filter(item => item.id !== productId);
            return this;
        },

        // Cập nhật số lượng
        updateQuantity(productId, newQuantity) {
            if (newQuantity < 1) {
                this.removeItem(productId);
                return this;
            }
            const item = items.find(item => item.id === productId);
            if (item) item.quantity = newQuantity;
            return this;
        },

        // Tính tổng tiền sau giảm giá
        getTotal() {
            const subtotal = items.reduce((sum, item) => 
                sum + item.price * item.quantity, 0);
            return subtotal * (1 - discountRate / 100);
        },

        // Áp dụng mã giảm giá
        applyDiscount(code) {
            const upperCode = code.toUpperCase();
            if (upperCode === "SALE10") discountRate = 10;
            else if (upperCode === "SALE20") discountRate = 20;
            else if (upperCode === "FREESHIP") discountRate = 0; // sẽ xử lý riêng nếu cần
            else discountRate = 0;
            return this;
        },

        // In giỏ hàng
        printCart() {
            console.log("\n" + "═".repeat(65));
            console.log("                   GIỎ HÀNG");
            console.log("═".repeat(65));
            console.log(" #  | Sản phẩm".padEnd(28) + " | SL  | Đơn giá      | Thành tiền");
            console.log("─".repeat(65));

            let subtotal = 0;

            items.forEach((item, index) => {
                const thanhTien = item.price * item.quantity;
                subtotal += thanhTien;
                console.log(
                    `${(index + 1).toString().padEnd(3)} | ${item.name.padEnd(24)} | ` +
                    `${item.quantity.toString().padEnd(3)} | ` +
                    `${item.price.toLocaleString('vi-VN').padEnd(11)} | ` +
                    `${thanhTien.toLocaleString('vi-VN')}`
                );
            });

            const total = this.getTotal();
            console.log("─".repeat(65));
            console.log(` Tổng cộng: ${subtotal.toLocaleString('vi-VN').padStart(48)}đ`);
            if (discountRate > 0) {
                console.log(` Giảm giá (${discountRate}%): ${Math.round(subtotal - total).toLocaleString('vi-VN').padStart(41)}đ`);
            }
            console.log(` THANH TOÁN: ${Math.round(total).toLocaleString('vi-VN').padStart(47)}đ`);
            console.log("═".repeat(65));
        },

        // Tổng số lượng sản phẩm
        getItemCount() {
            return items.reduce((sum, item) => sum + item.quantity, 0);
        },

        // Xóa toàn bộ giỏ
        clearCart() {
            items = [];
            discountRate = 0;
            return this;
        }
    };
}

// ====================== TEST ======================
const cart = createCart();

cart.addItem({ id: 1, name: "iPhone 16", price: 25990000 }, 1);
cart.addItem({ id: 3, name: "AirPods Pro", price: 6990000 }, 2);
cart.addItem({ id: 1, name: "iPhone 16", price: 25990000 }, 1); // tăng số lượng

cart.printCart();

cart.applyDiscount("SALE10");
cart.printCart();

console.log("Số SP:", cart.getItemCount());
cart.removeItem(3);
console.log("Sau xóa:", cart.getItemCount());