function OpeningCeremony(callback) {
    let score = {
      red: 0,
      blue: 0,
      green: 0,
      yellow: 0,
      orange: 0
    };
    let count = 5;
    console.log("Welcome to the Sports Event! Opening Ceremony starting...");
    const interval = setInterval(() => {
      console.log(`Event starts in ${count} seconds...`);
      count--;
      if (count < 0) {
        clearInterval(interval);
        callback(score); 
      }
    }, 1000);
  }
  function RACE100M(score, callback) {
    console.log("100M Race starting...");
    setTimeout(function() {
      let times = {
        red: Math.floor(Math.random() * 11) + 10,
        blue: Math.floor(Math.random() * 11) + 10,
        green: Math.floor(Math.random() * 11) + 10,
        yellow: Math.floor(Math.random() * 11) + 10,
        orange: Math.floor(Math.random() * 11) + 10
      };
      console.log("Race times:", times);
      let sortingAthletes = Object.entries(times).sort((a, b) => a[1] - b[1]);
      console.log("Sorting Participants:", sortingAthletes);
  
      if (sortingAthletes[0]) score[sortingAthletes[0][0]] += 50;
      if (sortingAthletes[1]) score[sortingAthletes[1][0]] += 25;
      if (sortingAthletes[2]) score[sortingAthletes[2][0]] += 10;
      console.log("Updating Scores:", score);
      callback(score); 
    }, 3000);
  }
  
  function LongJump(score, callback) {
    console.log("Long Jump starting...");
    setTimeout(function() {
      let colors = ["red", "blue", "green", "yellow", "orange"];
      let randomColor = colors[Math.floor(Math.random() * colors.length)];
      console.log(`Long Jump completed! Randomly selected color: ${randomColor}`);
      callback(score);
    }, 2000);
  }
  

  function HighJump(score, callback) {
    console.log("High Jump starting...");
    setTimeout(function() {
      let highestColor = prompt("Which color had the highest jump? (red, blue, green, yellow)").toLowerCase();
      if (highestColor in score) {
        score[highestColor] += 5;
        console.log(`High Jump completed! ${highestColor} awarded 5 points. Total: ${score[highestColor]} points.`);
      } else {
        console.log("Invalid input or no input. No points awarded.");
      }
      callback(score); 
    }, 3000);
  }
  
  function AwardCeremony(score) {
    console.log("Award Ceremony starting...");
    console.log("Final Scores:");
    for (let player in score) {
      console.log(`${player}: ${score[player]} points`);
    }
  
    let sortedParticipants = Object.keys(score).sort((a, b) => score[b] - score[a]);
    if (sortedParticipants.length > 0) {
      console.log(`1st Place: ${sortedParticipants[0]} with ${score[sortedParticipants[0]]} points`);
    }
    if (sortedParticipants.length > 1) {
      console.log(`2nd Place: ${sortedParticipants[1]} with ${score[sortedParticipants[1]]} points`);
    }
    if (sortedParticipants.length > 2) {
      console.log(`3rd Place: ${sortedParticipants[2]} with ${score[sortedParticipants[2]]} points`);
    }
  
    console.log("Congratulations to all participants!");
  }
  
  OpeningCeremony(function(score) {
    RACE100M(score, function(score) {
      LongJump(score, function(score) {
        HighJump(score, function(score) {
          AwardCeremony(score);
        });
      });
    });
  });