var numRight1 = 0;
var numRight2 = 0;
var numRight3 = 0;
var numRight4 = 0;

var questionType;
var answerType;
var questions;
var correctAnswers;
var answers = [];
var num;
var randomAnswer;
var numbers;
var i = 0;
var x;
var y;
var z;
var correcto;
var canvas;
var ctx;

var a = document.getElementById("A");
var b = document.getElementById("B");
var c = document.getElementById("C");
var d = document.getElementById("D");
var pride = document.getElementById("pride");
var env = document.getElementById("env");
var edu = document.getElementById("edu");
var health = document.getElementById("health");
console.log("Button A value: " + a);

function drawCanvas() {
    canvas = document.getElementById("game");
    console.log("Canvas value: " + canvas);
    ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = "30px Arial";
    ctx.fillStyle = "#000000";
    ctx.fillText("The category is: " + questionType, 10, 50);
	setTimeout(showQuestion, 1000);
}

function zeroHistory() {
	ctx.fillStyle = "#cccccc";
	ctx.fillRect(375,125,150,25);
	ctx.fillRect(530,125,150,25);
	ctx.fillRect(685,125,150,25);
}
function oneHistory() {
	ctx.fillStyle = "#e65c00";
	ctx.fillRect(375,125,150,25);
	ctx.fillStyle = "#cccccc";
	ctx.fillRect(530,125,150,25);
	ctx.fillRect(685,125,150,25);
}
function twoHistory() {
	ctx.fillStyle = "#e65c00";
	ctx.fillRect(375,125,150,25);
	ctx.fillRect(530,125,150,25);
	ctx.fillStyle = "#cccccc";
	ctx.fillRect(685,125,150,25);
}
function sticker() {
	ctx.fillStyle = "#e65c00";
	ctx.fillRect(375,125,150,25);
	ctx.fillRect(530,125,150,25);
	ctx.fillRect(685,125,150,25);
	switch(questionType) {
		case 1:
			ctx.drawImage(pride, 10, 200);
			break;
		case 2:
			ctx.drawImage(env, 10, 200);
			break;
		case 3:
			ctx.drawImage(edu, 10, 200);
			break;
		case 4:
			ctx.drawImage(health, 10, 200);
			break;
		default:
			window.alert("Question type could not be found");
	}
}

function progress(prog) {
	switch (prog) {
		case 0:
			zeroHistory();
			break;
		case 1:
			oneHistory();
			break;
		case 2:
			twoHistory();
			break;
		case 3:
			sticker();
			break;
		default:
			window.alert("Progress not saved");
	}
}

function showQuestion() {
	ctx.fillText("Question: " + questions[num], 10, 100);
	switch (questionType) {
		case 1:
			ctx.fillText("Progress for this category: ",10,150);
			progress(numRight1);
			break;
		case 2:
			ctx.fillText("Progress for this category: ",10,150);
			progress(numRight2);
			break;
		case 3:
			ctx.fillText("Progress for this category: ",10,150);
			progress(numRight3);
			break;
		case 4:
			ctx.fillText("Progress for this category: ",10,150);
			progress(numRight4);
			break;
		default:
			window.alert("Question type not found");
	}
    changeButtons();
}

function changeButtons() {
	x = 0;
	y = 0;
	z = 0;
	randomAnswer = 0;
	randomAnswer = Math.floor(Math.random() * 3.49);
    a.innerHTML = answers[randomAnswer];
    x = randomAnswer;
    while (x == randomAnswer) {
        randomAnswer = Math.floor(Math.random() * 3.49);
    }
    b.innerHTML = answers[randomAnswer];
    y = randomAnswer;
    while (x == randomAnswer || y == randomAnswer) {
        randomAnswer = Math.floor(Math.random() * 3.49);
    }
    c.innerHTML = answers[randomAnswer];
    z = randomAnswer;
    while (x == randomAnswer || y == randomAnswer || z == randomAnswer) {
        randomAnswer = Math.floor(Math.random() * 3.49);
    }
    d.innerHTML = answers[randomAnswer];
	console.log("x = " + x);
	console.log("y = " + y);
	console.log("z = " + z);
	console.log("randomAnswer = " + randomAnswer);
}

