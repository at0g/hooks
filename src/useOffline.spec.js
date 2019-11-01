import { renderHook, act } from '@testing-library/react-hooks'
import useOffline from './useOffline'

describe('useOffline', () => {
    describe('fallback values', () => {
        it('returns false by default', () => {
            const { result } = renderHook(() => useOffline());
            expect(result.current).toBe(false)
        });
        it('returns the fallback value', () => {
            const fallback = true
            const { result: { current: actual } } = renderHook(() => useOffline(fallback));
            expect(actual).toBe(fallback)
        });
    });

    describe('navigator.onLine: false', () => {
        beforeAll(() => {
            jest.spyOn(navigator, 'onLine', 'get').mockReturnValue(false)
        });

        afterAll(jest.restoreAllMocks)

        it('true is returned instead of the fallback', () => {
            const { result } = renderHook(() => useOffline(false));
            expect(result.current).toBe(true)
        })
    });

    describe('event listeners', () => {
        const unsubscribe = jest.fn();
        const offline = jest.fn();
        const online = jest.fn();
        let addSpy, removeSpy, hook;

        beforeAll(() => {
            addSpy = jest.spyOn(window, 'addEventListener').mockImplementation((evt, fn) => {
                if (evt === 'online') {
                    online.mockImplementation(fn)
                }
                if (evt === 'offline') {
                    offline.mockImplementation(fn)
                }
                return unsubscribe
            })

            removeSpy = jest.spyOn(window, 'removeEventListener').mockImplementation(jest.fn())
        });

        afterAll(jest.restoreAllMocks);

        const evtNames = spy => spy.mock.calls.map(([evt]) => evt);
        ['online', 'offline'].forEach((name) => {
            describe(`window.${name}`, () => {
                beforeEach(() => {
                    hook = renderHook(() => useOffline())
                });
                it('subscribes', () => {
                    expect(evtNames(addSpy)).toContain(name)
                })
                it('updates', () => {
                    act(name === 'offline' ? offline : online)
                    expect(hook.result.current).toBe(name === 'offline');
                });
                it('unsubscribes', () => {
                    act(hook.unmount)
                    expect(evtNames(removeSpy)).toContain(name)
                })
            })
        });
    });
})
