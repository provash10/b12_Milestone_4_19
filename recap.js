function add (price1, price2){
    const total = price1 + price2;
    return total;
}

const bill = add(5, 80);
console.log(bill);

//direct return
function add2 (price3, price4){
    return price3 + price4;
}

const bill2 = add2(45, 35);

console.log(bill2);


function doMath(num1, num2){
    const sum = num1 + num2;
    const diff = num1 - num2;
    const mult = sum * diff;
    const result = mult / 2;
    return result;
}

// doMath(35, 45);

const result = doMath( 10, 5);
console.log(result);


/// 
