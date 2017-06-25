/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
 * VARIABLES:												 *
 * Various variables for data/arrays, only player 1			 *
 * be made into objects? Possible future update				 *
 * 															 *
 * Leave values empty for variables unless given a value, 	 *
 * all values are chosen intentionally.						 *
\* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

//player scores for each category
var numRight1 = 0;
var numRight2 = 0;
var numRight3 = 0;
var numRight4 = 0;

//question category and answer method
var questionType;
var questionTypeName;
var answerType;

//arrays for the questions and answers
var questions;
var correctAnswers;
var answers = [];

//values for picking random questions/answers
var num;
var randomAnswer;

//run while loop for picking random answers
var i = 0;

//data values for random answers
var x;
var y;
var z;

//question correct? boolean
var correcto;

//for creating canvases
var canvas;
var ctx;

//creates variable running current player and current question
var playerCategory;

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
 * IMPORTS:													 *
 * For buttons and images, based off of IDs. See HTML page	 *
\* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
 
//button imports
var a = document.getElementById("A");
var b = document.getElementById("B");
var c = document.getElementById("C");
var d = document.getElementById("D");

//sticker image imports
var pride = document.getElementById("pride");
var env = document.getElementById("env");
var edu = document.getElementById("edu");
var health = document.getElementById("health");
//console.log("Button A value: " + a);

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
 * ARRAYS:													 *
 * Holds various questions for each data type, and			 *
 * corresponding answers. Also has various wrong answers.	 *
\* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
 
//wrong answer arrays, for each type
var words = ["police","vegetarians","delta","beta","life","sunlight","nature","art","spirit","ceramics","cathode-ray tubes","crystal","heat waves","aliens","asteroids","radiation","science","math","history","biology","chemistry","honey","strawberries","baking soda","doctors","lawyers","police officers"];
var numbers;
var places = ["Grayfield Manor","The White House","New York City","San Francisco","Tel Aviv","Nevada","Peru","India","Russia","Iran","Massachussets","Delaware","Alabama","Texas"];
var names = ["Pablo Picasso","Claude Monet","Andy Warhol","Barack Obama","Bill Clinton","Hillary Clinton","Sylvia Rivera","Marsha Johnson","Theodore Roosevelt","Woodrow Wilson","Lyndon B. Johnson","John Muir","Edward Abbey","Aldo Leopold","Mark Zuckerberg","Elon Musk","Dorotea Bucca","Vera Gedroitz","Merit Ptah"];

//category 1 questions and correct answers
var qset1word = ["In the 1960s gay bars were often owned and operated by \n the...?","What was a common symbol of gay rights before the \n rainbow flag?","The color orange on the rainbow flag represents...?","The color blue on the rainbow flag represents...?"];
var aset1word = ["mafia","lambda","healing","harmony"];
var qset1num = ["How many colors were on the original rainbow flag?","How many colors are on the rainbow flag widely used \n today?"];
var aset1num = [8,6];
var qset1name = ["Who invented the rainbow flag?","Who organized the first Pride parade?"];
var aset1name = ["Gilbert Baker","Brenda Howard"];
var qset1pl = ["What location is often cited as the beginning of the \n modern Gay Rights Movement?","The largest pride parade was held in...?"];
var aset1pl = ["Stonewall Inn","São Paulo"];

//category 2 questions and correct answers
var qset2word = ["Which of the following are recyclable?","The ozone layer protects against...?"];
var aset2word = ["glass bottles","uv light"];
var qset2num = ["Ocean-based vehicles dump this many billion pounds of \n garbage into the ocean.","People in highly polluted areas have this percent of a higher \n chance of dying of lung cancer.","What percent of lakes in America are too polluted for \n aquatic life?","Recycling and compost saved this many trillion \n tons of waste."];
var aset2num = ["14","20","40","85"];
var qset2name = ["Who created the United States Environmental Protection \n Agency?","Who was the author of the book 'Silent Spring'?"];
var aset2name = ["Richard Nixon","Rachel Carson"]
var qset2pl = ["The world's tallest tree is a redwood found in...?","The country that produces the most pollution is...?"];
var aset2pl = ["California","China"];

