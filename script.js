//Cash of the script
const display_div = document.querySelector('#display-currentNum');
const topDisplay_div = document.querySelector('#display-operation');
const numbers_button = document.querySelectorAll('.num-btn');
const operators_button = document.querySelectorAll('.op-btn');
const equalTo_button = document.querySelector('#eq-btn');
const clearAll_button = document.querySelector('#btn-clear');
const changeSignal_button = document.querySelector('#btn-signal');

let firstNum ='';
let secondNum ='';
let operator = '';
let total = '';

//Add a event listener to get the value of all number buttons
numbers_button.forEach(function(item){
    item.addEventListener('click',(e)=>{
        if(operator === ''){
            firstNum += e.target.textContent;
            display_div.textContent = firstNum;
            topDisplay_div.textContent = firstNum;
        }else{
            secondNum += e.target.textContent;
            display_div.textContent = `${firstNum} ${operator} ${secondNum}`;
            topDisplay_div.textContent = `${firstNum} ${operator} ${secondNum}`;
        }
    });
});
//Add a event listener to get the value of all operators buttons
operators_button.forEach((item)=>{
    item.addEventListener('click',(e)=>{
        if(firstNum === '' ){

        }
        else{
            operator = e.target.textContent;
            display_div.textContent = `${firstNum} ${operator}`;
            topDisplay_div.textContent = `${firstNum} ${operator}`;
        }
    });
});

//Operation functions. The operation function calls just one this function depending on the operator value.
//This function solves the account and calls the function prepNewOp() when it's done with the result
// of the account as a parameter.
function calcAdd(a,b){
    total = Number(a)+Number(b);
    display_div.textContent = total;
    return prepNewOp(total);
};
function calcSub(a,b){
    total = a-b;
    display_div.textContent = total;
    return prepNewOp(total);
};
function calcMult(a,b){
    total = a*b;
    display_div.textContent = total;
    return prepNewOp(total);
};
function calcPerCent(a,b){
    total = (a/100)*b;
    display_div.textContent = total;
    return prepNewOp(total);
};
function calcDiv(a,b){    
    total = a/b;
    display_div.textContent = total;
    if(b == 0){               //This serves when the result of the account is equals to 'infinity'.
        return prepNewOp('')
    }
    return prepNewOp(total);
};

//This function decides witch operation should happens based in operator variable value.
//I think that use switch condicional would be better in this case.
function operation(num1, num2, op){
    if(op == '+'){
        return calcAdd(num1,num2);
    };
    if(op == '-'){
        return calcSub(num1,num2);
    };
    if(op == 'x'){
        return calcMult(num1,num2);
    };
    if(op == '/'){
        return calcDiv(num1,num2);
    };
};

function execOperation(){
    equalTo_button.addEventListener('click',()=>{
        if(firstNum != ''&& secondNum !=''&& operator!=''){
            topDisplay_div.textContent = `${firstNum} ${operator} ${secondNum} =`;
            return operation(firstNum,secondNum, operator);
        }else{
            return console.log('add um valor');
        };
    });
};

execOperation()


function prepNewOp(lastOpValue){
    firstNum = lastOpValue;
    operator = '';
    secondNum = '';
}

function clear(){
    clearAll_button.addEventListener('click',()=>{
        firstNum ='';
        secondNum ='';
        operator = '';
        display_div.textContent = firstNum
        topDisplay_div.textContent = ''
    });
};

clear()

function changeSignal(){
    changeSignal_button.addEventListener('click', ()=>{

        if(operator === ''){
            if(firstNum == 0|| firstNum == ''){
                alert('you can\'t change the sign of zero or of an nonexistent number.')
            }
            else{
            firstNum *=-1;
            display_div.textContent = firstNum;
            }
        }
        else{
            if(secondNum == 0|| secondNum == ''){
                alert('you can\'t change the sign of zero or of an nonexistent number.')
            }
            else{
            secondNum *=-1;
            display_div.textContent = `${firstNum} ${operator} ${secondNum}`;
            };
        };
    });
};

changeSignal();

function changeMode(event) {
    const body = document.querySelector('body');

    function changeClass(chosenClass) {
        body.classList = chosenClass;
    }

    switch(event) {
        case '1':
            changeClass('')
            break;
        case '2':
            changeClass('light-mode')
            break;
        case '3':
            changeClass('spooky-mode')
            break;
    }
}