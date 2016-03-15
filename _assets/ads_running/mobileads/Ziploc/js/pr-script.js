var _pr_test_your_bbq_iq_wrap;
var _pr_test_your_bbq_iq_back_button;
var _test_your_bbq_iq_pr_bbq_logo;
var _pr_question_wrap;
var _pr_question;
var _pr_answer_wrap;
var _pr_answer;
var _pr_more_bbq_iq_tips_button;
var _pr_main_wrap;
var _pr_current_question;
var _pr_current_recipe;
var _pr_bbq_iq_info = [
	{
		'question': 'The grill is hotter with the top vent open.',
		'answer': 'It’s True! The open vent lets in more oxygen to feed the flames.'
	},{
		'question': 'You want your grill to have a nice, even temperature.',
		'answer': 'It’s false! Always build a two-zone fire with hot and cool areas. You’ll have more flexibility and a way to escape flare-ups.'
	},{
		'question': 'Burgers, steaks, and chops should be flipped once.',
		'answer': 'It’s true! Assuming you’ve properly oiled the grill, the meat should release when it’s cooked long enough.'
	}
];

var _pr_bbq_iq_answered = [];
var _pr_bbq_recipes = [1,2,3];
var _pr_bbq_recipes_check = [];
var prQuestionFound = false;
var prRecipeFound = false;
var _pr_bbq_tip_wrap;


function prInitAd(){
	// document.getElementById('prf' + PRPID).style.left = '50%';
	// document.getElementById('prf' + PRPID).style.top = '0px';
	// document.getElementById('prf' + PRPID).style.marginLeft = '-50%';
	// document.getElementById('prf' + PRPID).style.width = '100%';
	// document.getElementById('prf' + PRPID).style.height = '100%';

	_pr_test_your_bbq_iq_wrap = document.getElementById('pr-test-your-bbq-iq-wrap');
	_pr_test_your_bbq_iq_back_button = document.getElementById('pr-test-your-bbq-iq-back-button');
	_pr_test_your_bbq_iq_bbq_logo = document.getElementById('pr-test-your-bbq-iq-bbq-logo');
	_pr_question_wrap = document.getElementById('pr-question-wrap');
	_pr_question = document.getElementById('pr-question');
	_pr_answer_wrap = document.getElementById('pr-answer-wrap');
	_pr_answer = document.getElementById('pr-answer');
	_pr_more_bbq_iq_tips_button = document.getElementById('pr-more-bbq-iq-tips-button');
	_pr_main_wrap = document.getElementById('pr-main-wrap');
	_pr_bbq_tip_wrap = document.getElementById('pr-bbq-recipe-wrap');
	_pr_bbq_tip_back_button = document.getElementById('pr-bbq-recipe-back-button');

	_pr_test_your_bbq_iq_back_button.addEventListener('click', prTestYourBBQIQBackButtonClickHandler, false);
	_pr_bbq_tip_back_button.addEventListener('click', prBBQRecipeBackButtonClickHandler, false);
	document.getElementById('pr-true-button').addEventListener('click', prAnswerButtonHandler, false);
	document.getElementById('pr-false-button').addEventListener('click', prAnswerButtonHandler, false);
	document.getElementById('pr-test-your-bbq-iq-button').addEventListener('click', prTestYourBBQIQButtonHandler, false);
	document.getElementById('pr-bbq-recipe-button').addEventListener('click', prBBQRecipeButtonHandler, false);
}

function prTestYourBBQIQBackButtonClickHandler(event){
	//prActivity(4);
	document.getElementById('pr-meat').style.display = 'block';
	_pr_test_your_bbq_iq_wrap.style.left = '-100%';
	_pr_main_wrap.style.left = '0%';
	//reset content in test your bbq iq section so they can answer a new question.
	_pr_question_wrap.style.opacity = '1';
	_pr_answer_wrap.style.display = 'none';
	_pr_more_bbq_iq_tips_button.style.display = 'none';
}

function prBBQRecipeBackButtonClickHandler(event){
	//prActivity(3);
	_pr_main_wrap.style.left = '0%';
	_pr_bbq_tip_wrap.style.left = '100%';
	//reset content in test your bbq iq section so they can answer a new question.
}

