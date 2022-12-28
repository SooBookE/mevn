let mp = new Map()
mp.set('사과', '딸기')
mp.set('포도', '배')
console.log(mp.get('사과')) // 딸기
console.log(mp.get('딸기')) // undefined
console.log(mp.get('포도')) // 배
console.log(mp.get('배')) // undefined
console.log(mp) // Map(2) { '사과' => '딸기', '포도' => '배' }
for (const a of mp) console.log(a) // [ '사과', '딸기' ] [ '포도', '배' ]
console.log(Symbol.iterator in mp) // true
