let inputElement = document.querySelector('input');
let countElement = document.querySelector('#user-input p');
let j = inputElement.maxLength;
countElement.innerHTML = j + '/60';

function inputLengthCount() {
    let a= j - inputElement.value.length;
    countElement.innerHTML = a + '/60';
    if (a<10) {
        countElement.innerHTML = '<span id = "count">'+ a +'</span>' + '/60';
        inputElement.style.backgroundColor = 'rgb(202, 106, 106)';
        inputElement.style.border = "1px solid rgb(202 , 106 , 106)";
    }

    else  {
        inputElement.style.backgroundColor = 'white';
    }
}

inputElement.addEventListener("input" , inputLengthCount);
