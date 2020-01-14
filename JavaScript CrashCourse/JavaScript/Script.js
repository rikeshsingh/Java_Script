//alert('Hello');
//console.log('Rikesh SIngh');
function ageInDays(){
    var birthYear = prompt('What year were you born.. PPT ?');
    var ageInDayss = (2020 - birthYear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('Hello PPT You Are ' + ageInDayss +' Days Old Now');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
    console.log(ageInDayss);
}
 function Reset(){
     document.getElementById('ageInDays').remove();
 }
 //challenge 2- cat generator function

 function generateCat() {
     var image = document.createElement('img');
     var div = document.getElementById('flex-cat-gen');
     image.src = "http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
     div.appendChild(image);

 }
 //challenge 3: rock paper scissors game

 function rpsGame(yourChoice){
     console.log(yourChoice);
    //console.log(yourChoice.src);
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    
    botChoice = numberToChoice(randToRpsInt());
    console.log('computerChoice:', botChoice);
    //alert(botChoice);
    
    result = decideWinner(humanChoice, botChoice);   //[0 1] human lost | bot won
    console.log(result);
   
    message = finalMessage(result);   //{'message': 'you won!', 'colour': 'green'}
    console.log(message); 
   
    rpsFrontEnd(yourChoice.id, botChoice, message);
 }

 function randToRpsInt(){
     return Math.floor(Math.random() * 3);

 }

function numberToChoice(number){
    return ['Rock', 'Paper', 'Scissor'][number];
}

function decideWinner(yourChoice, computerChoice){
    var rpsDatabase = {
        'Rock':{'Scissor': 1, 'Rock': 0.5, 'Paper': 0},
        'Paper':{'Rock': 1, 'Paper': 0.5, 'Scissor': 0},
        'Scissor':{'Paper': 1, 'Scissor': 0.5, 'Rock': 0},
    };

    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[yourChoice][computerChoice];

    return [yourScore, computerScore];


}

function finalMessage([yourScore, computerScore]){
    if (yourScore == 0){
        return {'message': 'You Lost!', 'colour': 'Red'};
    }
    else if (yourScore == 0.5){
        return {'message': 'You Tied!', 'colour': 'yellow'};
    }
    else {
        return {'message': 'You Won!', 'colour': 'Green'};
   }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage){
    var imageDatabase = {
        'Rock': document.getElementById('Rock').src,
        'Paper': document.getElementById('Paper').src,
        'Scissor': document.getElementById('Scissor').src
    }

    //lets remove all the images
    document.getElementById('Rock').remove();
    document.getElementById('Paper').remove();
    document.getElementById('Scissor').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imageDatabase[humanImageChoice] + "'height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>"
    messageDiv.innerHTML = "<h1 style='color: "+ finalMessage['color'] + "; font-size 60px; padding: 30px; '>" + finalMessage['message'] + "</h1>"
    botDiv.innerHTML = "<img src='" + imageDatabase[botImageChoice] + "'height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'>"
    
    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);

}