function result(right_or_wrong) {
    if (right_or_wrong == true) {
        switch (questionType) {
            case 1:
                if(numRight1 == 3) {
                	numRight1 == 3;
                } else {
                	numRight1++;
                	progress(numRight1);
                }
                console.log("Added to 1");
                break;
            case 2:
                if(numRight2 == 3) {
                	numRight2 == 3;
                } else {
                	numRight2++;
                	progress(numRight2);
                }
                console.log("Added to 2");
                break;
            case 3:
                if(numRight3 == 3) {
                	numRight3 == 3;
                } else {
                	numRight3++;
                	progress(numRight3);
                }
                console.log("Added to 3");
                break;
            case 4:
                if(numRight4 == 3) {
                	numRight4 == 3;
                } else {
                	numRight4++;
                	progress(numRight4);
                }
                console.log("Added to 4");
                break;
            default:
                window.alert("Question type could not be chosen");
        }
    } else if (right_or_wrong == false) {
        switch (questionType) {
            case 1:
                if(numRight1 == 3) {
                	numRight1 == 3;
                } else {
                	numRight1--;
                	progress(numRight1);
                }
                console.log("Took from 1");
                break;
            case 2:
				if(numRight2 == 3) {
                	numRight2 == 3;
                } else {
                	numRight2--;
                	progress(numRight2);
                }
                console.log("Took from 2");
                break;
            case 3:
                if(numRight3 == 3) {
                	numRight3 == 3;
                } else {
                	numRight3--;
                	progress(numRight3);
                }
                console.log("Took from 3");
                break;
            case 4:
                if(numRight4 == 3) {
                	numRight4 == 3;
                } else {
                	numRight4--;
                	progress(numRight4);
                }
                console.log("Took from 4");
                break;
            default:
                window.alert("Question type could not be chosen");
        }
    } else {
        window.alert("No answer.");
    }
}

var words = ["angry", "awake", "run", "sad", "food", "oak", "java", "python", "magic"];
var names = ["Louis Armstrong", "Nelson Mandela", "George Washington", "Barack Obama", "Theodore Roosevelt", "Taylor Swift", "Peter", "Luna", "Harold", "Tiffany"];

var qset1word = ["What does the word 'joy' mean?", "What does the word 'apprehensive' mean?"];
var aset1word = ["happy", "scared"];
var qset1num = ["What is 9+10?"];
var aset1num = ["19"];
var qset1name = ["What is the name of the founder of Microsoft?", "What is the name of the first man to walk on the moon?", "What is the name of the founder of SpaceX?"];
var aset1name = ["Bill Gates", "Neil Armstrong", "Elon Musk"];

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

function generate_questions() {
	answers.length = 0;
	i = 0;
    questionType = Math.floor((Math.random() * 3.49) + 1);
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
        default:
            window.alert("Error: Question type could not be chosen.");
    }
    console.log("Question Type: " + questionType);
    num = Math.floor(Math.random() * questions.length);
    console.log("Question: " + questions[num]);
    console.log("Answer Type: " + answerType);
    console.log("Correct Answer: " + correctAnswers[num]);
    answers.push(correctAnswers[num]);
    console.log("Answers array:" + answers.toString());
    while (i < 3) {
        switch (answerType) {
            case 1:
                answers.push(words[Math.floor(Math.random() * words.length)].toString());
                console.log("Answers array:" + answers.toString());
                break;
            case 2:
                numbers = Math.floor(Math.random() * 100);
                console.log("Answers array:" + answers.toString());
                answers.push(numbers.toString());
                break;
            case 3:
                answers.push(names[Math.floor(Math.random() * names.length)].toString());
                console.log("Answers array:" + answers.toString());
                break;
            default:
                window.alert("Error: Answer type could not be chosen");
        }
        i++;
    }
    console.log("Wrong Answer: " + answers[2]);
}

function answered(variable) {
	if (variable == 0) {
		correcto = true;
	} else {
		correcto = false;
    }
    result(correcto);
    console.log("Correct?: " + correcto);
    if (numRight1 >= 3 && numRight2 >= 3 && numRight3 >= 3 && numRight4 >= 3) {
		window.alert("You win!");
	} else {
		setTimeout(game, 2000);
	}
}

function game() {
    generate_questions();
    drawCanvas();
}
game();