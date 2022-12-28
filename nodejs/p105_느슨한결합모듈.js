const cook = {
  create: (recipe) => recipe.start()
} // 플레이그라운드 역할

const pasta = {
  start: (_) => console.log('파스타 요리가 시작됩니다.')
}
const steak = {
  start: (_) => console.log('스테이크 요리가 시작됩니다.')
}

cook.create(pasta)
cook.create(steak)
// 파스타 요리가 시작됩니다.
// 스테이크 요리가 시작됩니다.
