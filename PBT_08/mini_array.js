const miniArray = {
    // 1. Map
    map(arr, fn) {
        const result = [];
        for (let i = 0; i < arr.length; i++) {
            result.push(fn(arr[i], i, arr));
        }
        return result;
    },

    // 2. Filter
    filter(arr, fn) {
        const result = [];
        for (let i = 0; i < arr.length; i++) {
            if (fn(arr[i], i, arr)) {
                result.push(arr[i]);
            }
        }
        return result;
    },

    // 3. Reduce
    reduce(arr, fn, initialValue) {
        let accumulator = initialValue;
        let startIndex = 0;

        // Nếu không truyền initialValue, lấy phần tử đầu tiên làm accumulator
        if (accumulator === undefined) {
            if (arr.length === 0) {
                throw new Error("Reduce of empty array with no initial value");
            }
            accumulator = arr[0];
            startIndex = 1;
        }

        for (let i = startIndex; i < arr.length; i++) {
            accumulator = fn(accumulator, arr[i], i, arr);
        }

        return accumulator;
    }
};

// ====================== TEST ======================
console.log(miniArray.map([1, 2, 3], x => x * 2));                    // [2, 4, 6]
console.log(miniArray.filter([1, 2, 3, 4], x => x > 2));              // [3, 4]
console.log(miniArray.reduce([1, 2, 3, 4], (a, b) => a + b, 0));      // 10

// Test thêm
console.log(miniArray.reduce([1, 2, 3, 4], (a, b) => a + b));         // 10 (không initialValue)