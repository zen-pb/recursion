function fibs(num){
    let array = [0, 1];

    for(let i = 1; i < num - 1; i++)
    {
        array.push(array[i - 1] + array[i]);
    }

    return array;
}

console.log(fibs(8));