var maxNumb = window.prompt("Maximum number to be conciderated?");

largestPrimeFactor = function(n){
  var primeNumber = 0;
  // do your work here

  var arrayPrime = [1, 2, 3, 5, 7, 9];
  var arrayOdd = [3, 7, 9, 11];
  var temp;

  if (n%2 === 0){
    window.alert("not prime");
    primeNumber = 2;
  } else if (n%5 === 0){
    window.alert("not prime");
    primeNumber = 5;
  } else {
    for(j=0; j<=n; j+10){
      for(k=0; k <= 4; k++){
        temp = arrayOdd[j] + k
        if (n%temp == 0){
          primeNumber = temp;
          j = n + 1;
          k = 5;
        } else {
          primeNumber = n;
          j = n + 1;
          k = 5;
        }
      }
    }
  }

  for(i=0; i <= 5; i++){
    if( n == arrayPrime[i]){
      primeNumber = n;
    }
  }

  window.alert(primeNumber);
  return primeNumber;
}

largestPrimeFactor(maxNumb);