// 순위. 챔피언이름. 벤픽률. 승률 20개 가져오기.
const axios = require('axios')
const cheerio = require('cheerio')

const url = 'https://lol.inven.co.kr/dataninfo/match/champTotal.php'

axios.get(url).then((res) => {
  let rank = [],
    name = [],
    ban_per = [],
    win_rate = []
  let $ = cheerio.load(res.data)
  const regex = /[^0-9^.]/g
  $('.listTable>#lolMatchTable>tbody>tr>td:nth-of-type(10)').each(function (_) {
    name.push($(this).text().replace(regex, '') * 1)
  })
  const result = name.sort((a, b) => b - a).splice(0, 20)
  // name.sort((a, b) => a - b)
  // $('.rank').each(function (_) {
  //   rank.push($(this).text())
  // })
  // $('.listTable>#lolMatchTable>tbody>tr>.left').each(function (_) {
  //   name.push($(this).text())
  // })
  // $('#lolMatchTable>tbody>tr>td:nth-of-type(10)').each(function (_) {
  //   ban_per.push($(this).text())
  // })
  // $('tr>td:last-child').each(function (_) {
  //   win_rate.push($(this).text())
  // })
  // console.log(rank)
  // console.log(name.sort((a, b) => b - a))
  console.log(result)
  // console.log(ban_per)
  // console.log(win_rate)
})
