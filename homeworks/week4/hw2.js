const request = require('request')

const action = process.argv[2]

if (action === 'list') {
  listBooks()
} else if (action === 'read') {
  readBooks(process.argv[3])
} else if (action === 'delete') {
  deleteBooks(process.argv[3])
} else if (action === 'create') {
  createBooks()
} else if (action === 'udate') {
  udateBooks(process.argv[3], process.argv[4])
} else {
  console.log('unknown action')
}

function listBooks() {
  request('https://lidemy-book-store.herokuapp.com/books',
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
        console.log(`${bookData[i].id}${bookData[i].name}`)
      }
    }
  )
}

function readBooks(id) {
  request(`https://lidemy-book-store.herokuapp.com/books/${id}`,
    (error, response, body) => {
      if (error) {
        console.log('error', error)
        return
      }

      let book
      try {
        book = JSON.parse(body)
      } catch (err) {
        console.log(err)
        return
      }
      console.log(book)
    }
  )
}

function deleteBooks(id) {
  request.delete(`https://lidemy-book-store.herokuapp.com/books/${id}`,
    (error, response, body) => {
      if (error) {
        console.log('error', error)
        return
      }

      let book
      try {
        book = JSON.parse(body)
      } catch (err) {
        console.log(err)
        return
      }
      console.log(book)
    }
  )
}

function createBooks(name) {
  request.post(
    {
      url: 'https://lidemy-book-store.herokuapp.com/books/',
      form: { name }
    },
    (error, response, body) => {
      if (error) {
        return console.log('error', error)
      }
      console.log('create success')
    }
  )
}

function udateBooks(id, newName) {
  request.patch(
    {
      url: `https://lidemy-book-store.herokuapp.com/books/${id}`,
      form: { name: newName }
    },
    (error, response, body) => {
      if (error) {
        return console.log('error', error)
      }
      console.log('success')
    }
  )
}
