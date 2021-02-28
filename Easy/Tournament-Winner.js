/*
  There's an algorithms tournament taking place in which teams of programmers
  compete against each other to solve algorithmic problems as fast as possible.
  Teams compete in a round robin, where each team faces off against all other
  teams. Only two teams compete against each other at a time, and for each
  competition, one team is designated the home team, while the other team is the
  away team. In each competition there's always one winner and one loser; there
  are no ties. A team receives 3 points if it wins and 0 points if it loses. The
  winner of the tournament is the team that receives the most amount of points.


  Given an array of pairs representing the teams that have competed against each
  other and an array containing the results of each competition, write a
  function that returns the winner of the tournament. The input arrays are named
  

  It's guaranteed that exactly one team will win the tournament and that each
  team will compete against all other teams exactly once. It's also guaranteed
  that the tournament will always have at least two teams.

  Sample Input: 
*    competitions = [
*                    ["HTML", "C#"],
*                    ["C#", "Python"],
*                    ["Python", "HTML"],
*                   ] 
*    results= [0, 0, 1]

  Sample Output: "Python"

C# beats HTML, Python Beats C#, and Python Beats HTML.
HTML - 0 points 
C# -  3 points
Python -  6 points

*/

function tournamentWinner(competitions, results) {
  const score = {};
  let output;

  for (let indx in competitions) {
    if (!score[competitions[indx][0]] && results[indx])
      score[competitions[indx][0]] = 1;
    else if (results[indx]) score[competitions[indx][0]]++;
    if (!score[competitions[indx][1]] && !results[indx])
      score[competitions[indx][1]] = 1;
    else if (!results[indx]) score[competitions[indx][1]]++;
  }

  for (let key in score) {
    if (output === undefined) output = key;
    else if (score[key] > score[output]) output = key;
  }

  return output;
}

console.log(
  tournamentWinner(
    [
      ["HTML", "C#"],
      ["C#", "Python"],
      ["Python", "HTML"],
    ],
    [0, 0, 1]
  )
); // "Python"

console.log(
  tournamentWinner(
    [
      ["HTML", "Java"],
      ["Java", "Python"],
      ["Python", "HTML"],
    ],
    [0, 1, 1]
  )
); // "Java"
