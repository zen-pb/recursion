function fibsRec(num){
    if (num == 2) return [0, 1];
    if (num == 1) return [0];

    let array = fibsRec(num - 1);
    array.push(array[array.length - 1] + array[array.length - 2]);
    
    return array;
}

console.log(fibsRec(8));