const request = require('request')

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
