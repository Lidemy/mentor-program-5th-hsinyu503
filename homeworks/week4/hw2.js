
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


const request = require('request')

const args = process.argv
const API_ENDPOINT = 'https://lidemy-book-store.herokuapp.com'

const action = args[2]
const params = args[3]

switch (action) {
  case 'list':
    listBooks()
    break
  case 'read':
    readBook(params)
    break
  case 'delete':
    deleteBook(params)
    break
  case 'create':
    createBook(params)
    break
  case 'update':
    updateBook(params, args[4])
    break
  default:
    console.log('Available commands: list, read, delete, create and update')
}

function listBooks() {
  request(`${API_ENDPOINT}/books?_limit=20`, (error, res, body) => {
    if (error) {
      return console.log('error', error)
    }
    const data = JSON.parse(body)
    for (let i = 0; i < data.length; i += 1) {
      console.log(`${data[i].id} ${data[i].name}`)
    }
  })
}

function readBook(id) {
  request(`${API_ENDPOINT}/books/${id}`, (error, res, body) => {
    if (error) {
      return console.log('error', error)
    }
    const data = JSON.parse(body)
    console.log(data)
  })
}

function deleteBook(id) {
  request.delete(`${API_ENDPOINT}/books/${id}`, (error, res, body) => {
    if (error) {
      return console.log('error', error)
    }
    console.log('success')
  })
}

function createBook(name) {
  request.post({
    url: `${API_ENDPOINT}/books`,
    form: {
      name
    }
  }, (error, res) => {
    if (error) {
      return console.log('error', error)
    }
    console.log('success')
  })
}

function updateBook(id, name) {
  request.patch({
    url: `${API_ENDPOINT}/books/${id}`,
    form: {
      name
    }
  }, (error, res) => {
    if (error) {
      return console.log('error', error)
    }
    console.log('success')
  })
}
