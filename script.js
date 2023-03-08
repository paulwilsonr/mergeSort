function merge(leftArr, rightArr) {
    let arr = [];
    while(leftArr.length && rightArr.length) {
        if(leftArr[0] < rightArr[0]) {
            arr.push(leftArr.shift());
        } else {
            arr.push(rightArr.shift());
        }
    }
    return [...arr, ...leftArr, ...rightArr];
}

function mergeSort(arr) {
    const half = arr.length / 2;
    
    if(half < 1) {
        return arr;
    }

    const left = arr.splice(0, half);
    return merge(mergeSort(left), mergeSort(arr));
}






let testArr = [2, 5, 1, 3, 8, 4, 7, 9, 6];

console.log(mergeSort(testArr))