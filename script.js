function calculate() {
  let mode = document.getElementById("mode").value;
  let current = Number(document.getElementById("currentScore").value);
  let target = Number(document.getElementById("targetScore").value);
  let days = Number(document.getElementById("daysLeft").value);
  let avg = Number(document.getElementById("avgPerMatch").value);

  let result = document.getElementById("result");

  if (target <= current || days <= 0 || avg <= 0) {
    result.innerHTML = "❌ Please enter valid values";
    return;
  }

  let totalNeeded = target - current;
  let dailyGoal = totalNeeded / days;
  let matchesPerDay = dailyGoal / avg;

  result.innerHTML = `
    🔥 MODE: <b>${mode}</b><br><br>
    📊 Total Score Needed: <b>${totalNeeded}</b><br>
    📅 Days Left: <b>${days}</b><br>
    🎯 Daily Score Goal: <b>${dailyGoal.toFixed(1)}</b><br>
    🎮 Matches / Day: <b>${Math.ceil(matchesPerDay)}</b>
  `;
}
