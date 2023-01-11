const Photo = require('./p346_CRUD_ori.js')
// const { mongoose ,Photo } = require('./p346_CRUD_ori.js')

// Create
const main = async (_) => {
  const _data = {
    albumId: 12010,
    id: 12010,
    title: '큰돌',
    url: 'jhc9639@naver.com',
    thumbnailUrl: 'https://via.placeholder.com/150/13454b'
  }
  const new_photo = new Photo(_data)
  const t = await new_photo.save()
  console.log(t)
}
main()
