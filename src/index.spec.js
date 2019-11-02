import * as hooks from './index'

describe('index.js', () => {
    ;['useMedia', 'useOffline'].forEach((hook) => {
        it(`exports ${hook}`, () => {
            expect(hooks[hook]).toBeInstanceOf(Function)
        })
    })
})
