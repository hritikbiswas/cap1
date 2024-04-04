// Use the above function to print the Primes from 2 to a given limit
function isPrime(limit){
    let isPrime=true;
    for(let i=2;i<=Math.sqrt(limit);i++){
        if(limit%i===0){
            return false
        }
    }
    return true;
}

function printPrimes(limit){
    for(let i=2;i<=(limit);i++){
        if(isPrime(i)){
            console.log(i)
        }
    }
}
printPrimes(10)