//category 3 questions and correct answers
var qset3word = ["One of the fastest growing degrees is...?","20% of all undergraduates take one of these \n courses...?"];
var aset3word = ["recreation","remedial"];
var qset3num = ["The percent of unemployed people who graduated from a community \n college is about...?","About what percent of children from America’s wealthiest \n families attend an elite college?","In the past 8 years, government funding for higher education \n was cut by what percent in the U.S.?","What percent of students attend a public college or \n university?"];
var aset3num = ["2","40","18","73"];
var qset3name = ["Who established the U.S. Department of Education?","Who attempted to dismantle the U.S. Department of Education?"];
var aset3name = ["Jimmy Carter","Ronald Reagan"];
var qset3pl = ["This place's Institute of Technology is ranked as most popular \n among people who rose in social status.","This state has the highest graduation rate in the U.S."];
var aset3pl = ["New Jersey","Iowa"];

//category 4 questions and correct answers
var qset4word = ["This can treat athlete's foot.","1 in 5 whats have clinically significant psychopathic traits?"];
var aset4word = ["garlic","ceos"];
var qset4num = ["Over what percent of cancer could be prevented by a healthy lifestyle?","What percent of people needing mental health services don't get it?","How many more teaspoons of sugar do Americans consume than recommended daily?"];
var aset4num = ["30","60","13"];
var qset4name = ["Who spends more money on global health than the World Health Organization?","Who was the first female doctor?"];
var aset4name = ["Bill Gates","Elizabeth Blackwell"];
var qset4pl = ["The first dead heart transplant was performed where?","Where are measles officially eliminated?"];
var aset4pl = ["Australia","Americas"];

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
 * FUNCTIONS:											     *
 * Define functions, in the order they are used in the main	 *
 * game(); function. Order is:								 *
 * - chooseData();											 *
 * - typeName();											 *
 * - generate_questions();									 *
 * - zeroHistory();											 *
 * - oneHistory();											 *
 * - twoHistory();											 *
 * - sticker();												 *
 * - progress();											 *
 * - changeButtons();										 *
 * - drawCanvas();											 *
 * - showQuestion();										 *
 * - answered();											 *
 * - result();												 *
\* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

//stores the player scores in an easy-to-pull function
function chooseData(category){
	/* if game category is a certain value, return current value for variables:
	 * numRight1
	 * numRight2
	 * numRight3
	 * numRight4
	 */
	switch(category){
		case 1:
			return numRight1;
			break;
		case 2:
			return numRight2;
			break;
		case 3:
			return numRight3;
			break;
		case 4:
			return numRight4;
			break;
		default:
			//if category can't be found,send error message
			window.alert("Category not found");
	}
}

//stores all the question category names in a function
function typeName(type){
	/* The following questionType values correspond with the following rights:
	 * 1 = LGBT rights
	 * 2 = Environmental problems
	 * 3 = Education
	 * 4 = Health
	 */
	switch(type){
		case 1:
			return "LGBT rights";
			break;
		case 2:
			return "Environmental problems";
			break;
		case 3:
			return "Education";
			break;
		case 4:
			return "Health";
			break;
		default:
			//if type can't be found, send error message
			window.alert("Question type not found");
	}
}

