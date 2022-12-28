/* BTC => 다른 코인으로 바꿔 긁어와서 모듈화 해보기. */
import fetch from 'node-fetch'

const url = 'https://api.upbit.com/v1/ticker?markets=KRW-DOGE' // 도지코인

async function request(url) {
  const response = await fetch(url)
  const data = await response.json()
  return data
}
async function view() {
  const dataL = await request(url)
  console.log(`현재 도지 시세: ${dataL[0].trade_price}원`)
}
view()
