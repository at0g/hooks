import React from 'react'
import useMedia from '.'

export default {
    title: 'useMedia',
}

export const usage = () => {
    const query = '(min-width: 900px)'
    const fallback = false
    const state = useMedia(query, fallback)

    return (
        <>
            <p>Change window width to see state change</p>
            <pre>
                <code>{`
const query = '(min-width: 900px)'
const fallback = false
const state = useMedia(query, fallback)
`}</code>
            </pre>
            <pre>
                <code>{JSON.stringify({ state }, null, 2)}</code>
            </pre>
        </>
    )
}
