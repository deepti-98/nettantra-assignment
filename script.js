document.getElementById("search_button").onclick = function() {searchFunction()};

function searchFunction() {
  var searchTerm = document.getElementById("search_player").value.toLowerCase();
  
  if(searchTerm.indexOf('chennai') > -1) {
        window.location = "csk.html"
    }else if(searchTerm.indexOf('delhi') > -1) {
        window.location = "delhi.html"
    }else if(searchTerm.indexOf('gujurat') > -1) {
        window.location = "gujurat.html"
    }else if(searchTerm.indexOf('punjab') > -1) {
        window.location = "pnb.html"
    }else if(searchTerm.indexOf('rajasthan') > -1) {
        window.location = "rajastan.html"
    }else if(searchTerm.indexOf('hyderabad') > -1) {
        window.location = "sunrise.html"
    }else if(searchTerm.indexOf('mumbai') > -1) {
        window.location = "mumbai.html"
    }else{
        alert("Enter correct team name");
    }
}

var add_team_button = document.getElementById("add_team_form");

if (add_team_button) {
    
    add_team_button.onsubmit = function() {teamaddFunction()};
    
    function teamaddFunction(){
        alert ("Team added successfuly");
    }
}

var add_player_button = document.getElementById("add_player_form");

if (add_player_button) {
    
    add_player_button.onsubmit = function() {playeraddFunction()};
    
    function playeraddFunction(){
        alert ("Player added successfuly");
    }
}