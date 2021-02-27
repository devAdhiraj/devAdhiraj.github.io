document.getElementById("myButtonOption1").addEventListener("click", buttonClick);

function buttonClick(){
    s = 1;
    document.getElementById('myButtonOption1').style.color = 'red';
    document.getElementById('myButtonOption1').style.borderColor = 'red';
    document.getElementById('myButtonOption2').style.color = 'blue';
    document.getElementById('myButtonOption2').style.borderColor = 'blue';
    document.getElementById('myButtonOption3').style.color = 'blue';
    document.getElementById('myButtonOption3').style.borderColor = 'blue';
    document.getElementById('myButtonOption4').style.color = 'blue';
    document.getElementById('myButtonOption4').style.borderColor = 'blue';
}

document.getElementById("myButtonOption2").addEventListener("click", buttonClick2);

function buttonClick2(){
    document.getElementById('myButtonOption2').style.color = 'red';
    document.getElementById('myButtonOption2').style.borderColor = 'red';
    document.getElementById('myButtonOption1').style.color = 'blue';
    document.getElementById('myButtonOption1').style.borderColor = 'blue';
    document.getElementById('myButtonOption3').style.color = 'blue';
    document.getElementById('myButtonOption3').style.borderColor = 'blue';
    document.getElementById('myButtonOption4').style.color = 'blue';
    document.getElementById('myButtonOption4').style.borderColor = 'blue';
}

document.getElementById("myButtonOption3").addEventListener("click", buttonClick3);

function buttonClick3(){
    document.getElementById('myButtonOption3').style.color = 'red';
    document.getElementById('myButtonOption3').style.borderColor = 'red';
    document.getElementById('myButtonOption2').style.color = 'blue';
    document.getElementById('myButtonOption2').style.borderColor = 'blue';
    document.getElementById('myButtonOption1').style.color = 'blue';
    document.getElementById('myButtonOption1').style.borderColor = 'blue';
    document.getElementById('myButtonOption4').style.color = 'blue';
    document.getElementById('myButtonOption4').style.borderColor = 'blue';
}

document.getElementById("myButtonOption4").addEventListener("click", buttonClick4);

function buttonClick4(){
    document.getElementById('myButtonOption4').style.color = 'green';
    document.getElementById('myButtonOption4').style.borderColor = 'green';
    document.getElementById('myButtonOption2').style.color = 'blue';
    document.getElementById('myButtonOption2').style.borderColor = 'blue';
    document.getElementById('myButtonOption3').style.color = 'blue';
    document.getElementById('myButtonOption3').style.borderColor = 'blue';
    document.getElementById('myButtonOption1').style.color = 'blue';
    document.getElementById('myButtonOption1').style.borderColor = 'blue';
}
