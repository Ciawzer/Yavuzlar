const questions = [
    {
        question:"Aşağıdakilerden hangisi imanın şartlarından değildir?" ,
        answers: [
            { text:"Allah'a inanmak", correct: false},
            { text:"Meleklere inanmak", correct: false},
            { text:"Chatgpt'e inanmak", correct: true},
            { text:"Ahirete inanmak", correct: false}
            
        ]
    },
    {
        question:"Aşağıdakilerden hangisi Emre hoca'nın sözlerindendir?" ,
        answers: [
            { text:"Backend süper bişi", correct: false},
            { text:"Frontend'e gel,ben sana diyim backend'i görünce anlıcaksın", correct: true},
            { text:"Bir şeyleri uğursuzluğa yormak,şirktir", correct: false},
            { text:"Hoş gör ki,hoş görülesin", correct: false}
            
        ]
    },
    {
        question:"Aşağıdakilerden hangisi ormancıdır?" ,
        answers: [
            { text:"Kai sa", correct: false},
            { text:"Nasus", correct: false},
            { text:"Seraphine", correct: false},
            { text:"Shaco", correct: true}
            
        ]
    },
    {
        question:"Yeni çıkan virüsün ismi nedir?" ,
        answers: [
            { text:"Maymun Çiçeği", correct: true},
            { text:"Corona", correct: false},
            { text:"League of Legends", correct: false},
            { text:"Parliement Reserve", correct: false}
            
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const editQuestionElement = document.getElementById("temp");

var currentQuestionIndex = 0;
var score = 0;



function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Sonraki";
    randomQuestions();
    showQuestion();

}
// Fisher-Yates algoritmasıymıs
function randomQuestions(){
    for (var i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]];
    }
}

function showQuestion(){
    resetState();
    var currentQuestion = questions[currentQuestionIndex];
    var questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn2");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);


    })

}


function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}
    
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `Aldığın puan ${score}`;
    nextButton.innerHTML = "Yeniden Oyna";
    nextButton.style.display = "block";

}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else
    {
        showScore();
    }
}

nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
});

startQuiz();






//soru arama

function search(){
    var filter = document.getElementById("input").value.toUpperCase();

    var item = document.querySelectorAll(".option");

    var l = document.getElementsByTagName("h3");

    for(var i = 0;i<=l.length;i++){
        var a = item[i].getElementsByTagName("h3")[0];

        var value = a.innerHTML || a.innerText || a.textContent;

        if(value.toUpperCase().indexOf(filter) > -1){
            item[i].style.display = "";
        }
        else{
            item[i].style.display = "none";
        }
    }

}

//soru düzenleme




function edit(){
    for(var i = 0;i<=l.length;i++){
        var a = item[i].getElementsByTagName("h3")[0];

        a.innerHTML = questions[0]

        
    }


}

//yok olmuyo




