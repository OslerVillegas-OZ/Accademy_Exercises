var maxNumb = window.prompt("Maximum number to be conciderated?");

largestPrimeFactor = function(n){
  var primeNumber = 0;
  // do your work here

  var arrayPrime = [1, 2, 3, 5, 7];
  var largo;

  for(i=8; i <= n; i++) {

    largo = arrayPrime.length

    for(j=1; j < largo; j++)

      if (i%arrayPrime[j] == 0){
        primeNumber = arrayPrime[j];
      } else {
        arrayPrime.push(i);
      }

  }
  
  // primeNumber = arrayPrime;
  window.alert(primeNumber);


  return primeNumber;
}

largestPrimeFactor(maxNumb);