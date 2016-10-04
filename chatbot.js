function returnTime(){
  var now = new Date(Date.now());
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var timeString = hours + ":" + minutes;
  return timeString;

}


var responses = {
  "question": "answers",
  "hello": "hey there!",
  "how old are you": "i am 15!",
  "have you seen the whole harry potter series": "no  have not! i am not much interested in harry potter",
  "do you like shawn mendes": "ofcourse who doesnt!",
  "what is your fav song": "my fav song is like this by shawn mendes",
  "what is your fav clothing store": "my fav store is urban outfiters",
  "what is your fav color ": "my fav color is maroon",
  "would you like to go skydiving": "i would love to go ",
  "what is your most embarrasing moment": "i fell at my 8th grade promotion",
  "do you like taco bell": "i love taco bell",
  "whats your name": "my name is natalia",
  "what time is it": returnTime()

}

function askQuestion() {
  var question = $("#input").val()

  $("#chat-area").prepend(question + "<br/>")

  var answers = responses[question]

    if(answers == undefined) {

      var fallback = ["i do not know what you are asking", "you are crazy", "why are you asking me this weirdo", "i do not know the answer to your question"];
      var rand = Math.floor((Math.random() * fallback.length));
      $("#chat-area").prepend(fallback[rand] + "<br>");

    }
    else {
        $("#chat-area").prepend(answers)
    }
}
        $(document).keyup(function(event) {
          if (event.keyCode == 13) {
               askQuestion();
          }
  });
