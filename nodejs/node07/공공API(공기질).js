require('dotenv').config()

const request = require('request')

let key = process.env.pkey

const url =
  'http://apis.data.go.kr/6260000/AirQualityInfoService/getAirQualityInfoClassifiedByStation?serviceKey=' +
  key +
  '&pageNo=1&numOfRows=30&resultType=json'

request(url, (e, res, body) => {
  const rst = JSON.parse(body)
  const _ = rst
  console.log(_)
  const __ = rst.getAirQualityInfoClassifiedByStation.body.items.item[3]
  console.log(
    `${__.site}의\n일산화탄소:${__.co}\n오존:${__.o3}\n초미세먼지:${__.pm25}\n미세먼지:${__.pm10}`
  )
})
