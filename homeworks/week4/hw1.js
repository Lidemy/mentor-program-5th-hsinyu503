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
