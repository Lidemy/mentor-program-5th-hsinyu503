const request = require('request')


const apiUrl = 'https://api.twitch.tv/kraken/games/top'
const clientID = 'h2jm977ijn7v7s3tcetkz77e0bjuxq'

request({
  method: 'GET',
  url: apiUrl,
  headers: {
    'Client-ID': clientID,
    Accept: 'application/vnd.twitchtv.v5+json'
  }
}, (err, res, body) => {
  if (err) return console.log('err')
  const data = JSON.parse(body).top
  for (const i of data) {
    console.log(i.viewers, i.game.name)
  }
  return true

const CLIENT_ID = 'h2jm977ijn7v7s3tcetkz77e0bjuxq'
const BASE_URL = 'https://api.twitch.tv/kraken'

request({
  method: 'GET',
  url: `${BASE_URL}/games/top`,
  headers: {
    'Client-ID': CLIENT_ID,
    Accept: 'application/vnd.twitchtv.v5+json'
  }
}, (error, res, body) => {
  if (error) {
    return console.log(error)
  }

  const data = JSON.parse(body)
  const games = data.top
  for (const game of games) {
    console.log(`${game.viewers}${game.game.name}`)
  }

})
