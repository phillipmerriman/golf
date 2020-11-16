/*
scoreKeeper chooses number of players
create a numOfPlayers variable = 0
add number of players to numOfPlayers
render number of players divs to page, equivalent to numOfPlayers

scoreKeeper enteres each player name
set playerName for each player

-------------------------------

scorekeeper enters score for each player
get value from input field
when Submit button is clicked, add value to Total Score for each player
render updated total score

increase hole number by 1

---end of game---

2 options:

save scores button 
-or-
reset button

*/

let numOfPlayers = $("#how-many-players").val();
let hole = 0;
let newDiv = $("#<div>");

function getNumberOfPlayers () {
    return prompt("who are yi");
}
console.log(numOfPlayers)
getNumberOfPlayers();

$(button).on("click", function () {
    console.log(numOfPlayers);
})