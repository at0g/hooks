import { useLayoutEffect, useMemo, useState } from 'react'

function useEvents(setState) {
    const eventListeners = useMemo(() => {
        const handles = {
            offline: () => setState(true),
            online: () => setState(false),
        }
        return {
            listen: () => {
                const listeners = ['online', 'offline'].map((type) => {
                    const e = window.addEventListener(type, handles[type])
                    return () => window.removeEventListener(type, e)
                })

                return () => {
                    listeners.forEach((remove) => remove())
                }
            },
        }
    }, [setState])

    return eventListeners
}

export default function useOffline(fallback = false) {
    const [offline, setOffline] = useState(fallback)

    if (typeof window === 'undefined') {
        return offline
    }

    const events = useEvents(setOffline)

    useLayoutEffect(() => {
        if (typeof navigator !== 'undefined' && navigator.onLine === false) {
            setOffline(true)
        }
        return events.listen()
    }, [events])

    return offline
}
