let ans1='what is a hamburger?';
let score=0;
let scoreTally=0;

function active(id,divId){
    document.getElementById(id).style='background-color:yellow; border-color:#0000cc; box-shadow: 5px 5px 10px #0000cc;';
    let c = document.getElementById(divId).children;

    for(let i=0; i<c.length; i++){
        c[i].style.color= "#0000cc";
        c[i].style.fontWeight="bold";
        c[i].style.borderColor="#0000cc";
        c[i].style.boxShadow="5px 5px 10px #0000cc";
    }
}

function display(id,hideThis,showThis){
    document.getElementById(id).style='display:block';
    document.getElementById(hideThis).style='display:none';
    document.getElementById(showThis).style='display:block';

}

function displayOne(id){
    document.getElementById(id).style='display:block';
}


function hide(id,hideThis,showThis){
    document.getElementById(id).style='display:none';
    document.getElementById(hideThis).style='display:none';
    document.getElementById(showThis).style='display:block';

}

function hideOne(id){
    document.getElementById(id).style='display:none';
}

function hideAns(id){
    document.getElementById(id).style='display:none';
}

function answered(theDiv,input,theScore){
    let answer=document.getElementById(input).value;
    answer=answer.toLowerCase();
    console.log(answer);
    let points = document.getElementById(theScore).innerHTML;
    points=Number(points);
    console.log(points);
    if(answer == ans1){
        let correct='<h2>CORRECT!</h2>';
        document.getElementById(theDiv).innerHTML=correct;
        scoreTally+=points;
        document.getElementById('score').innerHTML='Winnings: $' + scoreTally;
    }
    else{
        document.getElementById(theDiv).innerHTML='<h2>WRONG!</h2>';
        scoreTally-=points;
        document.getElementById('score').innerHTML='Winnings: $' + scoreTally;
    }

    setTimeout(function() {
        hideAns(theDiv);
    }, 1000)
}

function makeBlue(id){
    document.getElementById(id).style.backgroundColor='#0000cc';
}