function eatingRice(){
    console.log('Wash Hand');
    console.log('Take sit');
    console.log('Take Food');
    console.log('Start Eating');
}
eatingRice();

// 3--> 3*3 = 9
// 4--> 4*4 = 16
// 5--> 5*5 = 25
// 11--> 11*11 = 121

function square(number){
    console.log(number);
    console.log('value of the number parameter', number);
    
    const borgo = number * number ;
    console.log('square of the given number is: ', borgo);
}

square(4); 
// console.log(square);

square(12);
square(3);
square(9);

function add(num1, num2){
    const sum = num1 + num2;
    console.log(sum);
}

add(3,5);
add(31,53);
add(33,54);

function addAll(a, b, c,d) {
    const total = a + b + c + d;

    // console.log( a, b, c, d, e); //wrong way****
    console.log(total);
}

addAll(3,4,5,7);
// addAll(3,4,5,7,8); //wrong way****