require('dotenv').config()
const TelegramBot = require('node-telegram-bot-api')
const axios = require('axios')
const cheerio = require('cheerio')

const url = 'https://comic.naver.com/webtoon/weekday'
let rank = []
let result = []
// axios.get(url).then((res) => {
//   let $ = cheerio.load(res.data)
//   $('.asideBoxRank>li>a').each(function (_) {
//     rank.push($(this).text())
//   })
//   console.log(rank)
//   for (let i = 0; i < 10; i++) {
//     result[i] += i + 1 + ' : '
//     result[i] += rank[i]
//   }
//   setInterval((_) => {
//     bot.sendMessage(-1001686288502, result.join('\n'))
//   }, 5 * 1000)
// })
// console.log(rank)

// replace the value below with the Telegram token you receive from @BotFather
const token = process.env.botid

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true })

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  const chatId = msg.chat.id
  const resp = match[1] // the captured "whatever"

  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp)
})
// bot.onText(/안녕하세요/g, (msg) => {
//   const chatId = msg.chat.id
//   bot.sendMessage(chatId, '반갑습니다.')
// })
// bot.onText('message', (msg) => {
//   const chatId = msg.chat.id
//   //   const chat = msg.chat
//   console.log(chatId)
//   //   if (chat == '안녕하세요') {
//   //     bot.sendMessage(chatId, '반갑습니다.')
//   //   } else {
//   //     bot.sendMessage(chatId, 'ㅎㅇ')
//   //   }
// })

// Listen for any kind of message. There are different kinds of
// messages.
// bot.on('message', (msg) => {
//   const chatId = msg.chat.id
//   // send a message to the chat acknowledging receipt of their message
//   //   bot.sendMessage(chatId, '무요?')
// })
bot.on('message', (msg) => {
  const chatId = msg.chat.id
  const chat = msg
  console.log(chat)
  const text = msg.text
  if (text == '반가') {
    bot.sendMessage(chatId, '워요')
  } else if (text == '이시빈?') {
    bot.sendMessage(chatId, '국가대표 인성.')
  } else if (text == '최고의 게임?') {
    bot.sendMessage(chatId, '브롤스타즈')
  } else if (text == '거르는 식당 이름?') {
    bot.sendMessage(chatId, '청년, 마약, 열정, 바른, 인생')
  } else if (text == '안녕') {
    bot.sendMessage(chatId, '하세요.')
  } else {
    bot.sendMessage(chatId, '무요?')
  }
  // send a message to the chat acknowledging receipt of their message
  //   bot.sendMessage(chatId, '무요?')
})

// setInterval((_) => {
//   bot.sendMessage(-1001686288502, '이시빈인성')
// }, 5 * 1000)
//
// 각기 다른 반응을 5가지로 if 구문으로 응답 만들기.
// 일정시간이 되면 타이머나 if로 웹크롤링이나 API로 환율정보/뉴스/버스정보/미세먼지 등의 정보를 가져오도록 하라.

setInterval(() => {
  const date = new Date()
  const curTime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
  console.log(curTime)
  if (curTime == '17:45:0') {
    bot.sendMessage(
      -1001686288502,
      '45분입니다. 이제 다들 짐 주섬주섬 챙겨주세요~'
    )
  }
}, 1 * 1000)
