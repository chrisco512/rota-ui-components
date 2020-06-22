const withTM = require('next-transpile-modules')([ 'react-syntax-highlighter' ]); // pass the modules you would like to see transpiled

module.exports = withTM();
