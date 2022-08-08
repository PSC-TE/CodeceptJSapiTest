const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');

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
      endpoint: 'https://gorest.co.in/public/v2/',
      prettyPrintJson: false,
      defaultHeaders: {
        // use Bearer Authorization
        'Authorization': 'Bearer 0cbf1fe5581d59d2ced6d94b5c91227050eff309ac548ef564040f56b21ef8b6',
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      // endpoint: 'https://airportgap.dev-tester.com/api/',
      // prettyPrintJson: false,
      // defaultHeaders: {
      //   // use Bearer Authorization
      //   'Authorization': 'Bearer GpfiEJfmJ4ufouKWZxmwpcM4',
      //   'Content-Type': 'application/json',
      //   'Accept': 'application/json',
      // },
    },
    ChaiWrapper : {
      require: "codeceptjs-chai"
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