const path = require('path')
// import { Configuration } from 'webpack'
/**
* @type {Configuration}
*/
const config = {
    entry: path.join(__dirname, '../src/index.tsx'),
    module: {
        rules: [{
            test: /\.(js|jsx|ts|tsx)$/,
            use: 'babel-loader'
        }]
    }
}

module.exports = config
