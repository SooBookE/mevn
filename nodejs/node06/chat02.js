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

let name, toname, content
let idInfo = {}
io.on('connection', (socket) => {
  // console.log('접속: ' + socket)
  // 이렇게 적으면 socket의 내용이 출력되지 않으므로,
  // console.log(socket)
  // 이렇게 적어서 받는 변수 목록이 콘솔로 출력되도록 하자.
  // console.log(socket.id)
  // 그 중에 id라는 요소를 꺼내오자.( 지문 같은 느낌. 새로고침 시 아이디가 계속 변경된다. )
  socket.on('chat', (msg) => {
    console.log(msg)
    // console.log('받은 내용: ' + msg.message)
    // 받을 내용
    name = msg.id
    toname = msg.toid
    content = msg.message
    idInfo[name] = socket.id
    if (!toname) {
      // 전체 메시지
      console.log(idInfo)
      io.emit('chat', msg) // 보낼 내용
    } else {
      // 특정 상대에게 보낼 메시지
      console.log(idInfo)
      io.to(idInfo[toname]).emit('chat', msg)
      io.to(idInfo[name]).emit('chat', msg)
    }
  })
})

server.listen(port, () => {
  console.log(port + '에서 서버 동작 완료.')
})
// 평소의 app.listen에서 server.listen으로 바꿔줘야 한다.
