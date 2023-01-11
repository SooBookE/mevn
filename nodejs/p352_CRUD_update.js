const Photo = require('./p346_CRUD_ori.js')
// const { mongoose ,Photo } = require('./p346_CRUD_ori.js')

// Update( 수정이가 최고다! )
const main = async () => {
  const t = await Photo.updateMany(
    {
      title: {
        $eq: '큰돌'
      }
    },
    {
      $set: {
        // url: 'jhc9639@daum.net'
        url: 'jhc9639@naver.com'
        /* 바꿔보기 */
      }
    },
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
