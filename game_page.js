var numRight1 = 0;
var numRight2 = 0;
var numRight3 = 0;
var numRight4 = 0;
var numRight5 = 0;
var numRight6 = 0;

var questionType;
var answerType;
var questions;
var correctAnswers;
var answers = [];
var qLen;
var num;
var randomAnswers;
var numbers;
var i;
var clicked;

var a = document.getElementById("A");
var b = document.getElementById("B");
var c = document.getElementById("C");
var d = document.getElementById("D");
console.log(a);

function drawCanvas() {
    var canvas = document.getElementById("game");
    console.log(canvas);
    var ctx = canvas.getContext("2d");
    ctx.font = "30px Arial";
    ctx.fillText("Question Type: " + questionType, 10, 50);
    ctx.fillText("Question: " + questions[num], 10, 100);
    a.innerHTML = answers[0];
    b.innerHTML = answers[1];
    c.innerHTML = answers[2];
    d.innerHTML = answers[3];
}

var words = ["angry", "awake", "run", "sad", "food", "oak", "java", "python", "magic"];
var names = ["Louis Armstrong", "Nelson Mandela", "George Washington", "Barack Obama", "Theodore Roosevelt", "Taylor Swift", "Peter", "Luna", "Harold", "Tiffany"];

var qset1word = ["What does the word 'joy' mean?", "What does the word 'apprehensive' mean?"];
var aset1word = ["happy", "scared"];
var qset1num = ["What is 9+10?"];
var aset1num = ["21"];
var qset1name = ["What is the name of the founder of Microsoft?", "What is the name of the first man to walk on the moon?", "What is the name of the founder of SpaceX?"];
var aset1name = ["Bill Gates", "Neil Armstrong"];

var qset2word = ["What does the word 'sleepy' mean?"];
var aset2word = ["tired"];
var qset2num = ["What is 7+8?", "What is 5x6?"];
var aset2num = ["15", "30"];
var qset2name = ["What is the name of the mentor who helped us come up with ideas?", "What is the name of the person in charge of the Rails workshop?"];
var aset2name = ["Jinny", "Michael"]

var qset3word = ["What does the word 'intelligent' mean?"];
var aset3word = ["smart"];
var qset3num = ["What is the percentage of people that major in tech?", "What is the percentage of people that major in history?"];
var aset3num = ["40", "40"];
var qset3name = ["Who is the founder of Apple?"];
var aset3name = ["Steve Jobs"];

var qset4word = ["What does the word 'strut' mean?", "What does the word 'hop' mean?"];
var aset4word = ["walk", "jump"];
var qset4num = ["What is 9+28?"];
var aset4num = ["37"]
var qset4name = ["Who was the third president of the U.S.?", "Who was the 4th president of the U.S.?"];
var aset4name = ["Thomas Jefferson", "James Madison"]

var qset5word = ["What is HTML?"];
var aset5word = ["language"];
var qset5num = ["What is 18/2?"];
var aset5num = ["9"];
var qset5name = ["Name the 45th president of the U.S."];
var aset5name = ["Donald Trump"];

var qset6word = ["What does the word 'duffel' mean?", "What does the word 'vocabulary' mean?"];
var aset6word = ["bag", "words"];
var qset6num = ["What is the 7th digit of pi?", "What is the 4th digit of pi?", "What is the 20th digit of pi?", "What is the 19th digit of pi?"];
var aset6num = ["2", "1", "4", "3"];
var qset6name = ["Who was the inventor of the lightbulb?"];
var aset6name = ["Thomas Edison"];

