module.exports = {
    plugins: ['@babel/plugin-proposal-export-default-from'],
    env: {
        test: {
            presets: [
                [
                    '@babel/preset-env',
                    {
                        modules: 'cjs',
                    },
                ],
            ],
        },
        cjs: {
            presets: [
                [
                    '@babel/preset-env',
                    {
                        modules: 'cjs',
                    },
                ],
            ],
        },
        esm: {
            presets: [
                [
                    '@babel/preset-env',
                    {
                        modules: false,
                        targets: {
                            esmodules: true,
                        },
                    },
                ],
            ],
        },
    },
}
