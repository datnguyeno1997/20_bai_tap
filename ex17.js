let a = [
    [2, 4, 3],
    [6, 5, 4],
    [10, 3, 9]
];
function decreaseNumber(arr) {
    let check = true;
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length - 1; j++) {
            if (arr[i][j] <= arr[i][j + 1]) {
                check = false;
                break;
            }
        }
        if (check) {
            result.push(arr[i]);
        }
        check = true;
    }
    return result;
}
document.write(decreaseNumber(a));