const calc = {
    displayNum : '0',
    operator : null,
    firstNum : null,
    waitingSecNum : false
}

function updateDisplay() {
    document.querySelector('#display-number').innerText = calc.displayNum;
}

function clearCal() {
    calc.displayNum = '0';
    calc.operator = null;
    calc.firstNum = null;
    calc.waitingSecNum = false;
}

function inputDigit(inp) {
    if(calc.displayNum == '0') {
        calc.displayNum = inp
    } else {
        calc.displayNum += inp;
    }
}

function inverseNum(){
    if(calc.displayNum === '0'){
        return;
    }

    calc.displayNum = calc.displayNum * -1;
}

function handleOp(op){
    if(!calc.waitingSecNum) {
        calc.operator = op;
        calc.waitingSecNum = true;
        calc.firstNum = calc.displayNum;

        calc.displayNum = "0";
    } else {
        alert('operator sudah ditetapkan');
    }
}

function performCalc(){
    if(calc.firstNum == null || calc.operator == null){
        alert("anda belum menetapkan operator");
        return;
    } 

    let result = 0;
    if(calc.operator === "+"){
        result = parseInt(calc.firstNum) + parseInt(calc.displayNum);
    } else {
        result = parseInt(calc.firstNum) - parseInt(calc.displayNum);
    }

    const history = {
        firstNum: calc.firstNum,
        waitingSecNum: calc.displayNum,
        operator: calc.operator,
        result: result
    }
    putHistory(history);
    calc.displayNum = result;
    render();
}

const btn = document.querySelectorAll('.button');
for(let btns of btn) {
    btns.addEventListener('click', (e) => {
        const targ = e.target;

        if(targ.classList.contains('clear')) {
            clearCal();
            updateDisplay();
            return;
        }

        if(targ.classList.contains('equal')) {
            performCalc();
            updateDisplay();
            return;
        }

        if(targ.classList.contains('negative')) {
            inverseNum();
            updateDisplay();
            return;
        }

        if(targ.classList.contains('operator')) {
            handleOp(targ.innerText);
            return;
        }

        inputDigit(targ.innerText);
        updateDisplay();
    })
}