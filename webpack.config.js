const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'dist/'
    },
    module: {
        rules: [
            // {
            //     test: /\.(png|jpg|jpeg)$/,
            //     type: 'asset/resource'
            // },
            // {
            //     test: /\.(png|jpg|jpeg)$/,
            //     type: 'asset/inline'
            // }
            {
                test: /\.(png|jpg|jpeg)$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 3 * 1024 // 3 kilobytes
                    }
                }
            },
            {
                test: /\.txt/,
                type: 'asset/source'
            },
            {
                test: /\.css/,
                use: [
                    'style-loader', 'css-loader'
                ]
            }
        ]
    },
    mode: 'none'
}