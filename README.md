# example-ui
This is an example UI project that pairs with example-api. It is built on Buefy
and Vue.js 2.6 (including vue-router and vuex), using Webpack 4, with Cisco
fonts and colors from momentum-ui.

## Development
### Usage
`yarn` to install dependency packages
`yarn start` to build libraries and start development environment with hot-reload
`yarn build:test` to build production files and start an express web server to test production files
`vue-devtools` to start Vue.js developer tools electron app. You will need to
install this tool globally and separately, but once it is available you can use
this command line to monitor state and DOM details of the Vue application. The
script for this will only be added to index.html in development mode.

## Production
### Installation
`./install.sh` to build and install to the /var/www/html folder