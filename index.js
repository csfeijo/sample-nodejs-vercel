import express from 'express'


const app = express()

app.get('/', (req, res) => {
    res.send('Funciona!')
})

const port = 3000
app.listen(port, () => {
  console.log('Example app listening at http://localhost:%s', port)
})
