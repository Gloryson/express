const express = require('express');
const fs = require('fs/promises');
const { constants } = require('fs');

let app = express();


app.get('/page/:num/', async (req, res) => {
  let result = `${__dirname}/index${req.params.num}.html`;

 try {
  await fs.access(result, constants.F_OK);
  res.sendFile(result);
 } catch {
  res.status(404).send('Error')
 }

});

app.use(express.static(__dirname + '/'));

app.listen(3000, () => {
  console.log('running');
});