const calculator = {
    displayValue: '0',
    count: 0,
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
};

document.getElementById("theCount").innerHTML = calculator.displayValue;


var gridItems = document.getElementsByClassName("grid-item");



// Plus
gridItems[0].onclick = () => {
    calculator.operator = '+';
    document.getElementById("total").innerHTML = count;
}
// Minus 
gridItems[1].onclick = () => {
    calculator.operator = '-';
}
// Times
gridItems[2].onclick = () => {
    calculator.operator = '*';
    
}
// Divide 
gridItems[3].onclick = () => {
    calculator.operator = '/';
}
// 7
gridItems[4].onclick = () => {
    calculate(getNumber(4));
}
// 8
gridItems[5].onclick = () => {
    
}
// 9
gridItems[6].onclick = () => {
    
}
// Equals
gridItems[7].onclick = () => {
    
}
// 4
gridItems[8].onclick = () => {
    
}
// 5
gridItems[9].onclick = () => {
    
}
// 6
gridItems[10].onclick = () => {
    
}
// 1
gridItems[11].onclick = () => {
    
}
// 2
gridItems[12].onclick = () => {
    
}
// 3
gridItems[13].onclick = () => {
    
}
// 0
gridItems[14].onclick = () => {
    
}
// positive or negative 
gridItems[15].onclick = () => {
    
}
// All Clear
gridItems[16].onclick = () => {
    
}

const calculate = (number) => {
    if (calculator.firstOperand == null)
    {
        calculator.firstOperand = number; 
        calculator.waitingForSecondOperand == false;
        updateDisplay(number);
        
    }
    else if (calculator.firstOperand != null && waitingForSecondOperand == false)
    {

    }
}

const updateDisplay = (number) => {
    if (calculator.displayValue == '0')
    {
        calculator.displayValue = String(number);
    }
    else if (calculator.displayValue != '0' )
    {
        calculator.displayValue += String(number);
    }
    // var totalNode = document.createTextNode(calculator.displayValue);
    // var item = document.getElementById("total").childNodes[0];
    // item.replaceChild(totalNode, item.childNodes[0])
    document.getElementById("theCount").innerHTML = calculator.displayValue;
}

const getNumber = (number) => {
    let clickedNumber = parseInt(gridItems[number].innerHTML);
    return clickedNumber;
}