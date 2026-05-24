function startGame() {
    const secretNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;
    let maxAttempts = 7;
    let guessedNumbers = [];

    alert("🎮 Trò chơi đoán số đã bắt đầu!\nBạn có 7 lượt đoán.");

    while (attempts < maxAttempts) {
        let userInput = prompt(`Lượt ${attempts + 1}/${maxAttempts}\nNhập số từ 1 đến 100:`);

        // Người dùng bấm Cancel
        if (userInput === null) {
            alert("Bạn đã thoát game.");
            return;
        }

        let guess = parseInt(userInput);

        // Validate input
        if (isNaN(guess) || guess < 1 || guess > 100) {
            alert("❌ Vui lòng nhập số hợp lệ từ 1 đến 100!");
            continue;
        }

        // Kiểm tra đoán trùng số
        if (guessedNumbers.includes(guess)) {
            alert("⚠️ Bạn đã đoán số này rồi! Hãy thử số khác.");
            continue;
        }

        guessedNumbers.push(guess);
        attempts++;

        if (guess === secretNumber) {
            alert(`🎉 CHÚC MỪNG!\nBạn đã đoán đúng số ${secretNumber} sau ${attempts} lượt!`);
            return;
        } 
        else if (guess < secretNumber) {
            alert(`📈 Số của bạn THẤP hơn!\nCòn ${maxAttempts - attempts} lượt.`);
        } 
        else {
            alert(`📉 Số của bạn CAO hơn!\nCòn ${maxAttempts - attempts} lượt.`);
        }
    }

    // Hết lượt
    alert(`😢 HẾT LƯỢT!\nSố đúng là ${secretNumber}.\nChúc bạn may mắn lần sau!`);
}