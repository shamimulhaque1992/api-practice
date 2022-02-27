const add4 = (number) => {
    let sum = 0;
    for (let num in number) {
        sum = sum + number[num];
        
    }
    return sum;
}

const inpArr = [1,2,3,4,5]
console.log(add4(inpArr));