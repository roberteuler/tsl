const data = {
  players: [
    {
      playerId: 1,
      firstname: "Tom",
      lastname: "Müller",
      maxRating: 1950,
      year: "2019",
      season: "1",
      rating: 1780,
      rank: 1,
      goalsScored: 38,
      goalsTaken: 45,
      wins: 12,
      looses: 10,
      gameCount: 22
    },
    {
      playerId: 1,
      firstname: "Tom",
      lastname: "Müller",
      maxRating: 1950,
      year: "2018",
      season: "1",
      rating: 1950,
      rank: 2,
      goalsScored: 24,
      goalsTaken: 33,
      wins: 21,
      looses: 21,
      gameCount: 42
    },
    {
      playerId: 2,
      firstname: "Hans",
      lastname: "Günther",
      maxRating: 1980,
      year: "2019",
      season: "1",
      rating: 1720,
      rank: 2,
      goalsScored: 38,
      goalsTaken: 45,
      wins: 12,
      looses: 10,
      gameCount: 22
    },
    {
      playerId: 2,
      firstname: "Hans",
      lastname: "Günther",
      maxRating: 1980,
      year: "2018",
      season: "1",
      rating: 1980,
      rank: 1,
      goalsScored: 55,
      goalsTaken: 23,
      wins: 12,
      looses: 18,
      gameCount: 30
    },
    {
      playerId: 3,
      firstname: "Franz",
      lastname: "Tchambo",
      maxRating: 1620,
      year: "2019",
      season: "1",
      rating: 1620,
      rank: 3,
      goalsScored: 12,
      goalsTaken: 45,
      wins: 4,
      looses: 32,
      gameCount: 36
    },
    {
      playerId: 3,
      firstname: "Franz",
      lastname: "Tchambo",
      maxRating: 1620,
      year: "2018",
      season: "1",
      rating: 1520,
      rank: 3,
      goalsScored: 24,
      goalsTaken: 33,
      wins: 12,
      looses: 35,
      gameCount: 47
    },
    {
      playerId: 4,
      firstname: "Ben",
      lastname: "Frank",
      maxRating: 1500,
      year: "2020",
      season: "1",
      rating: 1500,
      rank: 4,
      goalsScored: 0,
      goalsTaken: 0,
      wins: 0,
      looses: 0,
      gameCount: 0
    }
  ],
  tableTypes: [
    {
      tableId: 0,
      name: "Leonhart Pro Tournament"
    },
    {
      tableId: 1,
      name: "Ullrich Home"
    },
    {
      tableId: 2,
      name: "Ullrich Beast"
    },
    {
      tableId: 3,
      name: "Ullrich P4P"
    },
    {
      tableId: 4,
      name: "Lettner Pro Evolution"
    },
    {
      tableId: 5,
      name: "Bonzini"
    },
    {
      tableId: 6,
      name: "Tornado"
    },
    {
      tableId: 7,
      name: "Garlando"
    },
    {
      tableId: 8,
      name: "Roberto Sport"
    }
  ],
  games: [
    {
      gameId: 1,
      sets: [1, 2, 3],
      year: "2019",
      season: "1",
      tableType: 0,
      player1Id: 1,
      player2Id: 2,
      player3Id: 3,
      player4Id: 4,
      winner: 1
    }
  ],
  sets: [
    {
      setId: 1,
      attacker1Id: 1,
      defender1Id: 2,
      attacker2Id: 3,
      defender2Id: 4,
      pointsTeam1: 5,
      pointsTeam2: 3,
      winner: 1,
      owngoals1: 0,
      owngoals2: 1,
      keeperGoals1: 1,
      keeperGoals2: 1
    }
  ]
};
export default data;
