const questions=[
    {
        question: "What is the time complexity of searching an element in a balanced binary search tree (BST)?",
        answers:[
            {text: "O(log n)", correct: true},
            {text: "O(n)", correct: false},
            {text: " O(n log n)",correct:false},
            {text: "O(1)", correct: false}       
        ]
    },
        {
            question:"Which data structure uses the FIFO (First In, First Out) principle?",
            answers:[
                {text:"Stack",correct:false},
                {text:"Queue",correct:true},
                {text:"Tree",correct:false},
                {text:"Graph",correct:false},
            ]
    },
        {
            question:"What is the worst-case time complexity of Quick Sort?",
            answers:[
                {text:"O(n log n)",correct:false},
                {text:"O(n²)",correct:true},
                {text:"O(log n)",correct:false},
                {text:"O(n)",correct:false},
            ]
    },
        {
            question:"Which data structure is used for implementing recursion internally in most programming languages?",
            answers:[
                {text:"Stack",correct:true},
                {text:"Queue",correct:false},
                {text:"Array",correct:false},
                {text:"Heap",correct:false},

            ]
    },
        {
            question:"In which traversal of a binary tree is the root visited between the left and right subtrees?",
            answers:[
                {text:"Preorder",correct:false},
                {text:"Inorder",correct:true},
                {text:"Postorder",correct:false},
                {text:"Level-order",correct:false},
            ]
    }
];

const questionelem=document.getElementById("ques");
const answerB=document.getElementById("answers");
const nextbutton=document.getElementById("next");
let questionindex=0;
let score=0;


function startquiz(){
    questionindex=0;
    score=0;
    nextbutton.innerHTML="Next";
    displayQuestion();
}
function displayQuestion(){
    resetQuestion();
    let current =questions[questionindex]
    let qno=questionindex+1;
    questionelem.innerHTML=qno+". "+current.question;

current.answers.forEach(answer => {
    const button=document.createElement("button");
    button.innerHTML=answer.text;
    button.classList.add("btn1");
    answerB.appendChild(button);
    if (answer.correct){
        button.dataset.correct=answer.correct;
    }
    button.addEventListener("click",answerSelected);

});
}

function resetQuestion(){
    nextbutton.style.display="none";
    while(answerB.firstChild)
        answerB.removeChild(answerB.firstChild)

}

function answerSelected(a){
    const selectedButton=a.target;
    const correct=selectedButton.dataset.correct==="true";
    if(correct){
        selectedButton.classList.add("correct");
        score++;
    }
    else{
        selectedButton.classList.add("incorrect");
    }
    Array.from(answerB.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextbutton.style.display="block";


}

function showscore(){
    resetQuestion();
    questionelem.innerHTML=`You scored ${score} out of ${questions.length}!`;
    nextbutton.innerHTML="PLAY AGAIN";
    nextbutton.style.display="block";
}
function handleNext(){
    questionindex++;
    if(questionindex<questions.length){
        displayQuestion();
    }
    else{
        showscore();
    }

}
nextbutton.addEventListener("click",()=>{
    if(questionindex<questions.length){
        handleNext();
    }
    else{
        startquiz();
    }

});

startquiz();