//generates questions and a series of 4 answers, stored in questions[] and answers[]
function generate_questions() {
	//reset values each time function runs
	answers.length = 0;
	i = 0;
	
	//choose a random question and answer type
    questionType = Math.floor((Math.random() * 3.49) + 1);
    answerType = Math.floor((Math.random() * 3.49) + 1);
    
    //for each question type and answer type, pull one of the above arrays and set to questions[] and correctAnswers[]
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
                case 4:
                    questions = qset1pl;
                    correctAnswers = aset1pl;
                    break;
                default:
                	//if answer type cannot be found, send error message
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
                case 4:
                    questions = qset2pl;
                    correctAnswers = aset2pl;
                    break;
                default:
                	//if answer type cannot be found, send error message
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
                case 4:
                    questions = qset3pl;
                    correctAnswers = aset3pl;
                    break;
                default:
                	//if answer type cannot be found, send error message
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
                case 4:
                    questions = qset4pl;
                    correctAnswers = aset4pl;
                    break;
                default:
                	//if answer type cannot be found, send error message
                    window.alert("Error: Answer type could not be chosen");
            }
            break;
        default:
        	//if question type cannot be found, send error message
            window.alert("Error: Question type could not be chosen.");
    }
    //console.log("Question Type: " + questionType);
    
    //set num to a random value within the array to get a random question
    num = Math.floor(Math.random() * questions.length);
    //console.log("Question: " + questions[num]);
    //console.log("Answer Type: " + answerType);
    //console.log("Correct Answer: " + correctAnswers[num]);
    
    //the answers correspond with the question numbers, so answer can be pushed to answer choices array. 0 is always correct
    answers.push(correctAnswers[num]);
    //console.log("Answers array:" + answers.toString());
    
    //pushes a random wrong answer from the wrong answer arrays based off of input type. repeats 3 times.
    while (i < 3) {
        switch (answerType) {
            case 1:
                answers.push(words[Math.floor(Math.random() * words.length)].toString());
                //console.log("Answers array:" + answers.toString());
                break;
            case 2:
                numbers = Math.floor(Math.random() * 100);
                //console.log("Answers array:" + answers.toString());
                answers.push(numbers.toString());
                break;
            case 3:
                answers.push(names[Math.floor(Math.random() * names.length)].toString());
                //console.log("Answers array:" + answers.toString());
                break;
            case 4:
            	answers.push(places[Math.floor(Math.random() * places.length)].toString());
            	break;
            default:
            	//if answer type cannot be found, send error message
                window.alert("Error: Answer type could not be chosen");
        }
        i++;
    }
    //console.log("Wrong Answer: " + answers[2]);
}

//for each potential score for a category, display the following on the canvas

//0 points for the category
function zeroHistory() {
	ctx.fillStyle = "#cccccc";
	ctx.fillRect(375,125,150,25);
	ctx.fillRect(530,125,150,25);
	ctx.fillRect(685,125,150,25);
}

//1 point for the category
function oneHistory() {
	ctx.fillStyle = "#33d6ff";
	ctx.fillRect(375,125,150,25);
	ctx.fillStyle = "#cccccc";
	ctx.fillRect(530,125,150,25);
	ctx.fillRect(685,125,150,25);
}

//2 points for the category
function twoHistory() {
	ctx.fillStyle = "#33d6ff";
	ctx.fillRect(375,125,150,25);
	ctx.fillRect(530,125,150,25);
	ctx.fillStyle = "#cccccc";
	ctx.fillRect(685,125,150,25);
}

//3 points for the category
function sticker() {
	ctx.fillStyle = "#33d6ff";
	ctx.fillRect(375,125,150,25);
	ctx.fillRect(530,125,150,25);
	ctx.fillRect(685,125,150,25);
	//for each question type, display the corresponding sticker
	switch(questionType) {
		case 1:
			ctx.drawImage(pride, 10, 200);
			pride.style.height = '100px';
    		pride.style.width = '100px';
			break;
		case 2:
			ctx.drawImage(env, 10, 200);
			env.style.height = '100px';
    		env.style.width = '100px';
			break;
		case 3:
			ctx.drawImage(edu, 10, 200);
			edu.style.height = '100px';
    		edu.style.width = '100px';
			break;
		case 4:
			ctx.drawImage(health, 10, 200);
			health.style.height = '100px';
    		health.style.width = '100px';
			break;
		default:
			//if question type cannot be found, send error message
			window.alert("Question type could not be found");
	}
}

//figures out which score to display
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
			//if score cannot be found, send error message
			window.alert("Progress not saved");
	}
}

