import { useEffect, useMemo, useState } from 'react'

function useEvents(setState) {
    const eventListeners = useMemo(() => {
        const handles = {
            offline: () => setState(true),
            online: () => setState(false),
        }
        const noop = () => {}
        return {
            subscribe: () => {
                const listeners = ['online', 'offline'].map((type) => {
                    if (typeof window === 'undefined') {
                        return noop
                    }
                    const e = window.addEventListener(type, handles[type])
                    return () => window.removeEventListener(type, e)
                })
                return function unsubscribe() {
                    listeners.forEach((remove) => remove())
                }
            },
        }
    }, [setState])

    return eventListeners
}

export default function useOffline(fallback = false) {
    const [offline, setOffline] = useState(fallback)
    const { subscribe } = useEvents(setOffline)

    useEffect(() => {
        if (typeof navigator !== 'undefined' && navigator.onLine === false) {
            setOffline(true)
        }

        return subscribe()
    }, [subscribe, setOffline])

    return offline
}
