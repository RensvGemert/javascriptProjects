const quizData = [
    {
        question: '1 + 1 = ?',
        a: '1',
        b: '2',
        c: '3',
        d: '4',
        correct: 'b'
    }, 
    {
        question: '2 + 5 = ?',
        a: '4',
        b: '5',
        c: '6',
        d: '7',
        correct: 'd'
    },
    {
        question: '7 + 7 = ?',
        a: '12',
        b: '13',
        c: '14',
        d: '15',
        correct: 'c'
    },
    {
        question: '8 + 8 = ?',
        a: '16',
        b: '18',
        c: '22',
        d: '24',
        correct: 'a'
    },
    {
        question: '2 - 1 = ?',
        a: '1',
        b: '-2',
        c: '3',
        d: '-1',
        correct: 'a'
    }
];

const quiz = document.getElementById("quiz");
const answersEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById('question') 

const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuestion = 0;
let score = 0;


loadQuiz();

function loadQuiz(){

    deselectAnswers();

    const currentQuizData = quizData[currentQuestion];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected(){

    let answer = undefined;

    answersEls.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answersEls.forEach(answerEl => {
        answerEl.checked = false;
    });      
}

submitBtn.addEventListener("click", () => {
    const answer = getSelected();

    if(answer){
        if(answer === quizData[currentQuestion].correct){
            score++;
        }
        currentQuestion++;
        if(currentQuestion < quizData.length){
            loadQuiz();
        }
        else {
            quiz.innerHTML = '<h2>You answered correctly at ' + score + '/' + quizData.length + ' questions.</h2>';
        }
    }
})