const Photo = require('./p346_CRUD_ori.js')
// const { mongoose ,Photo } = require('./p346_CRUD_ori.js')

// Read
const main = async () => {
  const t = await Photo.findOne(
    {
      title: {
        $eq: '큰돌'
      },
      url: {
        $eq: 'jhc9639@naver.com'
      }
    },
    { title: 1, _id: 0 }
    // id는 기본으로 나오므로 0으로 해줘야 안 나오고, 나머지는
    // 뽑고 싶은 요소만 1이라고 적으면 된다.
  ).lean()
  // .lean() 자바스크립트 객체를 빨리 반환해준다.
  console.log(t)
}
main()
/* 
[ 비교연산자 ]
eq, ne, gt, gte, lt, lte ( 같다, 같지 않다, 크다, 크거나 같다, 작다, 작거나 같다 )
in, nin ( 지정 값이 있다, 지정 값이 없다 )
[ 논리연산자 ]
and, not, or, nor ( 모두 다 참, 불일치, 그 중에 하나라도 참, 그 중에 하나라도 거짓 )
*/
