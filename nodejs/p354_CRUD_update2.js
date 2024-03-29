const Photo = require('./p346_CRUD_ori.js')
// const { mongoose ,Photo } = require('./p346_CRUD_ori.js')

// // Update( 수정이가 최고다! )
const main = async () => {
  const t = await Photo.updateMany(
    {
      title: {
        $in: ['이시빈', '큰돌', '이주민']
      }
    },
    {
      $push: {
        // 몽구스로 할 때는 스키마에 필드가 미리 준비되어 있어야 한다.
        something: {
          $each: [1, 2, 3]
        }
      }
    }
    // {
    //   upsert: true,
    //   // update + insert
    //   multi: true,
    //   new: true
    // }
  ).lean()
  console.log(t)
}
main()

/* 이 안댐. 강사님이 수정하시면 고치기로. */
/* 몽구스의 스키마 때문에 미리 필드를 만들어놓지 않으면 동작하지 않는다. */

/* mongoDB 드라이버를 이용해서 하는게 mongo 쉘을 이용해 추가해주는 것과 같은 느낌. */

// const main = async () => {
//   const t = await Photo.updateMany(
//     { title: { $in: ['rr', '큰돌', 'zz', 'gg'] } },
//     { $push: { 좌주민: { $each: [1, 2, 3] } } },
//     {
//       upsert: true,
//       // update + insert
//       multi: true,
//       new: true
//     }
//   ).lean()
//   console.log(t)
// }
// main()
