const express = require('express')
const CategoryRoute = require('./routes/CategoryRoute')

const app = express()
const port = 3000

app.use(express.json())

app.use('/api/categories', CategoryRoute)

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})
