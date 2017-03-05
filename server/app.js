const express = require('express');

const app = express();

app.use(express.static('src/dist'));

app.get('/api', (req, res)=> {
  res.send("使用marked将markdown语法以及带有html标签的markdown 转换成html ！");
});

app.listen(3000, ()=> {
  console.log("Server started: http://localhost:3000")
});