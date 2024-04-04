const userOddEven = prompt("Pari o Dispari?");
    console.log(userOddEven);
    

const userNumber = parseInt(prompt("Scegli un numero da 1 a 5"));
    console.log(userNumber, typeof userNumber);

    const cpuNumber = Math.floor((Math.random() * 5) + 1);
    console.log(cpuNumber);
    

const sum = userNumber + cpuNumber;
    console.log(sum);

    function isEven(sum){
        if (sum % 2 === 0){
            result = true;
    }	else {
        result = false;
    }
    
        //output
            return result;
    
    }

   
    console.log(isEven(sum));

    let oddOrEven;
    if (userOddEven === "pari"){
        oddOrEven = true
    } else {
        oddOrEven = false
    }
    
    console.log(oddOrEven);

    let finalResult;
    if(oddOrEven === isEven(sum)){
        finalResult = "Hai vinto"
    } else {
        finalResult = "Hai perso"
    }
    console.log(finalResult);

    document.getElementById("score").innerHTML = finalResult;