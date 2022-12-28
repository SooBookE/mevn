import fetch from 'node-fetch'

const url =
  'https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWUSD' // 환율 api

/* async와 await로 실행 순서를 작성 순서대로 동기화시켜준다. */
async function request(url) {
  const response = await fetch(url)
  const data = await response.json()
  return data
}
async function view() {
  const dataList = await request(url)
  console.log(dataList)
  console.log('1달러: ' + dataList[0].basePrice + '원')
}
view()
