const request = require('request')


request('https://lidemy-book-store.herokuapp.com/books?_limit=10',
  (error, response, body) => {
    if (error) {
      console.log('error', error)
      return
    }

    let bookData
    try {
      bookData = JSON.parse(body)
    } catch (err) {
      console.log(err)
      return
    }

    for (let i = 0; i < bookData.length; i++) {
      console.log(`${bookData[i].id} ${bookData[i].name}`)
    }
  }
)

const API_ENDPOINT = 'https://lidemy-book-store.herokuapp.com'

request(`${API_ENDPOINT}/books?_limit=10`, (error, res, body) => {
  if (error) {
    return console.log('error', error)
  }
  let data
  try {
    data = JSON.parse(body)
  } catch (error) {
    console.log(error)
    return
  }
  for (let i = 0; i < data.length; i += 1) {
    console.log(`${data[i].id} ${data[i].name}`)
  }
})

