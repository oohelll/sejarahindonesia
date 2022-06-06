const key = "HISTORY";

function checkStorage(){
    return typeof(Storage) !== "undefined";
}

function putHistory(data) {
    if(checkStorage()) {
        let historyData = null;
        if(localStorage.getItem(key) === null){
            historyData = [];
        } else {
            historyData = JSON.parse(localStorage.getItem(key));
        }

        historyData.unshift(data);

        if(historyData > 5){
            historyData.pop();
        }

        localStorage.setItem(key, JSON.stringify(historyData))
    }
}

function showHistory(){
    if(checkStorage()){
        return JSON.parse(localStorage.getItem(key)) || [];
    } else {
        return [];
    }
}

function render() {
    const historyData = showHistory();

    let historyList = document.querySelector('#list');

    historyList.innerHTML = "";

    for(let data of historyData) {
        let row = document.createElement('tr');
        row.innerHTML = `
            <td>${data.firstNum}</td>
            <td>${data.operator}</td>
            <td>${data.waitingSecNum}</td>
            <td>${data.result}</td>
        `

        historyList.append(row);
    }
}

function clear() {
    const clearBtn = document.querySelector('#delete');

    clearBtn.addEventListener('click', () => {
        let list = document.querySelector('#list')
        let row = document.querySelector('#list tr')

        if(row <= 0) {
            alert('riwayat bersih');
        } else {
            list.removeChild(row);
    
            localStorage.removeItem(key);
        }
    })
}

render();
clear();