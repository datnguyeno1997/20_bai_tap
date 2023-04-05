let arr = new Array(10);
for (i = 0; i < arr.length; i++) {
    arr[i] = Math.ceil(Math.random() * (-20) + Math.random() * 30);
}
console.log(arr);
function countNegav7(array) {
    let x = [1, 7, 14, -8, -5, 10, 21];
    function countPositiveMode7(numbers) {
        let count = 0;
        for (i = 0; i < array.length; i++) {
            if (array[i] > 0 && array[i] % 7 == 0) {
                for (let i = 0; i < numbers.length; i++) {
                    if (numbers[i] % 7 == 0 && numbers[i] > 0) {
                        count++;
                    }
                }
                return count;
            }
        }
    }
}
            console.log(countNegav7(arr));
            document.write(`${countPositiveMode7(x)}`);