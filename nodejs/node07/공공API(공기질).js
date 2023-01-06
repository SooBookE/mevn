const request = require('request')

const url = process.env.Aurl

request(url, (e, res, body) => {
  const rst = JSON.parse(body)
  const _ = rst
  console.log(_)
  const __ = rst.getAirQualityInfoClassifiedByStation.body.items.item[3]
  console.log(
    `${__.site}의\n일산화탄소:${__.co}\n오존:${__.o3}\n초미세먼지:${__.pm25}\n미세먼지:${__.pm10}`
  )
})
