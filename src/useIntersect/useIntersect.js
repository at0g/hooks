import { useCallback, useMemo, useEffect, useState } from 'react'
import isBrowser from '../utils/isBrowser'

const defaultOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0,
}

function useObserver(setState, options) {
    const browser = isBrowser()
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
    return observer
}

function useTarget() {
    const [target, setTarget] = useState(null)
    const ref = useCallback(
        (domNode) => {
            if (domNode !== target) {
                setTarget(domNode)
            }
        },
        [target, setTarget]
    )

    return [target, ref]
}

export default function useIntersect(
    options = defaultOptions,
    fallback = false
) {
    const [state, setState] = useState(fallback)
    const [target, ref] = useTarget()
    const observer = useObserver(setState, options)
    useEffect(() => {
        if (target) {
            observer.observe(target)
            return () => {
                observer.unobserve(target)
            }
        }
    }, [observer, target])

    return [state, ref]
}
