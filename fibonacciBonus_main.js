// bonus round
var maxNumb = window.prompt("Maximum number to be conciderated?");

_highestFibonacciNumber(maxNumb);

function _highestFibonacciNumber (maxFibValue){
    var highest = 0;
  
    //define your base case, validate your input
    
    //the code will return the highest Fibonacci Number
    //less than or equal to the 'highest' value given
  
    //do your work here
    var arrayFib = [0,1];
    var lastFib = 0;


    for(i = 0; i < maxFibValue; i++){
        lastFib = arrayFib[arrayFib.length-1] + arrayFib[arrayFib.length-2];
        arrayFib.push(lastFib);
        i = lastFib;
    }

    if(maxFibValue == arrayFib[arrayFib.length-1]){
        // arrayFib keeps the last value
    } else {
        arrayFib.splice(-1,1);
    }

    highest = arrayFib[arrayFib.length-1];
    window.alert(highest);


    return highest;
  }

//-------------------- Main code ----------------------------------------------
/* var maxNumb = window.prompt("Maximum number to be conciderated?");

_sumFibs(maxNumb);

function _sumFibs( maxFibValue ) {
    var sum = 0;
  
    // do your work here
    var arrayFib = [0,1];
    var lastFib = 0;


    for(i = 0; i < maxFibValue; i++){
        lastFib = arrayFib[arrayFib.length-1] + arrayFib[arrayFib.length-2];
        arrayFib.push(lastFib);
        i = lastFib;
    }

    arrayFib.splice(-1,1);

    for(i=0;i<arrayFib.length;i++){
        if (arrayFib[i]%2 === 0){
            sum = sum + arrayFib[i];
        }
    }


    window.alert(sum);

    return sum;
  }

   */
