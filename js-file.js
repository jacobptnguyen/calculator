// Made by: Jacob Nguyen
// Email: jacobptnguyen@gmail.com

function main(){
    screen = document.querySelector("#screenText");
    makeButtonEvents(screen);
}

function makeButtonEvents(screen){
    stack = []; // [num3, op, num2, op, num1], passed by ref
    makeNumberButtons(screen, stack); // 0-9, dec
    makeOperatorButtons(screen, stack); // add, sub, mult, div
    makeOtherButtons(screen, stack); // clr, +/-, %, =
}

function makeOtherButtons(screen, stack){
    clear = document.querySelector("#clear");
    negate = document.querySelector("#negate");
    divideBy100 = document.querySelector("#divideBy100");
    equals = document.querySelector("#equals");

    function operate(curNum, newNum, op){
        if(op == "+"){
            curNum += newNum;
        }
        else if(op == "-"){
            curNum -= newNum;
        }
        else if(op == "*"){
            curNum *= newNum;
        }
        else if(op == "/"){
            curNum /= newNum;   
        }
        return curNum
    }

    clear.addEventListener('click', function clearFunc(e){
        screen.textContent = "0";
        stack.length = 0;
    });

    negate.addEventListener('click', function negateFunc(e){
        if(screen.textContent != "0"){
            if(screen.textContent[0] == "-"){
                screen.textContent = screen.textContent.substring(1);
            }
            else{
                screen.textContent = "-" + screen.textContent;
            }
        }
    });

    divideBy100.addEventListener('click', function divideBy100Func(e){
        curNum = parseFloat(screen.textContent);
        curNum /= 100.0;
        screen.textContent = curNum.toString();
    });

    equals.addEventListener('click', function equalsFunc(e){
        curNum = parseFloat(screen.textContent);
        stack[0] = curNum;
        curNum = stack.pop();
        while(stack.length > 0){
            op = stack.pop();
            newNum = stack.pop();
            curNum = operate(curNum, newNum, op);
        }
        screen.textContent = curNum.toString();
    });

}

function makeOperatorButtons(screen, stack){
    plus = document.querySelector("#plus");
    minus = document.querySelector("#minus");
    mult = document.querySelector("#mult");
    divide = document.querySelector("#divide");

    plus.addEventListener('click', function plusFunc(e){
        curNum = parseFloat(screen.textContent);
        stack[0] = curNum;
        stack.unshift("+");
    });

    minus.addEventListener('click', function minusFunc(e){
        curNum = parseFloat(screen.textContent);
        stack[0] = curNum;
        stack.unshift("-");
    });

    mult.addEventListener('click', function multFunc(e){
        curNum = parseFloat(screen.textContent);
        stack[0] = curNum;
        stack.unshift("*");
    });

    divide.addEventListener('click', function divideFunc(e){
        curNum = parseFloat(screen.textContent);
        stack[0] = curNum;
        stack.unshift("/");
    });
}

