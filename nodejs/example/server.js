const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const _path = path.join(__dirname, './dist');
app.use(express.static(_path));
app.listen(port, ()=>console.log('포트번호: '+port+'. 예제 서버가 시작됩니다.'));