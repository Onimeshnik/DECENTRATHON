Telegram.WebApp.ready();

// Вопросы и ответы
const questions = [
    {
        question: "Вам больше нравится работать с людьми или с данными?",
        options: ["Люди", "Данные"],
        weights: { "Люди": "социальные профессии", "Данные": "аналитические профессии" }
    },
    {
        question: "Предпочитаете физическую работу или интеллектуальную?",
        options: ["Физическая", "Интеллектуальная"],
        weights: { "Физическая": "технические профессии", "Интеллектуальная": "инженерные профессии" }
    },
    {
        question: "Вам нравится решать творческие задачи?",
        options: ["Да", "Нет"],
        weights: { "Да": "творческие профессии", "Нет": "технические профессии" }
    }
];

let currentQuestion = 0;
let answers = [];


// Функция для показа текущего вопроса
function showQuestion() {
    const quizDiv = document.getElementById("quiz");
    quizDiv.innerHTML = ''; // Очистить предыдущий вопрос

    const questionData = questions[currentQuestion];
    const questionText = document.createElement("h3");
    questionText.innerText = questionData.question;
    quizDiv.appendChild(questionText);

    questionData.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.innerText = option;
        button.className = "button2";
        button.onclick = () => selectAnswer(option);
        quizDiv.appendChild(button);
    });
}

document.getElementById('result').classList.add('hidden');
// Функция для выбора ответа
function selectAnswer(selectedOption) {
    const questionData = questions[currentQuestion];
    answers.push(questionData.weights[selectedOption]);

    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        showQuestion();
    } else {
        showResult();
    }
}

// Функция для показа результата
function showResult() {
    const resultDiv = document.getElementById("result");
    const quizDiv = document.getElementById("quiz");
    const nextButton = document.getElementById("next");

    quizDiv.style.display = "none";  // Скрыть вопросы
    nextButton.style.display = "none";  // Скрыть кнопку "следующий"

    const resultText = analyzeResults();
    document.getElementById("profession-result").innerText = resultText;
    resultDiv.style.display = "block";  // Показать результат

    document.getElementById('nextbutton').classList.remove('hidden');
}

// Анализ результатов
function analyzeResults() {
    const counts = {};
    answers.forEach(answer => {
        counts[answer] = (counts[answer] || 0) + 1;
    });
    const result = Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);
    
    const recommendations = {
        "социальные профессии": "Социальный работник, Учитель, Психолог",
        "аналитические профессии": "Аналитик данных, Бухгалтер, Экономист",
        "технические профессии": "Строитель, Механик, Инженер, Программист",
        "творческие профессии": "Дизайнер, Художник, Фотограф"
    };
    
    return recommendations[result] || "Профессия не найдена";
}

// Функция для перехода к следующему вопросу
function nextQuestion() {
    showQuestion();
}

// Начать тест
showQuestion();

function handleAnswer() {
    window.location.href = 'https://noname5969.rf.gd/index4.html';
}