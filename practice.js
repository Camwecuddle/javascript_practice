var timeleft = 2;
var downloadTimer = setInterval(function(){
  timeleft--;
  document.getElementById("timer").innerHTML = timeleft;
  if(timeleft <= 0) {
    clearInterval(downloadTimer);
    Login();
  }  
},1000);

function Login() {
  var time = $('#timer');
  var game = $('#game_text');
  var name = $('.name');
  time.html("");
  time.animate({width: "0px"}, {duration: 2000, queue: false});
  time.animate({marginLeft: "50%"}, {duration: 2000, queue: false});
  time.animate({opacity: 0}, {duration: 2000, queue: false});
  game.delay(2000).animate({opacity: 1}, {duration: 2000, queue: true});
  name.delay(2000).animate({opacity: 1}, {duration: 2000, queue: true});
  name.css({visibility: "visible"});
}

function GetName() {
  var name = $('.name').html();
  $('.new_name').html(name);
  $('.row2').css({visibility: "visible"});
}



  