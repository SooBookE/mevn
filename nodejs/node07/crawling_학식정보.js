const axios = require('axios')
// 리퀘스트 용도 + 크롤링 도구 + etc.
const cheerio = require('cheerio')
// 선택자 용도.

const url =
  'https://www.pusan.ac.kr/kor/CMS/MenuMgr/menuListOnBuilding.do?mCode=MN202'

axios.get(url).then((res) => {
  //   console.log(res)
  //   console.log(res.data)/* HTML 느낌으로 부르기 */
  let menu = [],
    day = [],
    date = []
  let $ = cheerio.load(res.data)
  $('.menu-tit01~p').each(function (_) {
    // console.log($(this))
    // console.log($(this).text()) /* text인 애들만 뽑겠다. */
    menu.push($(this).text())
  })
  $('.day').each(function (_) {
    // console.log($(this))
    // console.log($(this).text()) /* text인 애들만 뽑겠다. */
    day.push($(this).text())
  })
  $('.date').each(function (_) {
    // console.log($(this))
    // console.log($(this).text()) /* text인 애들만 뽑겠다. */
    date.push($(this).text())
  })
  //   console.log(menu)
  //   console.log(day)
  //   console.log(date)
  for (i in menu) {
    console.log(date[i] + '(' + day[i] + ')' + '\n' + menu[i])
  }
})
