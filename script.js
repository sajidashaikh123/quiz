const questions=[{
    question:"HTML stands for-",
    answers:[
        {text:"HyperText Machine language",correct:false},
        {text:"HyperText and links markup Language", correct:false},
        {text:"HyperText Markup language",correct:true},
        {text:"None of these",correct:false}
    ]
},
{
    question:"Which character is used to indicate an end tag",
    answers:[
        {text:"<",correct:false},
        {text:"*", correct:false},
        {text:"^",correct:false},
        {text:"/",correct:true}
    ]  
},
{
    question:"Common gateway interface is used to?",
    answers:[
        {text:"Generate web pages",correct:false},
        {text:"Generate executable files from web content by web server", correct:true},
        {text:"Stream videos",correct:false},
        {text:"None",correct:false}
    ]  
},
{
question:"Dynamic web page:",
answers:[
    {text:"Is same every time whenever it displays",correct:false},
    {text:"Generates on demand by a program or a request from browser", correct:true},
    {text:"Both",correct:false},
    {text:"None",correct:false}
]  
},
{
    question:"The property in CSS used to change the text color of an element is -",
    answers:[
        {text:"bgcolor",correct:false},
        {text:"color", correct:true},
        {text:"background-color",correct:false},
        {text:"All of the above",correct:false}
    ]  
    },
    {
        question:"The CSS property used to control the element's font-size is -",
        answers:[
            {text:"text-style",correct:false},
            {text:"text-size", correct:false},
            {text:"font-size",correct:true},
            {text:"All of the above",correct:false}
        ]  
        },
        {
            question:"Which one of the following also known as Conditional Expression:",
            answers:[
                {text:"Alternative to if-else",correct:false},
                {text:"Switch statement", correct:false},
                {text:"If-then-else statement",correct:true},
                {text:"immediate if",correct:false}
            ]  
            },
            {
                question:"The 'function' and 'var' are known as:",
                answers:[
                    {text:"Keywords",correct:false},
                    {text:"Data types", correct:false},
                    {text:"Declaration statements",correct:true},
                    {text:"Prototypes ",correct:false}
                ]  
                },
                {
                    question:"Which one of the following is the correct way for calling the JavaScript code?",
                    answers:[
                        {text:"Preprocessor",correct:false},
                        {text:"Triggering Event", correct:false},
                        {text:"RMI",correct:false},
                        {text:"Function/Method",correct:true}
                    ]  
                    },
                    {
                        question:"Computer which stores the different web pages is called as:",
                        answers:[
                            {text:"Service Provider",correct:false},
                            {text:"Web Browser", correct:false},
                            {text:"Web Crawler",correct:false},
                            {text:"Web Server",correct:true}
                        ]  
                        }
    
];
const questionElement=document.getElementById("question");
const answerButton=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1;
    questionElement.innerHTML=questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer=>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",SelectAnswer);
    });
}
function resetState(){
    nextButton.style.display="none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}
function SelectAnswer(e){
    const selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextButton.style.display="block";
}
function showScore(){
    resetState();
    questionElement.innerHTML=`You have Scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML="Play Again";
    nextButton.style.display="block";
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }else{
        showScore();
    }
}
nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})
startQuiz();
