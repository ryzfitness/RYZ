document.getElementById("app").innerHTML = `
  <img class="banner" src="assets/banners/today.jpg">

  <div class="card">
    <h2>${new Date().toDateString()}</h2>
    <p><strong>Verse of the Day</strong></p>
    <p>“Those who hope in the Lord will renew their strength.” — Isaiah 40:31</p>
  </div>

  <div class="card">
    <h3>Workout of the Day</h3>
    <p>Strength x Pilates</p>
  </div>

  <div class="card">
    <h3>Encouragement</h3>
    <p>Show up with what you have today. That is enough.</p>
  </div>
`;
