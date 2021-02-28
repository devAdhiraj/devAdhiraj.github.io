document.getElementById("myButtonOption1").addEventListener("click", function(){option(1, false)});
document.getElementById("myButtonOption2").addEventListener("click", function(){option(2, false)});
document.getElementById("myButtonOption3").addEventListener("click", function(){option(3, true)});
document.getElementById("myButtonOption4").addEventListener("click", function(){option(4, false)});

document.getElementById("myButtonOption5").addEventListener("click", function(){option(5, false)});
document.getElementById("myButtonOption6").addEventListener("click", function(){option(6, false)});
document.getElementById("myButtonOption7").addEventListener("click", function(){option(7, false)});
document.getElementById("myButtonOption8").addEventListener("click", function(){option(8, true)});

document.getElementById("myButtonOption9").addEventListener("click", function(){option(9, false)});
document.getElementById("myButtonOption10").addEventListener("click", function(){option(10, true)});
document.getElementById("myButtonOption11").addEventListener("click", function(){option(11, false)});
document.getElementById("myButtonOption12").addEventListener("click", function(){option(12, false)});


document.getElementById("myButtonOption13").addEventListener("click", function(){option(13, false)});
document.getElementById("myButtonOption14").addEventListener("click", function(){option(14, false)});
document.getElementById("myButtonOption15").addEventListener("click", function(){option(15, false)});
document.getElementById("myButtonOption16").addEventListener("click", function(){option(16, true)});


document.getElementById("myButtonOption17").addEventListener("click", function(){option(17, false)});
document.getElementById("myButtonOption18").addEventListener("click", function(){option(18, false)});
document.getElementById("myButtonOption19").addEventListener("click", function(){option(19, true)});
document.getElementById("myButtonOption20").addEventListener("click", function(){option(20, false)});



document.getElementById("myButtonOption21").addEventListener("click", function(){option(21, false)});
document.getElementById("myButtonOption22").addEventListener("click", function(){option(22, false)});
document.getElementById("myButtonOption23").addEventListener("click", function(){option(23, false)});
document.getElementById("myButtonOption24").addEventListener("click", function(){option(24, true)});


document.getElementById("myButtonOption25").addEventListener("click", function(){option(25, false)});
document.getElementById("myButtonOption26").addEventListener("click", function(){option(26, false)});
document.getElementById("myButtonOption27").addEventListener("click", function(){option(27, true)});
document.getElementById("myButtonOption28").addEventListener("click", function(){option(28, false)});


document.getElementById("myButtonOption29").addEventListener("click", function(){option(29, true)});
document.getElementById("myButtonOption30").addEventListener("click", function(){option(30, false)});
document.getElementById("myButtonOption31").addEventListener("click", function(){option(31, true)});
document.getElementById("myButtonOption32").addEventListener("click", function(){option(32, false)});


document.getElementById("myButtonOption33").addEventListener("click", function(){option(33, false)});
document.getElementById("myButtonOption34").addEventListener("click", function(){option(34, false)});
document.getElementById("myButtonOption35").addEventListener("click", function(){option(35, false)});
document.getElementById("myButtonOption36").addEventListener("click", function(){option(36, true)});

function option(num, result){
    optMain = num;
    if(num % 4 == 0){
        optOther1 = num - 3;
        optOther2 = num - 2;
        optOther3 = num - 1;
    }
    else if(num % 4 == 1){
        optOther1 = num + 3;
        optOther2 = num + 2;
        optOther3 = num + 1;
    }
    else if(num % 4 == 2){
        optOther1 = num + 1;
        optOther2 = num + 2;
        optOther3 = num - 1;
    }
    else if(num % 4 == 3){
        optOther1 = num + 1;
        optOther2 = num - 2;
        optOther3 = num - 1;
    }
    buttonMain = "myButtonOption" + num;
    buttonOpt1 = "myButtonOption" + optOther1;
    buttonOpt2 = "myButtonOption" + optOther2;
    buttonOpt3 = "myButtonOption" + optOther3;
    optOther1 = "opt" + optOther1;
    optOther2 = "opt" + optOther2;
    optOther3 = "opt" + optOther3;
    optMain = "opt" + num;
    
    var element = document.getElementById(optMain),
    style = window.getComputedStyle(element),
    top = style.getPropertyValue('display');
    if(top == "block"){
        document.getElementById(optMain).style.display = "none";
        document.getElementById(buttonMain).style.color = 'blue';
        document.getElementById(buttonMain).style.borderColor = 'blue';
    }
    else{
        if(result){
            document.getElementById(buttonMain).style.color = 'green';
            document.getElementById(buttonMain).style.borderColor = 'green';
        }
        else{
            document.getElementById(buttonMain).style.color = 'red';
            document.getElementById(buttonMain).style.borderColor = 'red';
        }
        document.getElementById(buttonOpt1).style.color = 'blue';
        document.getElementById(buttonOpt1).style.borderColor = 'blue';
        document.getElementById(buttonOpt2).style.color = 'blue';
        document.getElementById(buttonOpt2).style.borderColor = 'blue';
        document.getElementById(buttonOpt3).style.color = 'blue';
        document.getElementById(buttonOpt3).style.borderColor = 'blue';

        document.getElementById(optOther1).style.display = "none";
        document.getElementById(optOther2).style.display = "none";
        document.getElementById(optOther3).style.display = "none";
        document.getElementById(optMain).style.display = "block";
        
    }
    
}

