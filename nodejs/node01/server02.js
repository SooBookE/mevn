/* 쿼리스트링 */
const express = require('express')
const path = require('path')
const logger = require('morgan')
const app = express()
const port = 3000
const _path = path.join(__dirname, '/dist')

app.use('/', express.static(_path))
app.use(logger('tiny'))

app.get('/story', function (req, res) {
  const arr = [
    'My life is pretty',
    'Egg is Life',
    'Home, sweet Home',
    '-by Elsa(Frozen)'
  ]
  const pick = `<h2>
  <ul>
    <li><a href="/story?id=0">Pretty</a></li>
    <li><a href="/story?id=1">Egg</a></li>
    <li><a href="/story?id=2">IWannaGoHome</a></li>
    <li><a href="/story?id=3">LeaveMeAlone</a></li>
  </ul>
</h2>
<h1>${arr[req.query.id] ?? '선택하세요.'}</h1>`
  // res.send(arr[req.query.id])
  res.send(pick)
})

app.listen(port, () => {
  console.log(port + '에서 서버 동작 완료.')
})