function makeNumberButtons(screen){
    one = document.querySelector("#one");
    two = document.querySelector("#two");
    three = document.querySelector("#three");
    four = document.querySelector("#four");
    five = document.querySelector("#five");
    six = document.querySelector("#six");
    seven = document.querySelector("#seven");
    eight = document.querySelector("#eight");
    nine = document.querySelector("#nine");
    dec = document.querySelector("#dec");

    function alreadyHasOp(stack){
        return stack[0] == "+" || stack[0] == "-" || stack[0] == "*" || stack[0] == "/"
    }

    function AlrHasDec(screen){
        for(i = 0; i < screen.textContent.length; i++){
            if(screen.textContent[i] == "."){
                return true;
            }
        }
        return false;
    }

    one.addEventListener('click', function oneFunc(e){
        curNum = screen.textContent;
        if(stack.length == 0){
            curNum = "0";
        }
        if(alreadyHasOp(stack)){
            curNum = "0";
            stack.unshift("0");
        }
        if(curNum == "0"){
            screen.textContent = "1";
            stack[0] = "1";
        }
        else{
            screen.textContent += "1";
            stack[0] += "1";
        }
    });
    two.addEventListener('click', function twoFunc(e){
        curNum = screen.textContent;
        if(stack.length == 0){
            curNum = "0";
        }
        if(alreadyHasOp(stack)){
            curNum = "0";
            stack.unshift("0");
        }
        if(curNum == "0"){
            screen.textContent = "2";
            stack[0] = "2";
        }
        else{
            screen.textContent += "2";
            stack[0] += "2";
        }
    });

    three.addEventListener('click', function threeFunc(e){
        curNum = screen.textContent;
        if(stack.length == 0){
            curNum = "0";
        }
        if(alreadyHasOp(stack)){
            curNum = "0";
            stack.unshift("0");
        }
        if(curNum == "0"){
            screen.textContent = "3";
            stack[0] = "3";
        }
        else{
            screen.textContent += "3";
            stack[0] += "3";
        }
    });

    four.addEventListener('click', function fourFunc(e){
        curNum = screen.textContent;
        if(stack.length == 0){
            curNum = "0";
        }
        if(alreadyHasOp(stack)){
            curNum = "0";
            stack.unshift("0");
        }
        if(curNum == "0"){
            screen.textContent = "4";
            stack[0] = "4";
        }
        else{
            screen.textContent += "4";
            stack[0] += "4";
        }
    });

    five.addEventListener('click', function fiveFunc(e){
        curNum = screen.textContent;
        if(stack.length == 0){
            curNum = "0";
        }
        if(alreadyHasOp(stack)){
            curNum = "0";
            stack.unshift("0");
        }
        if(curNum == "0"){
            screen.textContent = "5";
            stack[0] = "5";
        }
        else{
            screen.textContent += "5";
            stack[0] += "5";
        }
    });

    six.addEventListener('click', function sixFunc(e){
        curNum = screen.textContent;
        if(stack.length == 0){
            curNum = "0";
        }
        if(alreadyHasOp(stack)){
            curNum = "0";
            stack.unshift("0");
        }
        if(curNum == "0"){
            screen.textContent = "6";
            stack[0] = "6";
        }
        else{
            screen.textContent += "6";
            stack[0] += "6";
        }
    });

    seven.addEventListener('click', function sevenFunc(e){
        curNum = screen.textContent;
        if(stack.length == 0){
            curNum = "0";
        }
        if(alreadyHasOp(stack)){
            curNum = "0";
            stack.unshift("0");
        }
        if(curNum == "0"){
            screen.textContent = "7";
            stack[0] = "7";
        }
        else{
            screen.textContent += "7";
            stack[0] += "7";
        }
    });

    eight.addEventListener('click', function eightFunc(e){
        curNum = screen.textContent;
        if(stack.length == 0){
            curNum = "0";
        }
        if(alreadyHasOp(stack)){
            curNum = "0";
            stack.unshift("0");
        }
        if(curNum == "0"){
            screen.textContent = "8";
            stack[0] = "8";
        }
        else{
            screen.textContent += "8";
            stack[0] += "8";
        }
    });

    nine.addEventListener('click', function nineFunc(e){
        curNum = screen.textContent;
        if(stack.length == 0){
            curNum = "0";
        }
        if(alreadyHasOp(stack)){
            curNum = "0";
            stack.unshift("0");
        }
        if(curNum == "0"){
            screen.textContent = "9";
            stack[0] = "9";
        }
        else{
            screen.textContent += "9";
            stack[0] += "9";
        }
    });

    zero.addEventListener('click', function zeroFunc(e){
        curNum = screen.textContent;
        if(stack.length == 0){
            curNum = "0";
        }
        if(alreadyHasOp(stack)){
            curNum = "0";
            stack.unshift("0");
        }
        if(curNum == "0"){
            screen.textContent = "0";
            stack[0] = "0";
        }
        else{
            screen.textContent += "0";
            stack[0] += "0";
        }
    });

    dec.addEventListener('click', function decFunc(e){
        curNum = screen.textContent;
        if(stack.length == 0){
            curNum = "0";
        }
        if(alreadyHasOp(stack)){
            curNum = "0";
            stack.unshift("0");
        }
        if(curNum == "0"){
            screen.textContent = "0.";
            stack[0] = "0.";
        }
        else{
            if(!AlrHasDec(screen)){
                screen.textContent += ".";
                stack[0] += ".";
            }
        }
    });    
}

main();
