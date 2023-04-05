function isSymmetric(arr) {
    for (i = 0; i < arr.length / 2; i++) {
        if (arr[i] !== arr[arr.length - 1 - i]) {
return 0; 
}
}
return 1;
}
let x = [1, 2, 3, 4, 5];
let y = [1,2,3,2,1]
document.write(isSymmetric(x) + "<br>");
document.write(isSymmetric(y));
