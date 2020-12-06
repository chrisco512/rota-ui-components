const withTM = require('next-transpile-modules')([ 'react-syntax-highlighter', 'audiomotion-analyzer' ]); // pass the modules you would like to see transpiled

module.exports = withTM();
