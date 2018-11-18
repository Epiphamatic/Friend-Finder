var friends = require("../data/friends");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    console.log(req.body.scores);

    // Receive user details
    var user = req.body;

    // Obtain scores

    for(var i = 0; i < user.scores.length; i++) {

      user.scores[i] = parseInt(user.scores[i]);

    }

    var bestFriendIndex = 0;

    var minimumDifference = 40;

    // Compare scores with all people in the friends array

    for(var i = 0; i < friends.length; i++) {

      var totalDifference = 0;

      for(var j = 0; j < friends[i].scores.length; j++) {

        var difference = Math.abs(user.scores[j] - friends[i].scores[j]);

        totalDifference += difference;

      }

      if(totalDifference < minimumDifference) {

        bestFriendIndex = i;

        minimumDifference = totalDifference;

      }
    }

    // Push the user to the friend array

    friends.push(user);

    // send back to browser the best friend match

    res.json(friends[bestFriendIndex]);
    
  });
};