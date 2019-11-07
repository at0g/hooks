import { useCallback, useEffect, useState } from 'react'

export default function useMedia(query, fallback) {
    const [state, setState] = useState(!!fallback)
    const listener = useCallback(
        (e) => {
            setState(e.matches)
        },
        [setState]
    )

    useEffect(() => {
        if (typeof window.matchMedia !== 'function') {
            return () => {}
        }

        const mql = window.matchMedia(query)
        mql.addListener(listener)
        setState(mql.matches)
        return () => {
            mql.removeListener(listener)
        }
    }, [query, setState, listener])

    return state
}
