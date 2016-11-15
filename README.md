**js-starter**
==============

js-starter is a starter kit for my JavaScript projects. The goal is speed and combating JS fatigue. Included is development web server, mock API, production build pipeline with minifying, concatenating, cache busting, and more! So just clone and get coding!

Commands
-------

    npm start

This will run the development server, begin linting JS, testing, and start our MockAPI. It will generate Mock Data for our API as well.

    npm run build
If a current dist directory exists, remove it and create a new one. Then test and lint the JS. Start a local 'production' server to make sure everything works before deployment.

This command minifies the HTML, JS, and CSS and provides source mapping. Furthermore, it splits up vendor libraries into its own file vendor.js file.

    npm run share
Starts development server and provides a link to share local development with others working on the project through localtunnel.

    npm run security-check
Checks your npm packages for possible security risks.

## Structure ##
**build/** - This contains all server and mock json server schema.

**dist/** - Production ready folder

**src/** - Development folder. Contains all source code for your project.
**src/api/** - Centralized API calls. Place any API calls here. This holds our Mock API and Mock 'JSON DB' as well.
**src/index.html** - Root HTML for your project.

**.babelrc** - Configure your Babel settings.
**.editorconfig** - Configure editor agnostic settings. General code styles.
**.eslintrc.json** -  Eslint configuration.
**.travis.yml** - Continuous Integration config
**.webpack.config.dev.js** - Webpack Config for Development
**.webpack.config.production.js**- Webpack Config for Production

## Todo ##
[ ] Live Reload
[ ] Automate Deployment
