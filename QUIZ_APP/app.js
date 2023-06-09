const quizData = [
    {
        question: 'What dos CSS stand for?',
        a: 'Cascading Style sheet',
        b: 'Cascade Small site',
        c: 'Code small and smooth',
        d: 'None of the above',
        correct: 'a'
    },
    {
        question: 'What is the most used programing lenguage in 2019?',
        a: 'Java',
        b: 'C++',
        c: 'Python',
        d: 'Javascript',
        correct: 'a'
    },
    {
       question: 'Who is the president of US?',
       a: 'Florin Pop',
       b: 'Donald Trump',
       c: 'George Michael',
       d: 'Joe Biden',
       correct: 'd'
    },
    {
        question: 'What dos HTML stand for?',
        a: 'Hypertext Markup Lenguage',
        b: 'Cascading Style Sheet',
        c: 'Jason Object Notation',
        d: 'Helicopters Terminals Motorboats Lasmborginis',
        correct: 'a'
    },
    {
        question: 'What year was Javascript launched?',
        a: '1996',
        b: '1995',
        c: '1994',
        d: 'None of the above',
        correct: 'd'
    }
]


const answersEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const quiz = document.getElementById('quiz');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');

const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];
    questionEl.innerHTML = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;


   
}

function getSelected(){
    let answer = undefined;

    answersEls.forEach((answerEl) => {
        //console.log(answer.checked);
        if(answerEl.checked){
            answer = answerEl.id
        }
    });
    return answer;
};


function deselectAnswers(){
    answersEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
};


submitBtn.addEventListener('click', () => {
    //Check to dee the answer
    const answer = getSelected();
    console.log(answer);

    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;
        
                if(currentQuiz < quizData.length) {
                    loadQuiz();
                }else {
                    //TODO show results
                    quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2>`
                }
    };

});