function game() {
    while (numRight1 < 2 && numRight2 < 2 && numRight3 < 2 && numRight4 < 2 && numRight5 < 2 && numRight6 < 2) {
        questionType = Math.floor((Math.random() * 5.49) + 1);
        answerType = Math.floor((Math.random() * 2.49) + 1);

        switch (questionType) {
            case 1:
                switch (answerType) {
                    case 1:
                        questions = qset1word;
                        correctAnswers = aset1word;
                        break;
                    case 2:
                        questions = qset1num;
                        correctAnswers = aset1num;
                        break;
                    case 3:
                        questions = qset1name;
                        correctAnswers = aset1name;
                        break;
                    default:
                        window.alert("Error: Answer type could not be chosen");
                }
                break;
            case 2:
                switch (answerType) {
                    case 1:
                        questions = qset2word;
                        correctAnswers = aset2word;
                        break;
                    case 2:
                        questions = qset2num;
                        correctAnswers = aset2num;
                        break;
                    case 3:
                        questions = qset2name;
                        correctAnswers = aset2name;
                        break;
                    default:
                        window.alert("Error: Answer type could not be chosen");
                }
                break;
            case 3:
                switch (answerType) {
                    case 1:
                        questions = qset3word;
                        correctAnswers = aset3word;
                        break;
                    case 2:
                        questions = qset3num;
                        correctAnswers = aset3num;
                        break;
                    case 3:
                        questions = qset3name;
                        correctAnswers = aset3name;
                        break;
                    default:
                        window.alert("Error: Answer type could not be chosen");
                }
                break;
            case 4:
                switch (answerType) {
                    case 1:
                        questions = qset4word;
                        correctAnswers = aset4word;
                        break;
                    case 2:
                        questions = qset4num;
                        correctAnswers = aset4num;
                        break;
                    case 3:
                        questions = qset4name;
                        correctAnswers = aset4name;
                        break;
                    default:
                        window.alert("Error: Answer type could not be chosen");
                }
                break;
            case 5:
                switch (answerType) {
                    case 1:
                        questions = qset5word;
                        correctAnswers = aset5word;
                        break;
                    case 2:
                        questions = qset5num;
                        correctAnswers = aset5num;
                        break;
                    case 3:
                        questions = qset5name;
                        correctAnswers = aset5name;
                        break;
                    default:
                        window.alert("Error: Answer type could not be chosen");
                }
                break;
            case 6:
                switch (answerType) {
                    case 1:
                        questions = qset6word;
                        correctAnswers = aset6word;
                        break;
                    case 2:
                        questions = qset6num;
                        correctAnswers = aset6num;
                        break;
                    case 3:
                        questions = qset6name;
                        correctAnswers = aset6name;
                        break;
                    default:
                        window.alert("Error: Answer type could not be chosen");
                }
                break;
            default:
                window.alert("Error: Question type could not be chosen.");
        }
        console.log(questionType);
        qLen = questions.length;
        num = Math.floor(Math.random() * qLen);
        console.log(questions[num]);
        console.log(correctAnswers[num]);
        answers.push(correctAnswers[num]);
        while (i < 3) {
            switch (answerType) {
                case 1:
                    answers.push(words[Math.floor(Math.random() * words.length)]);
                    break;
                case 2:
                    numbers = Math.floor(Math.random() * 100);
                    answers.push(numbers);
                    break;
                case 3:
                    wrongAnswers = names;
                    answers.push(names[Math.floor(Math.random() * names.length)]);
                    break;
                default:
                    window.alert("Error: Answer type could not be chosen");
            }
            i++;
        }
        drawCanvas();
        a.addEventListener("click", function() {
            clicked = true;
            switch (questionType) {
                case 1:
                    numRight1++;
                    break;
                case 2:
                    numRight2++;
                    break;
                case 3:
                    numRight3++;
                    break;
                case 4:
                    numRight4++;
                    break;
                case 5:
                    numRight5++;
                    break;
                case 6:
                    numRight6++;
                    break;
                default:
                    window.alert("Question type could not be chosen");
            }
        });
        b.addEventListener("click", function() {
            clicked = true;
            switch (questionType) {
                case 1:
                    numRight1--;
                    break;
                case 2:
                    numRight2--;
                    break;
                case 3:
                    numRight3--;
                    break;
                case 4:
                    numRight4--;
                    break;
                case 5:
                    numRight5--;
                    break;
                case 6:
                    numRight6--;
                    break;
                default:
                    window.alert("Question type could not be chosen");
            }
        });
        c.addEventListener("click", function() {
            clicked = true;
            switch (questionType) {
                case 1:
                    numRight1--;
                    break;
                case 2:
                    numRight2--;
                    break;
                case 3:
                    numRight3--;
                    break;
                case 4:
                    numRight4--;
                    break;
                case 5:
                    numRight5--;
                    break;
                case 6:
                    numRight6--;
                    break;
                default:
                    window.alert("Question type could not be chosen");
            }
        });
        d.addEventListener("click", function() {
            clicked = true;
            switch (questionType) {
                case 1:
                    numRight1--;
                    break;
                case 2:
                    numRight2--;
                    break;
                case 3:
                    numRight3--;
                    break;
                case 4:
                    numRight4--;
                    break;
                case 5:
                    numRight5--;
                    break;
                case 6:
                    numRight6--;
                    break;
                default:
                    window.alert("Question type could not be chosen");
            }
        });
    }
}
game();