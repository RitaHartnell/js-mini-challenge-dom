/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)


/***** Deliverable 2 *****/
header.style.color = "red";

/***** Deliverable 3 *****/
console.log("PLAYERS array looks like this:", PLAYERS)

let playerContainer = document.querySelector(".player-container");

PLAYERS.forEach(player => {
    let div = document.createElement("div");
    div.class = "player";
    div.setAttribute("data-number", `${player.number}`);
    let h3 = document.createElement('h3');
    h3.innerHTML = `${player.name} (<em> ${player.nickname} </em>)`
    div.appendChild(h3);
    let img = document.createElement("img");
    img.src = `${player.photo}`;
    div.appendChild(img);
    playerContainer.appendChild(div);
});

/***** Deliverable 4 *****/

const bad = document.querySelector("[data-number='7']");
bad.remove(); //fuckouttahere
