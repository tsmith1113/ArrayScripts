"use strict"

let academyMembers = [
    {
        memID: 101,
        name: "Bob Brown",
        films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
    },
    {
        memID: 142,
        name: "Sallie Smith",
        films: ["A Good Day", "A Better Day"]
    },
    {
        memID: 187,
        name: "Fred Flanders",
        films: ["Who is Fred?", "Where is Fred?",
            "What is Fred?", "Why Fred?"]
    },
    {
        memID: 203,
        name: "Bobbie Boots",
        films: ["Walking Boots", "Hiking Boots",
            "Cowboy Boots"]
    },
];

function getActorByMemberId(academyMembers, memID) {
    for (let i = 0; i < academyMembers.length; i++) {
        if (academyMembers[i].memID == memID) {
            return academyMembers[i];
        }
    }
}
// Who is the Academy Member whose ID is 187?
console.log();
let actorName = getActorByMemberId(academyMembers, 187);
console.log(actorName.name);

// Who has have been in at least 3 films?
console.log();
console.log("Actor that has been in at least 3 fimls: ");
let threeFimls = [];
for(let i = 0; i < academyMembers.length; i++){
    
    if(academyMembers[i].films.length >= 3){
        threeFimls.push(academyMembers[i].name);
    }
}
console.log(threeFimls);

// Who has a name that starts with "Bob"?
