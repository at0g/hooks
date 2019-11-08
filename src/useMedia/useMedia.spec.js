import { renderHook, act } from '@testing-library/react-hooks'
import useMedia from './useMedia'

describe('useMedia', () => {
    describe('fallback', () => {
        const query = '(something: impossible)'
        it('returns false when no match is found', () => {
            const { result } = renderHook(() => useMedia(query))
            expect(result.current).toBe(false)
        })

        it('returns the fallback when no match is found', () => {
            const expected = true
            const { result } = renderHook(() => useMedia(query, expected))
            expect(result.current).toBe(expected)
        })
    })

    describe('matchMedia support', () => {
        const query = 'only print'
        const unsubscribe = jest.fn()
        const subscribe = jest.fn()
        let hook
        let mmMock
        let mql

        beforeAll(() => {
            mql = {
                addListener: subscribe,
                removeListener: unsubscribe,
                matches: true,
            }
            mmMock = jest.fn(() => mql)

            window.matchMedia = mmMock
        })

        afterAll(() => (window.matchMedia = undefined))

        beforeEach(() => {
            hook = renderHook(() => useMedia(query, false))
        })

        it('creates a MediaQueryList', () => {
            expect(mmMock).toHaveBeenCalledWith(query)
        })

        it('returns true if the query matches', () => {
            expect(hook.result.current).toBe(true)
        })

        describe('change events', () => {
            let handler
            beforeEach(() => {
                handler = subscribe.mock.calls[0][0]
            })

            it('subscribes', () => {
                expect(handler).toBeInstanceOf(Function)
            })

            it('updates on change', () => {
                const expected = false
                act(() => {
                    handler({ matches: expected })
                })
                expect(hook.result.current).toBe(expected)
            })

            it('unsubscribes', () => {
                act(hook.unmount)
                expect(unsubscribe).toHaveBeenCalledWith(handler)
            })
        })
    })
})
