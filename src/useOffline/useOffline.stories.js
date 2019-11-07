import React from 'react'
import useOffline from '.'

export default {
    title: 'useOffline',
}

export const usage = () => {
    const state = useOffline()

    return (
        <>
            <p>Go offline to see the state change</p>
            <code>
                <pre>const state = useOffline()</pre>
                <pre>{JSON.stringify({ state }, null, 2)}</pre>
            </code>
        </>
    )
}
