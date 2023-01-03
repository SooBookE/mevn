const express = require('express')
const path = require('path')
const logger = require('morgan')

const app = express()
const { Server } = require('socket.io')
// PS D:\KSH\MEVN> npm i socket.io 설치 후 작성.
const http = require('http')
const server = http.createServer(app)
const io = new Server(server)
// 얘들도 추가

const port = 3000
const _path = path.join(__dirname, '/dist')

app.use('/', express.static(_path))
app.use(logger('tiny'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

io.on('connection', (so) => {
  so.on('chat', (msg) => {
    // 받을 내용
    io.emit('chat', msg) // 보낼 내용
  })
})

server.listen(port, () => {
  console.log(port + '에서 서버 동작 완료.')
})
// 평소의 app.listen에서 server.listen으로 바꿔줘야 한다.
