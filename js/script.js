let ans1 = 'what is a hamburger?';
let ans2 = '';
let ans3 = '';
let ans4 = '';
let ans5 = '';
let ans6 = '';
let ans7 = '';
let ans8 = '';
let ans9 = '';
let ans10 = '';
let ans11 = '';
let ans12 = '';
let ans13 = '';
let ans14 = '';
let ans15 = '';
let ans16 = '';
let ans17 = '';
let ans18 = '';
let ans19 = '';
let ans20 = '';
let ans21 = '';
let ans22 = '';
let ans23 = '';
let ans24 = '';
let ans25 = '';
let ans26 = '';
let ans27 = '';
let ans28 = '';
let ans29 = '';
let ans30 = '';
const listOfAnswers=[ans1,ans2,ans3,ans4,ans5,ans6,ans7,ans8,ans9,ans10,ans11,ans12,ans13,ans14,ans15];
let score = 0;
let scoreTally = 0;

function active(id, divId) {
    document.getElementById(id).style = 'background-color:yellow; border-color:#0000cc; box-shadow: 5px 5px 10px #0000cc;';
    let c = document.getElementById(divId).children;

    for (let i = 0; i < c.length; i++) {
        c[i].style.color = "#0000cc";
        c[i].style.fontWeight = "bold";
        c[i].style.borderColor = "#0000cc";
        c[i].style.boxShadow = "5px 5px 10px #0000cc";
    }
}

function display(id, hideThis, showThis) {
    document.getElementById(id).style = 'display:block';
    document.getElementById(hideThis).style = 'display:none';
    document.getElementById(showThis).style = 'display:block';

}

function displayOne(id) {
    document.getElementById(id).style = 'display:block';
}


function hide(id, hideThis, showThis) {
    document.getElementById(id).style = 'display:none';
    document.getElementById(hideThis).style = 'display:none';
    document.getElementById(showThis).style = 'display:block';

}

function hideOne(id) {
    document.getElementById(id).style = 'display:none';
}

function hideAns(id) {
    document.getElementById(id).style = 'display:none';
}

function answered(theDiv, input, theScore) {
    let answer = document.getElementById(input).value;
    answer = answer.toLowerCase();
    console.log(answer);
    let points = document.getElementById(theScore).innerHTML;
    points = Number(points);
    console.log(points);
    let isCorrect;
    for (let i = 0; i < listOfAnswers.length; i++) {
        if (answer == listOfAnswers[i]) {
           isCorrect=true;
        }
        else {
            isCorrect=false;
        }
    }

    if (isCorrect == true){
        document.getElementById(theDiv).innerHTML = '<h2>CORRECT!</h2>';
        scoreTally += points;
        document.getElementById('score').innerHTML = 'Winnings: $' + scoreTally;
    }

    else {
        document.getElementById(theDiv).innerHTML = '<h2>WRONG!</h2>';
        scoreTally -= points;
        document.getElementById('score').innerHTML = 'Winnings: $' + scoreTally;
    }

    setTimeout(function () {
        hideAns(theDiv);
    }, 1000)
}

function makeBlue(id) {
    document.getElementById(id).style.backgroundColor = '#0000cc';
}