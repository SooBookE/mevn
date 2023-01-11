const Photo = require('./p346_CRUD_ori.js')
// const { mongoose ,Photo } = require('./p346_CRUD_ori.js')

// Read2
const main = async () => {
  const t = await Photo.findOne({
    $or: [
      {
        title: {
          $eq: '큰돌'
        }
      },
      {
        url: {
          $eq: 'zagabi@naver.com'
        }
      }
    ]
  }).lean()
  console.log(t)
}
main()
// title이 '큰돌'과 같은 요소나, url이 'zagabi....'와 같은 요소가 있으면 출력.
