function populateHtml (data) {
  document.getElementById('date').innerHTML = data.startsAt.toUTCString()
  document.getElementById('location').innerHTML = data.location

  getGameId(data.startsAt)

  document.getElementById('open-file-btn').style.display = 'none'
  document.getElementById('content').style.display = 'block'
}
