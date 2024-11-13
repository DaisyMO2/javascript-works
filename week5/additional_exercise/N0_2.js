//uganda_football_team_object
class player{
    constructor(name, position, goalsScored){
        this.name = name;
        this.position = position;
        this.goalsScored = goalsScored; 
    }
}

class football_team{
    constructor(){
        this.players = [];
    }
    calculate_total_goals(){
        return this.players.reduce((total, player) => total + player.goalsScored, 0);
    }
}

//example usage
const team = new football_team();
team.addplayer(new player('player1','forward', 15));
team.addplayer(new player('player2','midfielder',5));
console.log(team.calculate_total_goals());

//output:20