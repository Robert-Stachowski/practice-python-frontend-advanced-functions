const giveMeMaxSum = function() {
    const userInput = parseInt(prompt("podaj liczbę do której sumujemy"));

    let result = 0;
    for (let i=1; i<=userInput; i++){
        result = result+i;
    }
    return result;
    
}

const sum1 = giveMeMaxSum();
console.log(sum1)