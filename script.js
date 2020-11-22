/*
scoreKeeper chooses number of players
create that many player divs

scoreKeeper enters each player name
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

let hole = 0;

function removeItem (item) {
    $(item).remove();
}

function createPlayers () {
    let numOfPlayers = $("#how-many-players").val();
    let playerNumber = 1;
    $("#players").empty();
    for (let i = 0; i < numOfPlayers; i++) {
        let newDiv = $("<div class='col-md-2 player-div'>");
        newDiv.attr("id", "player" + playerNumber);
        newDiv.text("Player " + playerNumber);
        newDiv.append(`<div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="strokes this hole" aria-label="Recipient's username" aria-describedby="basic-addon2">
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button">Submit</button>
        </div>
      </div>`)
        playerNumber++;
        $("#players").append(newDiv);
    }
    $("#how-many-players").val("");
    removeItem($(".form"));
}

$("button").on("click", function (e) {
    e.preventDefault();
    createPlayers();
});

function editName () {}

$(".player-div").on("click", function (e) {
    e.preventDefault();
    // editName();

});

