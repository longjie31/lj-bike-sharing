/* craco.config.js */
// "start": "node scripts/start.js",
// "build": "node scripts/build.js",
// "test": "node scripts/test.js",

const CracoLessPlugin = require('craco-less');

module.exports = {
    babel: { //用来支持装饰器
        plugins: [
            ["@babel/plugin-proposal-decorators", {
                legacy: true
            }]
        ]
    },
    plugins: [{
        plugin: CracoLessPlugin,
        options: {
            lessLoaderOptions: {
                lessOptions: {
                    modifyVars: {
                        '@primary-color': '#ffc107'
                    },
                    javascriptEnabled: true,
                },
            },
        },
    }, ],
};