//  2021 Luis Espino
// Tarea No.2


function reflex_agent(location, state) {
    if (state == "DIRTY") return "CLEAN";
    else if (location == "A") return "RIGHT";
    else if (location == "B") return "LEFT";
}

function funcionamiento(states) {
    console.log("Location:"+ states[0] + " | CUARTO A:" + states[1] + " | CUARTO B:" + states[2] );
     var st = states[0] == 'B'
    console.log("Location:"+ states[0] + " | CUARTO A:" + states[1] + " | CUARTO B:" + states[2] );

    var location = states[0];		
    var state = states[0] == "A" ? states[1] : states[2];
    var action_result = aspirar(location, state);
    document.getElementById("log").innerHTML+="<br>Location: ".concat(location).concat(" | Action: ").concat(action_result).concat(" | STATE: ").concat(states);
    if (action_result == "CLEAN"){
      if (location == "A") states[1] = "CLEAN";
       else if (location == "B") states[2] = "CLEAN";
    }
    else if (action_result == "RIGHT") states[0] = "B";
    else if (action_result == "LEFT") states[0] = "A";
    setTimeout(function(){ funcionamiento(states); }, 5000);
}

var states = ["A","DIRTY","DIRTY"];

funcionamiento(states);



