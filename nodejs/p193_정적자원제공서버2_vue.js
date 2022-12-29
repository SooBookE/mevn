/* 방법 1: 아래 사항 입력하고, package.json에서 "type": "module" 제거해준다. */
// const express = require('express')
// const path = require('path')
// const logger = require('morgan')
/* 방법 2: 아래 사항 입력하고, package.json에서 "type": "module" 입력해주고, 
const __dirname = path.resolve() 선언해준다. */
import express from 'express'
import path from 'path'
import logger from 'morgan'
const __dirname = path.resolve()

const app = express()
const port = 3000
const _path = path.join(__dirname, './p193')
console.log(_path)

app.use('/', express.static(_path))
app.use(logger('tiny'))

app.listen(port, () => {
  console.log(port + ' 로 연결되었습니다.')
})

/* 주멘님의 사랑... 근데 실행 안댐 */

// http://ds1234.iptime.org:7901/