function prAnswerButtonHandler(event){
	_pr_test_your_bbq_iq_back_button.style.display = 'block';
	_pr_test_your_bbq_iq_bbq_logo.style.margin = '0px 0px 0px -55px';
	_pr_question_wrap.style.opacity = '0';
	_pr_answer_wrap.style.display = 'block';
	_pr_more_bbq_iq_tips_button.style.display = 'block';

	window.setTimeout(function(){
		_pr_test_your_bbq_iq_back_button.style.opacity = '1';
		_pr_answer_wrap.style.opacity = '1';
		_pr_more_bbq_iq_tips_button.style.opacity = '1';
	}, 100);
}

function prTestYourBBQIQButtonHandler(event){
	//prActivity(1);
	document.getElementById('pr-true-button').addEventListener('click',prTrueButton);
	document.getElementById('pr-false-button').addEventListener('click',prFalseButton);
	prSelectQuestion(Math.floor(Math.random() * 3));

	_pr_test_your_bbq_iq_wrap.style.left = '0%';
	_pr_main_wrap.style.left = '100%';
	document.getElementById('pr-meat').style.display = 'none';
}

function prTrueButton(){
	console.log('true button');
	//prActivity(5);
}

function prFalseButton(){
	console.log('false button');
	//prActivity(6);
}

function prSelectQuestion(index){
	_pr_current_question = index;
	prCheckQuestion();
	//alert(prQuestionFound);
	if(prQuestionFound){
		prQuestionFound = false;
		prSelectQuestion(Math.floor(Math.random() * 3));
	}else{
		_pr_bbq_iq_answered.push(_pr_bbq_iq_info[index].question);
		if(_pr_bbq_iq_answered.length == 3){
			_pr_bbq_iq_answered.length = 0;
		}
		//alert(_pr_bbq_iq_answered.length);
		prAlignQuestion(index);
		_pr_question.innerHTML = _pr_bbq_iq_info[index].question;
		_pr_answer.innerHTML = _pr_bbq_iq_info[index].answer;
	}
}

function prAlignQuestion(index)
{
	//console.log(index);
	if(index == 0){
		document.getElementById('pr-answer').style.marginTop = '-32px';
	}else if(index == 1){
		document.getElementById('pr-answer').style.marginTop = '-53px';
	}else if(index == 2){
		document.getElementById('pr-answer').style.marginTop = '-42px';
	}
}

function prCheckQuestion(){
	for (var i = 0; i < _pr_bbq_iq_answered.length; i++){
		if(_pr_bbq_iq_answered[i] == _pr_bbq_iq_info[_pr_current_question].question){prQuestionFound = true;}
	}
}

function prBBQRecipeButtonHandler(event){
	//prActivity(2);
	prBBQSelect(Math.floor(Math.random() * 3));
	_pr_main_wrap.style.left = '-100%';	
	_pr_bbq_tip_wrap.style.left = '0%';	
}

function prBBQSelect(index)
{
	console.log('bbq select');
	_pr_current_recipe = index;
	console.log(_pr_current_recipe);
	prCheckRecipe();
	console.log(prRecipeFound);
	if(prRecipeFound){
		prRecipeFound = false;
		prBBQSelect(Math.floor(Math.random() * 3))
	}else{
		_pr_bbq_recipes_check.push(index);
		if(_pr_bbq_recipes_check.length == 3){
			_pr_bbq_recipes_check.length = 0;
		}

		if(_pr_current_recipe == 0){
				document.getElementById('pr-bbq-recipe-text').className = 'pr-bbq-recipe-1';
			}else if(_pr_current_recipe == 1){
				document.getElementById('pr-bbq-recipe-text').className = 'pr-bbq-recipe-2';
			}else if(_pr_current_recipe == 2){
				document.getElementById('pr-bbq-recipe-text').className = 'pr-bbq-recipe-3';
			}

	}
}

function prCheckRecipe(){
	for(var i = 0; i < _pr_bbq_recipes_check.length; i++){
		if(_pr_bbq_recipes_check[i] == _pr_bbq_recipes[_pr_current_recipe - 1]){prRecipeFound = true}
	}
}


function prOpenUrl(id, instance){
	try{
		pr_trk('pc', prup, instance, 1);
	} catch(err) {console.log(err)}

	var _pr_url = document.getElementById('pr-macro-' + id).href;

	window.setTimeout(function(){
		window.open(_pr_url, '_blank');
	}, 250);
}

function openPanel1(){
	// prBOver(PRPID);
	// prOpenPanel(1);
}

window.setTimeout(openPanel1,1000);

LOADED = true;

