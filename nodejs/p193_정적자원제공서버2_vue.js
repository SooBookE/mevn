// const express = require('express')
import express from 'express'
const path = require('path')
const logger = require('morgan')

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
