const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
require('dotenv').config();

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

exports.config = {
  tests: './test/*_test.js',
  output: './output',
  helpers: {
    REST: {
      timeout: 100000,
      endpoint: process.env.goRest_URL,
      prettyPrintJson: false,
      defaultHeaders: {
        // use Bearer Authorization
        'Authorization': process.env.goRest_TOKEN,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
   
      // endpoint: process.env.airport_URL,
      // prettyPrintJson: false,
      
      // defaultHeaders: {
      //   // use Bearer Authorization
      //   'Authorization': process.env.airport_TOKEN,
      //   'Content-Type': 'application/json',
      //   'Accept': 'application/json',
        
      // },
      
    },
    ChaiWrapper : {
      require: "codeceptjs-chai"
    },
    Mochawesome: {
      uniqueScreenshotNames: true
    },
    JSONResponse: {}
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'codeceptjsAPITesting'
}