import { useLayoutEffect, useMemo, useState } from 'react'

export default function useOffline(fallback = false) {
    const [offline, setOffline] = useState(fallback)

    if (typeof window === 'undefined') {
        return offline
    }

    const eventListeners = useMemo(() => {
        const handles = {
            offline: () => setOffline(true),
            online: () => setOffline(false),
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
    }, [setOffline])

    useLayoutEffect(() => {
        if (typeof navigator !== 'undefined' && navigator.onLine === false) {
            setOffline(true)
        }
        const removeListeners = eventListeners.listen()
        return removeListeners
    }, [eventListeners])

    return offline
}