// document.getElementById("myButtonOption2").addEventListener("click", buttonClick2);

// function buttonClick2(){
//     var element = document.getElementById('opt2'),
//     style = window.getComputedStyle(element),
//     top = style.getPropertyValue('display');
//     if(top == "block"){
//         document.getElementById('opt2').style.display = "none";
//         document.getElementById('myButtonOption2').style.color = 'blue';
//         document.getElementById('myButtonOption2').style.borderColor = 'blue';
//     }
//     else{
//     document.getElementById('myButtonOption2').style.color = 'red';
//     document.getElementById('myButtonOption2').style.borderColor = 'red';
//     document.getElementById('myButtonOption1').style.color = 'blue';
//     document.getElementById('myButtonOption1').style.borderColor = 'blue';
//     document.getElementById('myButtonOption3').style.color = 'blue';
//     document.getElementById('myButtonOption3').style.borderColor = 'blue';
//     document.getElementById('myButtonOption4').style.color = 'blue';
//     document.getElementById('myButtonOption4').style.borderColor = 'blue';
//     document.getElementById('opt3').style.display = "none";
//     document.getElementById('opt4').style.display = "none";
//     document.getElementById('opt1').style.display = "none";
//     document.getElementById('opt2').style.display = "block";
//     }
// }

// document.getElementById("myButtonOption3").addEventListener("click", buttonClick3);

// function buttonClick3(){
//     var element = document.getElementById('opt3'),
//     style = window.getComputedStyle(element),
//     top = style.getPropertyValue('display');
//     if(top == "block"){
//         document.getElementById('opt3').style.display = "none";
//         document.getElementById('myButtonOption3').style.color = 'blue';
//         document.getElementById('myButtonOption3').style.borderColor = 'blue';
//     }
//     else{

//         document.getElementById('myButtonOption3').style.color = 'green';
//         document.getElementById('myButtonOption3').style.borderColor = 'green';
//         document.getElementById('myButtonOption2').style.color = 'blue';
//         document.getElementById('myButtonOption2').style.borderColor = 'blue';
//         document.getElementById('myButtonOption1').style.color = 'blue';
//         document.getElementById('myButtonOption1').style.borderColor = 'blue';
//         document.getElementById('myButtonOption4').style.color = 'blue';
//         document.getElementById('myButtonOption4').style.borderColor = 'blue';
//         document.getElementById('opt2').style.display = "none";
//         document.getElementById('opt4').style.display = "none";
//         document.getElementById('opt1').style.display = "none";
//         document.getElementById('opt3').style.display = "block";
        
//     }
// }

// document.getElementById("myButtonOption4").addEventListener("click", buttonClick4);

// function buttonClick4(){
//     var element = document.getElementById('opt4'),
//     style = window.getComputedStyle(element),
//     top = style.getPropertyValue('display');
//     if(top == "block"){
//         document.getElementById('opt4').style.display = "none";
//         document.getElementById('myButtonOption4').style.color = 'blue';
//         document.getElementById('myButtonOption4').style.borderColor = 'blue';
//     }
//     else {

//         document.getElementById('myButtonOption4').style.color = 'red';
//         document.getElementById('myButtonOption4').style.borderColor = 'red';
//         document.getElementById('myButtonOption2').style.color = 'blue';
//         document.getElementById('myButtonOption2').style.borderColor = 'blue';
//         document.getElementById('myButtonOption3').style.color = 'blue';
//         document.getElementById('myButtonOption3').style.borderColor = 'blue';
//         document.getElementById('myButtonOption1').style.color = 'blue';
//         document.getElementById('myButtonOption1').style.borderColor = 'blue';
//         document.getElementById('opt3').style.display = "none";
//         document.getElementById('opt2').style.display = "none";
//         document.getElementById('opt1').style.display = "none";
//         document.getElementById('opt4').style.display = "block";
//     }

// }

