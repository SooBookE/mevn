const mongoose = require('mongoose')
const Schema = mongoose.Schema
/* 스키마 설정하기! */
const PhotoSchema = new Schema({
  albumId: Number,
  id: Number,
  title: String,
  url: String,
  thumbnailUrl: String,
  /* 몽구스는 스키마 때문에 아래의 필드를 확장해줘야 해당 필드로 업데이트가 가능하다. */
  code: Number,
  something: Array
})
/* 틀을 만들어주자! */

module.exports = mongoose.model('Photo', PhotoSchema)
// Photo 라는 이름으로 컬렉션을 만드는 것. 이름을 자동으로 복수로 만들어서 저장한다. (Photos)
// module.exports = mongoose.model('Photo', PhotoSchema, 'Photo')
// 맨 뒤의 매개변수를 넣어주면 이 이름으로 고정된다.
