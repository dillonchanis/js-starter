import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';
import chalk from 'chalk';

const port = 3000;

const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
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
