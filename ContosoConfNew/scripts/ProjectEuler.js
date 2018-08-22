function executeProblem001() {
    var sum = 0;

    for (iterator = 0; iterator < 1000; iterator++) {
        if (iterator % 3 == 0 || iterator % 5 == 0) {
            console.log(iterator)
            sum += iterator;
        }
    }
    console.log(sum);
}

// Multiples of 3 and 5 - Project Euler
function executeProblem01() {
    var endOfSequence = 100;
    var firstNum = 0;
    var secondNum = 1;
    var temp = 1;

    for (iterator = 2; iterator <= endOfSequence; iterator++) {
        temp = firstNum + secondNum;
        firstNum = secondNum;
        secondNum = temp;
    }
    console.log(temp);
}

// sum of Even Fibonacci numbers - Project Euler
function executeProblem02() {
    var endOfSequence = 10000;
    var a = 0;
    var b = 1;
    var temp = 1;
    var evenNumbers = 0;
    var cap = 4000000;

    for (iterator = 2; iterator <= endOfSequence; iterator++) {
        temp = a + b;
        a = b;
        b = temp;
        if (b >= cap) {
            break;
        }

        if (b % 2 == 0) {
            evenNumbers += b;
        }
    }
    console.log(evenNumbers);
}

// Primal numbers - problem 3 - Project Euler
function executeProblem03() {
    var number = 13;
    var primeNum = [];
    var usedPrimes = [];
    var topNum = 600851475143;
    var topPrimeNumValue = 0;

    function GenerateAndCheckPrimeNum() {
        for (var iterator_1 = 2; iterator_1 <= topNum; iterator_1++) {
            var isPrime = true;

            for (var iterator_2 = 2; iterator_2 < iterator_1; iterator_2++) {
                if (iterator_1 % iterator_2 === 0) {
                    isPrime = false;
                }
            }
            if (isPrime === true) {

                primeNum.push(iterator_1);
            }
            if (isPrime === true) {
                if (topNum % iterator_1 === 0) {
                    topNum = topNum / iterator_1;
                    if (topPrimeNumValue < iterator_1) {
                        topPrimeNumValue = iterator_1;
                    }
                    break;
                }
            }
        }
    }
    while (topNum != 1) {
        GenerateAndCheckPrimeNum();
    }

    console.log(topPrimeNumValue);

}

// Palindromic numbers - problem 4 - Project Euler

function executeProblem04() {
    var maxValue = 999;
    var minValue = 1;
    var palindromicNum = 0;
    var temp = 0;

    generatePalindromicNum();


    function generatePalindromicNum() {
        // do we want to go from "1", doesnt make a sence to multiple with "1";
        for (iterator_1 = minValue; iterator_1 <= maxValue; iterator_1++) {
            for (iterator_2 = minValue; iterator_2 <= maxValue; iterator_2++) {
                var product = iterator_1 * iterator_2;

                if (reverseNumber(product) == product.toString()) {
                    if (palindromicNum < iterator_1 * iterator_2) {
                        palindromicNum = iterator_1 * iterator_2;
                    }
                }
            }
        }
    }
    // https://medium.freecodecamp.org/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb
    function reverseNumber(num) {
        return num.toString().split("").reverse().join("");
    }

    console.log(palindromicNum);

}

//  problem 5 - Project Euler

function executeProblem05() {

    var numOfNum = 20; 
    var stop = false;

    for (iterator_1 = 1; !stop ; iterator_1++) {

        for (iterator_2 = 1; iterator_2 <= numOfNum; iterator_2++) {
            if (iterator_1 % iterator_2 != 0) {
                break;
            }

            if (iterator_2 == numOfNum) {
                console.log(iterator_1);
                stop = true;
            }
        }     
    }
}

// problem 6 - Project Euler

function executeProblem06() {

    var maxValue = 100;
    var sumOfSqaredNum = 0;
    var sumSquared = 0;

    function sum01() {
        let temp01 = 0;
        for (iterator_1 = 1; iterator_1 <= maxValue; iterator_1++) {
            temp01 += (iterator_1 ** 2);
        }
        return temp01;
    } 

    function sum02() {
        let temp02 = 0;
        for (iterator_2 = 1; iterator_2 <= maxValue; iterator_2++) {
            temp02 += iterator_2;
        }
        return temp02 ** 2;
    } 

    console.log(sum01() - sum02());


    

}

