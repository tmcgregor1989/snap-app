use scoreboard;
db.dropDatabase();

db.players.insertMany([
    {
        "name": "Slap",
        "score": 10000
    },
    {
        "name": "Jack",
        "score": 52
    }
]);