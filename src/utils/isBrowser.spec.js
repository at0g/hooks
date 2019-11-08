/**
 * @jest-environment jsdom
 */
import isBrowser from './isBrowser'

describe('isBrowser', () => {
    it('returns true', () => {
        expect(isBrowser()).toBe(true)
    })
})
