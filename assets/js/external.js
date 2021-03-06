import * as config from './../../env.js'

export async function getGameId (date, teams) {
  return httpGet(`${getApiBaseUrl()}${date}/scoreboard.json`)
    .then(function (response) {
      if (response.games.length > 0) {
        const games = response.games.filter(game => {
          return game.vTeam.triCode === teams[0].triCode || game.vTeam.triCode === teams[1].triCode ||
            game.hTeam.triCode === teams[0].triCode || game.hTeam.triCode === teams[1].triCode
        })

        return games[0].gameId
      }
    })
}

export async function getGameData (date, gameId) {
  return httpGet(`${getApiBaseUrl()}${date}/${gameId}_boxscore.json`)
    .then(function (response) {
      return response
    })
}

export function getTeamLogo (teamId) {
  return getCdnBaseUrl() + `logos/nba/${teamId}/global/L/logo.svg`
}

function httpGet (url) {
  return new Promise((resolve, reject) => {
    const client = new XMLHttpRequest()
    client.open('GET', url)
    client.send()

    client.onreadystatechange = function () {
      if (this.readyState === this.DONE) {
        resolve(JSON.parse(this.responseText))
      }
    }
  })
}

function getApiBaseUrl () {
  return `${config.default.nba_api_base_url}/${config.default.nba_api_prefix}/`
}

function getCdnBaseUrl () {
  return `${config.default.nba_cdn_base_url}/`
}
