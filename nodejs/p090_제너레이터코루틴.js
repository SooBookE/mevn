/* next()로 순차적으로 동작시킬 수 있다. */
const log = console.log
function* map(f, list) {
  for (const a of list) {
    yield f(a)
  }
}
const add = (a) => a + 10
const a = [1, 2, 3, 4, 5]
const customGenerator = map(add, a)
log(customGenerator.next())
log('딴짓1')
log(customGenerator.next())
log('딴짓2')
log(customGenerator.next())
log('딴짓3')
log(customGenerator.next())
log('딴짓4')
log(customGenerator.next())
log('딴짓5')
log(customGenerator.next())
log('딴짓6')
log(customGenerator.next())
