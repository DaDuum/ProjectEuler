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

}