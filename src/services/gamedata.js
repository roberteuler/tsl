export class GameData {
  constructor() {
    this.data = {
      games: [],
      players: [],
      teams: []
    };
    this.gameTemplate = {
      id: "",
      date: "",
      table: "",
      sets: []
    };

    this.setTemplate = {
      id: "",
      attacker1: "",
      defender1: "",
      attacker2: "",
      defender2: "",
      pointsTeam1: 0,
      pointsTeam2: 0,
      team1: "",
      team2: "",
      ownGoals1: 0,
      ownGoals2: 0,
      keeperGoals1: 0,
      keeperGoals2: 0
    };
    this.playerTemplate = {
      id: "",
      firstname: "",
      lastname: "",
      maxRating: "",
      ranking: []
    };

    this.rankingTemplate = {
      season: "",
      rating: "",
      rank: "",
      goalsScored: 0,
      goalsTaken: 0,
      wins: 0,
      looses: 0,
      gamesPlayed: 0
    };

    this.teamTemplate = {
      id: "",
      player1: "",
      player2: "",
      active: true,
      name: "",
      maxRating: "",
      ranking: []
    };
  }

  get data() {
    return this.data;
  }

  set data(data) {
    this.data = { ...data };
  }
}
