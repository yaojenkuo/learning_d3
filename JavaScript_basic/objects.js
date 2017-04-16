var chicagoBulls = {
    isChampion: true,
    wins: 72,
    losses: 10,
    season: "1995-96",
    majorPlayers: ["Michael Jordan", "Scottie Pippen", "Dennis Rodman"]
};

console.log(chicagoBulls.isChampion);
console.log(chicagoBulls.wins);
console.log(chicagoBulls.losses);
console.log(chicagoBulls.season);
console.log(chicagoBulls.majorPlayers[0]);
console.log(chicagoBulls.majorPlayers[1]);
console.log(chicagoBulls.majorPlayers[2]);
console.log("wins" in chicagoBulls); // true
console.log("Wins" in chicagoBulls); // false
console.log(chicagoBulls.hasOwnProperty("losses")); // true
console.log(chicagoBulls.hasOwnProperty("Losses")); // false