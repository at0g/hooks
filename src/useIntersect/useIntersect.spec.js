import { renderHook, act } from '@testing-library/react-hooks'
import useIntersect from './useIntersect'
import isBrowser from '../utils/isBrowser'

jest.mock('../utils/isBrowser', () => ({
    __esModule: true,
    default: jest.fn(() => true),
}))

describe('useIntersect', () => {
    describe('fallback values', () => {
        beforeAll(() => {
            isBrowser.mockReturnValue(false)
        })
        afterAll(() => {
            isBrowser.mockReturnValue(true)
        })
        ;[undefined, false, true].forEach((fallback) => {
            it(`returns ${!!fallback}`, () => {
                const hook = renderHook(() => useIntersect(undefined, fallback))
                const [state] = hook.result.current
                expect(state).toBe(!!fallback)
            })
        })
    })
})
