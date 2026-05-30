// ====================== 1. PIPE ======================
function pipe(...fns) {
    return function(initialValue) {
        return fns.reduce((acc, fn) => fn(acc), initialValue);
    };
}

// Test pipe
const process = pipe(
    x => x * 2,
    x => x + 10,
    x => x.toString(),
    x => "Kết quả: " + x
);

console.log(process(5)); // → "Kết quả: 20"


// ====================== 2. MEMOIZE ======================
function memoize(fn) {
    const cache = new Map();
    
    return function(...args) {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            console.log("(Lấy từ cache)");
            return cache.get(key);
        }
        
        const result = fn(...args);
        cache.set(key, result);
        return result;
    };
}

// Test memoize
const expensiveCalc = memoize((n) => {
    console.log("Đang tính...");
    let result = 0;
    for (let i = 0; i < n; i++) result += i;
    return result;
});

console.log(expensiveCalc(1000000));
console.log(expensiveCalc(1000000)); // Lần 2 lấy từ cache


// ====================== 3. DEBOUNCE ======================
function debounce(fn, delay) {
    let timeoutId;
    
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            fn(...args);
        }, delay);
    };
}

// Test debounce
const search = debounce((query) => {
    console.log("Searching for:", query);
}, 500);

// Giả lập user gõ nhanh
search("a");
search("ap");
search("app");
search("apple");  // Chỉ lần này mới chạy sau 500ms


// ====================== 4. RETRY (Async) ======================
async function retry(fn, maxAttempts = 3) {
    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
        try {
            return await fn();
        } catch (error) {
            console.log(`Thử lần ${attempt}/${maxAttempts} thất bại:`, error.message);
            if (attempt === maxAttempts) throw error;
            await new Promise(resolve => setTimeout(resolve, 1000)); // delay 1s
        }
    }
}

// Test retry
async function testRetry() {
    let count = 0;
    const unstableApi = async () => {
        count++;
        if (count < 3) throw new Error("Kết nối thất bại");
        return "Kết nối thành công!";
    };

    try {
        const result = await retry(unstableApi, 4);
        console.log("Kết quả:", result);
    } catch (e) {
        console.log("Đã thử hết:", e.message);
    }
}

testRetry();

