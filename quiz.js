const QuizData = [
    {
        question: "What is the full form of CSS ?",
        a: "Car Suvit Style",
        b: "Cascading Style Sheet",
        c: "Cascading Simple Sheet",
        d: "Central Style Sheet",
        correct: "b",
    },
    {
        question: "In which year javaScript was launched ?",
        a: "1995",
        b: "1999",
        c: "1972",
        d: "1928",
        correct: "a",
    },
    {
        question: "Who Invevted Java Programming Language ?",
        a: "Bjarne Stormstrum",
        b: "Dennis Richie",
        c: "James Gosling",
        d: "Guino van Russom",
        correct: "c",
    },
    {
        question: "Which Language runs in a Web Browser ?",
        a: "c++",
        b: "python",
        c: "java",
        d: "javaScript",
        correct: "d",
    },

];
const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz(){
    deselectAnswers()
    const currentQuizData = QuizData[currentQuiz]
    questionEl.innerHTML = currentQuizData.question
    a_text.innerHTML = currentQuizData.a
    b_text.innerHTML = currentQuizData.b
    c_text.innerHTML = currentQuizData.c
    d_text.innerHTML = currentQuizData.d
}
function deselectAnswers(){
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected(){
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer){
        if(answer === QuizData[currentQuiz].correct){
            score++
        }
        currentQuiz++
        if(currentQuiz < QuizData.length){
            loadQuiz()
        }
        else{
            quiz.innerHTML = `<h2>You Answered ${score}/${QuizData.length} questions correctly</h2>
            <button onclick = "location.reload()">Reload</button>`
        }
    }
})