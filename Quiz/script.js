const questions=[
    {
        questions:" which is the largest animal in the word",
        answers:[
            {
               text:"shark",correct:false
            },
            {
                text:"Blue whale",correct:true
             },
             {
                text:"Elephant",correct:false
             },
             {
                text:"Giraffe",correct:false
             },
        ]
    },
    {
        questions:" which is the largest animal in the word",
        answers:[
            {
               text:"shark",correct:false
            },
            {
                text:"Blue whale",correct:true
             },
             {
                text:"Elephant",correct:false
             },
             {
                text:"Giraffe",correct:false
             },
        ]
    },
    {
        questions:" which is the largest animal in the word",
        answers:[
            {
               text:"shark",correct:false
            },
            {
                text:"Blue whale",correct:true
             },
             {
                text:"Elephant",correct:false
             },
             {
                text:"Giraffe",correct:false
             },
        ]
    },
    {
        questions:" which is the largest animal in the word",
        answers:[
            {
               text:"shark",correct:false
            },
            {
                text:"Blue whale",correct:true
             },
             {
                text:"Elephant",correct:false
             },
             {
                text:"Giraffe",correct:false
             }, 
        ]
    },
]



const questionElement=document.getElementById("question")
const answerButton=document.getElementById("answer-button")
const nextButton=document.getElementById("nxt-btn")


let currenQuesIndex=0;
let score=0;

function startQuiz(){
    currenQuesIndex=0
    score=0;
    nextButton.innerHTML="Next"
    showQuiz();
}
function showQuiz(){
    resetState();
    let currentQues=questions[currenQuesIndex]
    let questionNo=currenQuesIndex+1;
    questionElement.innerHTML=questionNo +"."+currentQues.questions

    currentQues.answers.forEach(answer=>{
        const button=document.createElement("button")
        button.innerHTML=answer.text;
        button.classList.add("btn")
        answerButton.appendChild(button)
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer)
    })
}
function resetState(){
    nextButton.style.display="none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild)
    }
}

function selectAnswer(e){
    const selectbtn=e.target;
    const isCorrect=selectbtn.dataset.correct==="true";
    if(isCorrect){
        selectbtn.classList.add("correct")
        score++;
    }
    else {
        selectbtn.classList.add("incorrect")
    }
    Array.from(answerButton.children).forEach(button=>{
        if(button.dataset.correct==="true")
        {
            button.classList.add("correct")
        }
        button.disabled= true;
        
    })
    nextButton.style.display="block"
}

function showScore(){
    resetState();
    questionElement.innerHTML=`You score ${score} out of ${questions.length}!`
    nextButton.innerHTML="Play Again"
    nextButton.style.display="block"
}


function handleNextButton(){
    currenQuesIndex++;
    if(currenQuesIndex<questions.length)
    {
        showQuiz();
    }
    else{
        showScore();
    }
}



nextButton.addEventListener("click",()=>{
    if(currenQuesIndex<questions.length){
      handleNextButton();
    }
    else{
        startQuiz();
    }
})
showQuiz();
