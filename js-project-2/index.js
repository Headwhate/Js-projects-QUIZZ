
var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct = 0;
//toutes les questions en bas//
var questions = 
[
    ["quelle est le nom de famille du général 'De Gaulle'?", "Gaulle de", "Charles", "De Gaulle", "C" ],
	[ "qui a construit la 'tour eiffel'?", "Gustave", "Michel", "Richard", "A" ],
	[ "est-ce qu'une femme s'est marié a cette dernière?", "Non", "Peut etre", "Absolument", "C" ],
	[ "qui appelle t-on?", "Bill Murray", "Chris Evans", " Gandhi", "A" ],
	[ "qui est cette femme?", "Marilyn Manson", "Rosa Parks", " Madonna", "B" ],
	 [ "ich ich! l'équipe...?", "je sais paaass!", " est TOKA!", "est absente","B" ]
]
	


//
//retourne l'id de x a chaque _\\

function _(x)
{
	return document.getElementById(x);
}

//toutes les bonnes réponses//
function renderQuestion()
{
	test = _("test");
	//pour terminer le test//
	if(pos >= questions.length)
	{
		//
		test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
		_("test_status").innerHTML = "Test Completed";
		pos = 0;
		correct = 0;
		return false;
	}
	//
	//pour savoir a quelle question on en ai//
	_("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
	
	question = questions[pos][0];
	chA = questions[pos][1];
	chB = questions[pos][2];
	chC = questions[pos][3];



	 if( question!=questions[4][0])
	 {
	 document.getElementById('rosa').style.opacity=0;
	 }
	 else
	  {
	  	document.getElementById('rosa').style.opacity=1;
	 }

	test.innerHTML = "<h3>"+question+"</h3>";
	test.innerHTML += "<input type='radio' name='choices' value='A'> "+chA+"<br>";
	test.innerHTML += "<input type='radio' name='choices' value='B'> "+chB+"<br>";
	test.innerHTML += "<input type='radio' name='choices' value='C'> "+chC+"<br><br>";
	test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
	
	
}
//histoire de vérifier si la réponse est la bonne//
function checkAnswer()
{
	choices = document.getElementsByName("choices");
	for(var i=0; i<choices.length; i++)
		{
		if(choices[i].checked){
			choice = choices[i].value;
		}
	}
	if(choice == questions[pos][4]){
		correct++;
	}
	

	pos++;
	 // if( question=questions[5][0])
	 // {
	 // document.getElementById('rosa').style.opacity:1;
	 // }
	renderQuestion();
}
window.addEventListener("load", renderQuestion, true);