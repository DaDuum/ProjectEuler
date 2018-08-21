
function executeFunction01() {

    var evenNumbers = new Array(0, 2, 4, 6, 8, 10, 12);
    var allEven = evenNumbers.every(evenNumberCheck, this);

    if (allEven) {
        console.log("all even ..");
    } else {
        console.log("nope ..");
    }
    function evenNumberCheck(value, index, array) {
        return (value % 2) == 0;
    }
}

function executeFunction02() {
    var sportsArray = ['soccer', 'basketball', 'hockey', 'football', 'cricket', 'rugby'];
    sportsArray.sort().forEach(offerSport);
    //sportsArray.forEach(offerSport);

    function offerSport(value, index, array) {
        var sportsList = document.getElementById("sportsList");
        var bullet = document.createElement("li");
        bullet.innerText = value;
        sportsList.appendChild(bullet);
    }
}

function executeFunction03() {
    var evenNumbers = new Array(0, 2, 4, 6, 8, 9, 10, 12);
    var allEven = evenNumbers.filter(evenNumberCheck, evenNumbers);

    function evenNumberCheck(value, index, array) {
        return (value % 2) == 0;
    }
    console.log(allEven);
}

function executeFunction04() {
    var money = [12.8, 15.9, 21.7, 35.2];
    var roundedMoney = money.map(roundOff, money);
    console.log(money);

    function roundOff(value, index, array) {
        return Math.round(value);
    }
    console.log(roundedMoney);

}

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


//function executeFunction08() {
//    var num = 20; 
//    var newVal = 0;
//    var primeNum = [];

//    for (var iterator = 2; iterator <= num; iterator++) {
//        GeneratedPrime(iterator);


//    }

//    function GeneratedPrime(iterator_check) {
//        for (var generatedNumForPrime = 2; generatedNumForPrime <= iterator_check; generatedNumForPrime++) {
//            if (iterator_check % generatedNumForPrime == 0) {
//                primeNum.push(generatedNumForPrime);
//            }
//        }

//    }

//    for (var value in primeNum) {
//        console.log(value);
//    }

//}


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

