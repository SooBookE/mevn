var express = require('express')
require('dotenv').config()
const path = require('path')
const { Server } = require('socket.io')
const http = require('http')
const app = express()
const server = http.createServer(app)
const io = new Server(server)

const client_id = process.env.nid
const client_secret = process.env.npw

app.use('/', express.static(path.join(__dirname, '/dist')))

let txt
io.on('connection', (socket) => {
  socket.on('transL', (msg) => {
    txt = msg.text
    app.get('/', (req, res) => {
      const api_url = 'https://openapi.naver.com/v1/papago/n2mt'
      const request = require('request')
      const options = {
        url: api_url,
        headers: {
          'X-Naver-Client-Id': client_id,
          'X-Naver-Client-Secret': client_secret
        }
      }
      if (msg.type == 1) {
        options.form = { source: ko, target: en, text: txt }
      } else if (msg.type == 2) {
        options.form = { source: en, target: ko, text: txt }
      } else {
        throw new Error('잘못해써요.')
      }
      request.post(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
          // res.writeHead(200, { 'Content-Type': 'text/json;charset=utf-8' })
          //   res.end(body)
          const result = JSON.parse(body)
          // res.end(result.message.result.translatedText)
          console.log(result.message.result.translatedText)
        } else {
          res.status(response.statusCode).end()
          console.log('error = ' + response.statusCode)
        }
      })
    })
  })
})
server.listen(3000, function () {
  console.log('http://127.0.0.1:3000/ app listening on port 3000!')
})
