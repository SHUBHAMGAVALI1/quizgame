let QandA=[
    {
        question:` Q1 : HTML stands for -`,
        a:'HighText Machine Language',
        b:'HyperText and links Markup Language',
        c:'HyperText Markup Language',
        d:'None of these',
        ans:'c'
    },
    {
        question:`Q2 : The correct sequence of HTML tags for starting a webpage is -`,
        a:'Head, Title, HTML, body',
        b:'HyperText and links Markup Language',
        c:'HyperText Markup Language',
        d:'None of these',
        ans:'d'
    },
    {
        question:`Q3 : Which of the following element is responsible for making the text bold in HTML?`,
        a:'<pre>',
        b:'<a>',
        c:'<b>',
        d:'<br>',
        ans:'c'
    },
    {
        question:` Q4 :Which of the following tag is used to insert a line-break in HTML?`,
        a:'<pre>',
        b:'<a>',
        c:'<b>',
        d:'<br>',
        ans:'d'
    }

];

let question=document.getElementById('question');
let option1=document.getElementById('option1');
let option2=document.getElementById('option2');
let option3=document.getElementById('option3');
let option4=document.getElementById('option4');
let button=document.getElementById('submit');// submit button 
let secondbox=document.getElementById('secondbox');//secondbox id to display
let h1=document.getElementById('scoremsg');
let optionlist=document.querySelectorAll('.list')
// question.innerText=QandA[4].question;
// console.log(QandA[0].question,QandA[0].a)
let questioncount=0;
let score=0;
// let questionshow=QandA[questioncount];//to show question in h2 tag

const loadquestion=()=>{
    question.innerText=  QandA[questioncount].question;//to show question in h2 tag
    option1.innerText=  QandA[questioncount].a;
    option2.innerText=  QandA[questioncount].b;
    option3.innerText=  QandA[questioncount].c;
    option4.innerText=  QandA[questioncount].d;
}


loadquestion();

const getanswer=()=>{
    let answer;
    optionlist.forEach((element) => {
        if(element.checked){answer=element.id}
    });
    return answer;
}

const deselectAll=()=>{
    optionlist.forEach((element) => {
        element.checked=false;
    });

}



button.addEventListener('click', ()=>{
let finaloption=getanswer();
// console.log(finaloption);
// console.log(questionshow.ans);
// console.log(questionshow.ans===finaloption);

if(QandA[questioncount].ans===finaloption)
{
    // console.log(questionshow.ans);
    score++;
    // questioncount++;
    // console.log(score);
    // console.log(questioncount);

}

    questioncount++;
    // console.log(QandA.length);
    // console.log(score);
    // console.log(questioncount);


    
deselectAll();
    // console.log(QandA.length>questioncount);
   if(QandA.length>questioncount)
   {
    // console.log('i am in if block');

    loadquestion();

   }
   else{
    // console.log('i am in else block');
    secondbox.style.display='block';

    // secondbox.innerHTML= <h1>`You Score ${score}/${QandA.length}`</h1>;
    // <button id="playagain" onclick="location.reload()" >Play Again</button>
    h1.innerText=`You Score ${score}/${QandA.length}`;
   }

});



