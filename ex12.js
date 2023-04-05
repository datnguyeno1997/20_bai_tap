function isAscending(array) {
    let isAscending = true;
    for (let i=1;i<array.length;i++) {
        if(array[i] - array[i-1]<0) {
            isAscending = false;
        }
    }
    return isAscending;
}
let arr1 = [1,2,3,4,5];
document.write(isAscending(arr1));