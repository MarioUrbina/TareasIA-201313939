
// Tarea No.2


estados_empiezo = [
    ["A", "DIRTY", "DIRTY"],
    ["B", "DIRTY", "DIRTY"],
]
function reflex_agent(location, state) {
    if (state == "DIRTY") return "CLEAN";
    else if (location == "A") return "RIGHT";
    else if (location == "B") return "LEFT";
}

function funcionamiento(states) {

    while (true) {
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
}

var states = ["A","DIRTY","DIRTY"];

function empiezo() {
    for (let estado of estados_empiezo) {
        console.log("=======================================")
        console.log("Location: A | Action: DIRTY")
        console.log("Location: B | Action: DIRTY")
        console.log("=======================================")
        funcionamiento(estado)
    }
}
empiezo();



