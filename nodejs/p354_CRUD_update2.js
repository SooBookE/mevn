const Photo = require('./p346_CRUD_ori.js')
// const { mongoose ,Photo } = require('./p346_CRUD_ori.js')

// // Update( 수정이가 최고다! )
// const main = async () => {
//   const t = await Photo.updateMany(
//     {
//       title: {
//         $in: ['이시빈', '큰돌', '이주민']
//       }
//     },
//     {
//       $push: {
//         someting: {
//           $each: [1, 2, 3]
//         }
//       }
//     },
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

/* 이 안댐. 강사님이 수정하시면 고치기로. */
const main = async () => {
  const t = await Photo.updateMany(
    { title: { $in: ['rr', '큰돌', 'zz', 'gg'] } },
    { $push: { 좌주민: { $each: [1, 2, 3] } } },
    {
      upsert: true,
      // update + insert
      multi: true,
      new: true
    }
  ).lean()
  console.log(t)
}
main()
