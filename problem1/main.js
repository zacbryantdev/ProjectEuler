/*******************************************************************

MULTIPLES OF 3 OR 5

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000.

********************************************************************/

// This function will accept a number and return the sum of all multiples of 3 or 5 below that number

function multiplesOfThreeOrFive(n = 1000){
    if (isNaN(n)){
        return NaN
    }
    let counter = 0
    for (let i = 1; i < Math.floor(n); i++ ){       
        if (i % 3 == 0 || i % 5 == 0){
            counter += i;
        }
    }
    return counter;
}

module.exports = multiplesOfThreeOrFive;