function checkPrime(num){
    let isPrime = true;
 
    if(num <= 1){
       return false;
    }
 
    for(let i = 2; i < num; i++){
       if(num % i == 0){
          isPrime = false;
          break; 
       }
    }
 
    if(isPrime == true){
       console.log("The given number is a prime number");
    } else {
       console.log("The given number is not a prime number");
    }
 }
 
 checkPrime(5);
 