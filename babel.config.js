module.exports = {
    ignore: ['src/**/*.spec.js'],
    env: {
        'test': {
            presets: [
                ['@babel/preset-env', {
                    modules: 'cjs'
                }]
            ]
        },
        'cjs': {
            presets: [
                ['@babel/preset-env', {
                    modules: 'cjs'
                }]
            ]
        },
        'esm': {
            presets: [
                ['@babel/preset-env', {
                    modules: false,
                    targets: {
                        esmodules: true
                    }
                }]
            ]
        }
    }
}
