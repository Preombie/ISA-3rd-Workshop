//PREUKTI PARAJULI

//AREA OF TRIANGLE
function aOT(base,height){
    var A = (base * height) / 2;
    return A;
}
console.log(aOT(4,6));

//RETURN SOMETHING TO ME 
function reSome(title){
    var change = "Something " + title;
    return change;
}
console.log(reSome("is better than nothing."));

//BASKETBALL SCORES
function score(firstPoint, secondPoint){
    firstPoint = firstPoint * 2;
    secondPoint = secondPoint * 3;
    var totalScore = firstPoint + secondPoint;
    return totalScore;
}
console.log(score(38, 8));

//LESS THAN 100
function less100(num1, num2){
    var total = num1 + num2;
    return total < 100;
}
console.log(less100(33, 77));

//ADD UP TO NUMBER
function numAdd(num){
    var addNum = 0;
    for (let i = 1; i<= num; i++){
        addNum = addNum + i
    }
    return addNum;
}
console.log(numAdd(10));

//ODDISH AND EVENISH
function oddEveNish(num){
    var sum = 0;
    var number = num;
    while(number != 0){
        var lastDigit = number % 10;
        sum = sum + lastDigit;
        number = Math.floor(number / 10);
    }
    if(sum % 2 == 0){
        return "Evenish";
    }else {
        return "Oddish";
    }
}
console.log(oddEveNish(373));

//Prime Number
function findPrimesInRange(start, end) {
    // Initialize an empty array to store prime numbers
    let prime = [];

    // Loop through all numbers in the range
    for (let i = start; i <= end; i++) {
        let isPrime = true;

        // Check if current number is prime
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }

        // If current number is prime, add it to the array
        if (isPrime && i > 1) {
            prime.push(i);
        }
    }

    // Return the array of prime numbers
    return prime;
}

// Example usage
console.log(findPrimesInRange(1, 10));

//LEFTSHIFT BY POWERS OF 2
function leftShift(num1,  num2){
    if (num2 < 0){
        return "num2 must be positive integer."
    }
    var ans = num1 * ( 2 ** num2);
    return ans;
}
console.log(leftShift(12, 4));

//CONVERT A NUMBER TO BASE-2
function numToBase2(num) {
    if (num == 0) {
        return 0;
    } else if (num >= 1024) {
        return "Number must be below 1024."
    }
    var number = num;
    var finalBinary = "";
    while (number != 0) {
        var binary = (number % 2).toString();
        number = Math.floor(number / 2);
        finalBinary = finalBinary + binary;
    }
    var spiltString = finalBinary.split("");
    var reverseArray = spiltString.reverse();
    finalBinary = reverseArray.join("");
    return finalBinary;
}
console.log(numToBase2(45));