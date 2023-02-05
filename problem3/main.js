/*******************************************************************

LARGEST PRIME FACTOR

The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?

********************************************************************/

function largestPrimeFactor(integer = 600851475143){
    if (integer > Number.MAX_SAFE_INTEGER) return 'Unsafe Number';
    
}

console.log(largestPrimeFactor(13195));

module.exports = largestPrimeFactor;