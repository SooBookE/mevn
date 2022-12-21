module.exports.handleBook = (req,res)=>{
  console.log(req.params);
  res.send(req.params); // 주소에 입력된 parameter들을 전달한다.
}
module.exports.intro = (req,res)=>{
  res.send('우리의 Express로 만든 서버입니다!');
}