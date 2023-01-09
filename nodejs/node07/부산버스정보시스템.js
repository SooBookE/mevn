// REST : 쿼리나 와일드카드 등으로 정보를 받는 방식 총괄.
// XML : HTML 같은 마크업 랭귀지.
require('dotenv').config()

const request = require('request')
const { XMLParser } = require('fast-xml-parser')
const parser = new XMLParser()

let key = process.env.pkey
let sname = encodeURI('서면역')
// 한글을 코드로 전환해야 사용할 수 있다.

const busId =
  'http://apis.data.go.kr/6260000/BusanBIMS/busStopList?serviceKey=' +
  key +
  '&numOfRows=2&bstopnm=' +
  sname

console.log('한글 인코딩 값 : ' + sname)
console.log('한글로 디코딩 값 : ' + decodeURI('%EC%84%9C%EB%A9%B4%EC%97%AD'))

let result1
let result2
request(busId, (e, res, body) => {
  const rst = body
  let _ = parser.parse(rst).response.body.items
  //   console.log(_)
  result1 = _.item[0].bstopid
  result2 = _.item[1].bstopid
})

const url1 =
  'http://apis.data.go.kr/6260000/BusanBIMS/stopArrByBstopid?serviceKey=' +
  key +
  '&bstopid=' +
  result1
const url2 =
  'http://apis.data.go.kr/6260000/BusanBIMS/stopArrByBstopid?serviceKey=' +
  key +
  '&bstopid=' +
  result2

request(url1, (e, res, body) => {
  const rst = body
  const _ = parser.parse(rst).response.body.items
  console.log(_)
})
request(url2, (e, res, body) => {
  const rst = body
  const _ = parser.parse(rst).response.body.items
  console.log(_)
})
