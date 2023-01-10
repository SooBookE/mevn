var express = require('express')
require('dotenv').config()
const app = express()
const client_id = process.env.nid
const client_secret = process.env.npw
const query = '이시빈은 네이버API를 싫어합니다.'
app.get('/', function (req, res) {
  const api_url = 'https://openapi.naver.com/v1/papago/n2mt'
  const request = require('request')
  const options = {
    url: api_url,
    form: { source: 'ko', target: 'en', text: query },
    headers: {
      'X-Naver-Client-Id': client_id,
      'X-Naver-Client-Secret': client_secret
    }
  }
  request.post(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.writeHead(200, { 'Content-Type': 'text/json;charset=utf-8' })
      //   res.end(body)
      const result = JSON.parse(body)
      res.end(result.message.result.translatedText)
    } else {
      res.status(response.statusCode).end()
      console.log('error = ' + response.statusCode)
    }
  })
})
app.listen(3000, function () {
  console.log('http://127.0.0.1:3000/ app listening on port 3000!')
})
