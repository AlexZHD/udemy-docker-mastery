const express = require('express');
 
const app = express();
 
app.get('/', (req, res) => {
  res.send('How are you doing, Alex');
});
 
app.listen(8079, () => {
  console.log('Listening on port 8079');
});