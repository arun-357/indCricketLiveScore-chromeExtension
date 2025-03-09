const { apiKey } = require("./config.js");
document.addEventListener("DOMContentLoaded", function () {
  const scoreContainer = document.getElementById("score-container");
  const refreshBtn = document.getElementById("refresh-btn");

  function loadScores() {
    scoreContainer.innerHTML = '<div class="loading">Loading...</div>';

    fetch("https://cricket-live-line1.p.rapidapi.com/liveMatches", {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": apiKey,
        "X-RapidAPI-Host": "cricket-live-line1.p.rapidapi.com",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        scoreContainer.innerHTML = "";

        const indiaMatch = data.data.find(
          (match) =>
            match.team_a_short === "IND" || match.team_b_short === "IND"
        );

        if (indiaMatch) {
          const matchCard = document.createElement("div");
          matchCard.className = "match-card";

          const teamAScore = indiaMatch.team_a_scores || "yet to bat";
          const teamBScore = indiaMatch.team_b_scores || "yet to bat";

          matchCard.innerHTML = `
                  <div class="teams">${indiaMatch.team_a_short} VS ${indiaMatch.team_b_short}</div>
                  <div class="scores">
                      <span class="team-score">${indiaMatch.team_a_short}: ${teamAScore}</span>
                      <span class="team-score">${indiaMatch.team_b_short}: ${teamBScore}</span>
                  </div>
              `;

          scoreContainer.appendChild(matchCard);
        } else {
          const noMatchDiv = document.createElement("div");
          noMatchDiv.className = "no-match";
          noMatchDiv.textContent = "No live matches for Team India";
          scoreContainer.appendChild(noMatchDiv);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        scoreContainer.innerHTML =
          '<div class="loading">Error loading scores</div>';
      });
  }

  loadScores();
  refreshBtn.addEventListener("click", loadScores);
});
