/**
 * for a given string tell me whether it has even number of characters or not
 * 
 */

// function evenSizedString(str){
//     console.log(str);
// }
// evenSizedString('Dhaka');

// ======================

// function evenSizedString(str){
//     const size = str.length;
//     console.log(str, size);
// }
// evenSizedString('Dhaka');  // letter number 
// evenSizedString('Rajshahi');
// evenSizedString('Cumilla');

//check by if

function evenSizedString(str){
    const size = str.length;
    console.log(str, size);
    if(size % 2 === 0){
        console.log('even size');
        return true;
    }
    else{
        console.log('odd size')
        return false;
    }
    
}
// evenSizedString('Dhaka');  // letter number 
// evenSizedString('Rajshahi');
// evenSizedString('Cumilla');

function doubleOrTriple( number, doDouble){
    if(doDouble){
        const result = number * 2 ;
        return result;
    }
    else{
        const result = number * 3 ;
        return result;
    }
}

// console.log(doubleOrTriple(5, true));
// console.log(doubleOrTriple(5, false));

function numberOfElements(numbers){
    const len = numbers.length;
    return len;
}
// numberOfElements([12, 34, 45, 33212, 5]);

function getAge(person){
    const age = person.age;
    return age;
}

const age = getAge(32);

console.log(age);







