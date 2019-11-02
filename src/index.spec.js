import * as hooks from './index'

describe('index.js', () => {
    it('exports useOffline', () => {
        expect(hooks.useOffline).toBeInstanceOf(Function)
    })
})
