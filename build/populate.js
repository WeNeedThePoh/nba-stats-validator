async function populateHtml(e){document.getElementById("date").innerHTML=e.startsAt.toUTCString(),document.getElementById("location").innerHTML=e.location,document.getElementById("host-team-name").innerHTML=e.teams.host.name,document.getElementById("host-team-tricode").innerHTML=e.teams.host.triCode,document.getElementById("visitor-team-name").innerHTML=e.teams.visitor.name,document.getElementById("visitor-team-tricode").innerHTML=e.teams.visitor.triCode,document.getElementById("host-team-points").innerHTML=e.scoreboard[e.teams.host.name].final,document.getElementById("visitor-team-points").innerHTML=e.scoreboard[e.teams.visitor.name].final,document.getElementById("open-file-btn").style.display="none",document.getElementById("content").style.display="block"}export{populateHtml as populateHtml};