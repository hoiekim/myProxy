import express from 'express'
import path from 'path'
//const express = require('express')
//const path = require('path')

const app = express()
const port: String | number = process.env.PORT || 3000
//const apiRouter = require(path.join(__dirname, '../../src/api/admin.js'))
const apiRouter = require('./api/index')
console.log('api', apiRouter)

app.use(express.json())
app.use('/api', apiRouter)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '../../src/views'))

app.get('/', (req, res) => res.render('index', { message: 'Hello myProxy' }))

app.get('/admin/serviceHostKeys', (req, res) => {
  res.render('admin')
})

app.listen(port, () => console.log(`app listening on port ${port}!`))
