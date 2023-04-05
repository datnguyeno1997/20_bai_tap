let arr = new Array(10);
for (i = 0; i < arr.length; i++) {
    arr[i] = (Math.random() * (-20) + Math.random() * 30).toFixed(2);
}
console.log(arr);
function logNum(array){
    for(i=0;i<array.length;i++){
        console.log(array[i]);
    }
}
logNum(arr);