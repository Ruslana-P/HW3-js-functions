console.log('------------- #4');
    function sum(firstNum, secondNum){
    return firstNum + secondNum;
    }
    console.log(sum(2, 3));

    function subtraction(fNumber, sNumber){
        return fNumber - sNumber;
    }
    console.log(subtraction(4,3));

    function multiplication(fNumber, sNumber){
        return fNumber * sNumber;
    }
    console.log(multiplication(4,3));


    function division (a, b){
        return a / b;
    }
    console.log(division(10, 2));



console.log('------------- #5');

function exersice5 (n){
    let i=1;
    for ( i=1; i<=n; i++){
        console.log(i);
    }
}
exersice5(5)




console.log('------------- #6');

function exersice6 (n){
    let i=n;
    for ( i=n; i>=1; i--){
        console.log(i);
    }
}
exersice6(5)





function stepen(x, n){
    let result = x ** n;
    return result;
}
console.log(stepen(2, 3));



console.log('------------- #8');
function isBigger(a,b){
    if (a>b){
        return true;
    }
    else{
        return false;
    }
}
console.log(isBigger(1, 2));


console.log('------------- #9');
function isSmaller(a,b){
    if (a<b){
        return true;
    }
    else{
        return false;
    }
}
console.log(isSmaller(1, 2));

