/** FOR: Use on local machine to make sure production build works
    DO NOT USE FOR PRODUCTION **/

import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

/* eslint-disable no-console */

import chalk from 'chalk';

const port = 3000;

const app = express();

//gzip compression
app.use(compression());

app.use(express.static('dist'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/users', function(req, res) {
  //Mock Data
  res.json([
    {"id":1,"firstName":"Arthas","lastName":"Menethil","email":"arthas@corrupt.net"},
    {"id":2,"firstName":"Illidan","lastName":"Stormrage","email":"illidan@betrayer.com"},
    {"id":3,"firstName":"Varok","lastName":"Saurfang","email":"saurfang@cleave.org"}
  ]);
});

app.listen(port, function(err) {
  if(err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
    console.log(chalk.green("Listening on PORT " + port));
  }
});
