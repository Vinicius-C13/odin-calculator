//Cash of the script
const display_div = document.querySelector('#display-currentNum');
const topDisplay_div = document.querySelector('#display-operation');
const numbers_button = document.querySelectorAll('.num-button');
const operators_button = document.querySelectorAll('.op-button');
const equalTo_button = document.querySelector('#vequ');
const clearAll_button = document.querySelector('#button-clear')

let firstNum ='';
let secondNum ='';
let operator = '';
let total = ''


//Add a event listener to get the value of all number buttons
numbers_button.forEach(function(item){
    item.addEventListener('click',(e)=>{
        if(operator === ''){
            firstNum += e.target.textContent;
            display_div.textContent = firstNum;
        }else{
            secondNum += e.target.textContent;
            display_div.textContent = `${firstNum} ${operator} ${secondNum}`;
        }
    });
});
//Add a event listener to get the value of all operators buttons
operators_button.forEach((item)=>{
    item.addEventListener('click',(e)=>{
        if(firstNum === ''){

        }
        else{
            operator = e.target.textContent;
            display_div.textContent = `${firstNum} ${operator}`;
        }
    });
});

//Operation functions. The operation function calls just one one this function depending on the operator value.
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
    if(op == ':'){
        return calcDiv(num1,num2);
    };
};

//When the equal button is pressed this function runs and the operation function is called with
//all necessary parameters. The account appears on the top of the final result too.
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
//This is necessary to the function runs. Without a a call any function works. 
//But function are called as a consequence to other function call. 
//This create a chain reaction that active of functions in sequence.
execOperation()


//This function prepare the calculator to the next account without the user do nothing.
//It's add the last account value to the firstNum and erase the operation and second num values.
//This is important to let the user make more than one account in series.
function prepNewOp(lastOpValue){
    firstNum = lastOpValue;
    operator = '';
    secondNum = '';
}

//This function is conected with the clear button. It's turn all values of the account to undefined.
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