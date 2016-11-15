/*eslint-disable no-console */
import webpack from 'webpack';
import webpackConfig from '../webpack.config.production';
import chalk from 'chalk';

process.env.NODE_ENV = 'production';

console.log(chalk.magenta('Minifying bundle for production. Please wait...'));

// return 0 = SUCCESS!
/* eslint-disable no-unused-vars */
webpack(webpackConfig).run((err, stats) => {
  if(err) {
    console.log(chalk.red(err));
    return 1;
  }



  console.log(chalk.green('Your app is ready for production in the dist directory.'));
  return 0;
});
