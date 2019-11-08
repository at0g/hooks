/**
 * @jest-environment node
 */

import isBrowser from './isBrowser'

describe('isBrowser (node)', () => {
    it('returns true', () => {
        expect(isBrowser()).toBe(false)
    })
})
