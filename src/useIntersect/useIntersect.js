import { useCallback, useMemo, useEffect, useState } from 'react'
import isBrowser from '../utils/isBrowser'

const defaultOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0,
}

export default function useIntersect(options = defaultOptions) {
    const browser = isBrowser()
    const [state, setState] = useState(false)
    const [target, setTarget] = useState(null)
    const ref = useCallback(
        (domNode) => {
            if (domNode !== target) {
                setTarget(domNode)
            }
        },
        [target, setTarget]
    )

    const callback = useCallback(
        (entries) => {
            setState(entries[0].isIntersecting)
        },
        [setState]
    )
    const observer = useMemo(() => {
        if (browser) {
            return new window.IntersectionObserver(callback, options)
        }
    }, [browser, callback, options])

    useEffect(() => {
        if (target) {
            observer.observe(target)
        }
    }, [observer, target])

    return [state, ref]
}