//changes the answer choices on the button
function changeButtons() {
	//resets the buttons
	x = 0;
	y = 0;
	z = 0;
	randomAnswer = 0;
	
	//randomly assigns each button an answer, only one is correct
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
	//console.log("x = " + x);
	//console.log("y = " + y);
	//console.log("z = " + z);
	//console.log("randomAnswer = " + randomAnswer);
}

//draws and stylizes a basic canvas, creates playerCategory, and adds to the canvas the current player
function drawCanvas() {
	//create playerCategory
	playerCategory = chooseData(questionType);
    
    //create the canvas
    canvas = document.getElementById("game");
    //console.log("Canvas value: " + canvas);
    ctx = canvas.getContext("2d");
    
    //reset the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    //stylize the canvas
    ctx.font = "30px Lato, sans-serif";
    ctx.fillStyle = "aliceblue";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black";
	
	//add the current player to the canvas
	setTimeout(showQuestion, 1000);
}

//shows the question category, question, and past progress onto the canvas
function showQuestion() {
	//finds the name of the question category
	questionTypeName = typeName(questionType);
	
	//stylizes canvas
	ctx.fillStyle = "black";
	
	//adds question category, question, and progress
	ctx.fillText("The category is: " + questionTypeName, 10, 50);
	ctx.fillText("Question: " + questions[num], 10, 100);
	ctx.fillText("Progress for this category: ",10,150);
	progress(playerCategory);
	
	//run changeButtons();
    changeButtons();
}

//runs after an answer is picked. shows whether the answer is correct, whether the game is over, and whether the player switches turns.
//also updates player scores
function answered(variable) {
	//finds if player picked correct answer
	if (variable == 0) {
		correcto = true;
	} else {
		correcto = false;
    }
    //console.log("Correct?: " + correcto);
    
    //runs result();
    result(correcto);
    
    //finds if game is over. will redirect later on
    if (chooseData(1) >= 3 && chooseData(2) >= 3 && chooseData(c3) >= 3 && chooseData(4) >= 3) {
		window.alert("Game over!");
	} else {
		setTimeout(game, 2000);
	}
	
	//updates databases
	switch(questionType){
		case 1:
			numRight1 = playerCategory;
			break;
		case 2:
			numRight2 = playerCategory;
			break;
		case 3:
			numRight3 = playerCategory;
			break;
		case 4:
			numRight4 = playerCategory;
			break;
		default:
			//if question type not found, run error message
			window.alert("Category not found");
	}
}

//shows the result on the canvas, changes player score, updates score to canvas
function result(right_or_wrong) {
	//stylizes canvas
	ctx.fillStyle = "black";
	
	//if player is correct
    if (right_or_wrong == true) {
    	//display message on canvas
    	ctx.fillText("You are correct!", 375, 200);
    	
    	//updates player score
        if(playerCategory == 3) {
            playerCategory == 3;
        } else {
            playerCategory++;
            progress(playerCategory);
        }
    } else if (right_or_wrong == false) {
    	//if player is wrong, display message on canvas
    	ctx.fillText("You are wrong!", 375, 200);
    	
    	//updates player score
    	if(playerCategory == 3) {
            playerCategory == 3;
        } else if (playerCategory == 0) {
        	playerCategory == 0;
        } else {
        	playerCategory--;
        	progress(playerCategory);
       	}
    } else {
    	//if correctness cannot be found, show error message
        window.alert("No answer.");
    }
}

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
 * MAIN FUNCTION:											 *
 * Runs all the functions that do not run on each other.	 *
\* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
 
//main game() function
function game() {
    generate_questions();
    drawCanvas();
    /*console.log("1,1:"+player1numRight1);
    console.log("1,2:"+player1numRight2);
    console.log("1,3:"+player1numRight3);
    console.log("1,4:"+player1numRight4);
    console.log("2,1:"+player2numRight1);
    console.log("2,2:"+player2numRight2);
    console.log("2,3:"+player2numRight3);
    console.log("2,4:"+player2numRight4);
    console.log("player:"+currentPlayer);*/
}

//run main function
game();