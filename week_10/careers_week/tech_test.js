const teams = [
    {id: 1, name: "Deep Threat"},
    {id: 2, name: "Norfolk-in-Chance"},
    {id: 3, name: "The Expansion Pack"},
    {id: 4, name: "The Abusement Park"},
    {id: 5, name: "Scared Hitless"},
    {id: 6, name: "The Mighty Morphin Flower Arrangers"},
    {id: 7, name: "Man-Eating Squirrels"},
    {id: 8, name: "The Cereal Killers"},
]


const results = [
    {homeId: 1, homeScore: 2, awayId: 8, awayScore: 3},
    {homeId: 2, homeScore: 1, awayId: 7, awayScore: 1},
    {homeId: 3, homeScore: 4, awayId: 6, awayScore: 4},
    {homeId: 4, homeScore: 1, awayId: 5, awayScore: 0},
    {homeId: 1, homeScore: 3, awayId: 2, awayScore: 3},
    {homeId: 3, homeScore: 2, awayId: 4, awayScore: 0},
    {homeId: 5, homeScore: 2, awayId: 6, awayScore: 2},
    {homeId: 7, homeScore: 1, awayId: 8, awayScore: 3},
]

for(let team of teams){
    team.points = 0
    for(let result of results){
        if(team.id === result.homeId){
            if(result.homeScore > result.awayScore){
                team.points += 3
            }
            if(result.homeScore === result.awayScore){
                team.points += 1
            }
            if(result.homeScore < result.awayScore){
                team.points += 0
            }
        }
        if(team.id === result.awayId){
            if(result.awayScore > result.homeScore){
                team.points += 3
            }
            if(result.awayScore === result.homeScore){
                team.points += 1
            }
            if(result.awayScore < result.homeScore){
                team.points += 0
            }
        }
    }
}
teams.sort((a,b) => b.points - a.points);
console.log(teams);



// Output a league table showing team names and their points tally
// in order.
// (win = 3 pts, draw = 1 pt, loss = 0 pts)


// Going to loop over teams and for each team, I'm going to lopp over the result - and for each result I'm going to look for the teams ID and store 

// node tech_test.js

// codewars is good for practicing for tech tests 