module.exports = {
    entry: { hooks: './src/index.js' },
    output: {
        path: __dirname + '/dist/umd',
        filename: '[name].js',
        globalObject: 'this',
        libraryTarget: 'umd',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            envName: 'esm',
                        },
                    },
                ],
            },
        ],
    },
    externals: {
        react: {
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react',
            amd: 'react',
        },
    },
}
