const quizeBd = [
    {
        question: "Q1 : What is the full form of HTML",
        a: "Hello to my hand",
        b: "Hey text markup language",
        c: "Hyper Text Markup Language",
        d: "Hyper Text Markup Language",
        ans: "ans4"
    },
    {
        question: "Q2 : What is the full form of CSS",
        a: "Cascadding Style Sheet",
        b: "Hey text markup language",
        c: "Hyper Text Markup Language",
        d: "Hyper Text Markup Language",
        ans: "ans1"
    },
    {
        question: "Q3 : What is the full form of HTTP",
        a: "JavaScript",
        b: "Hey text markup language",
        c: "Hyper Text Markup Language",
        d: "Hyper Text Transfer Protocol",
        ans: "ans4"
    },
    {
        question: "Q4 : What is the full form of JS",
        a: "Cascadding Style Sheet",
        b: "JavaScript",
        c: "Hyper Text Markup Language",
        d: "Hyper Text Transfer Protocol",
        ans: "ans2"
    }
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submitBtn = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

const loadQuestion = () => {
    let questionList = quizeBd[questionCount];
    question.innerText = questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}

loadQuestion();

const getCheckAnswer = () => {
    let answer;
    answers.forEach((currAnsEle) => {
        if (currAnsEle.checked) {
            answer = currAnsEle.id;
        }
    });
    return answer;
}

const deSelectAll = () => {
    answers.forEach((currAnsEle) => currAnsEle.checked = false);
}

submitBtn.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();

    if (checkedAnswer === quizeBd[questionCount].ans) {
        score++;
    }
    questionCount++;
    deSelectAll();
    if (questionCount < quizeBd.length) {
        loadQuestion();
    } else {
        showScore.innerHTML = `
            <h3>Your Scored is ${score}/${quizeBd.length}</h3>
            <button class="btn" onclick="location.reload()">Play Again</button>
        `
        showScore.classList.remove('scorArea');
    }
})