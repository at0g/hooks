import React from 'react'
import useIntersect from '.'

export default {
    title: 'useIntersect',
}

export const usage = () => {
    const [state, ref] = useIntersect()

    return (
        <>
            <div
                ref={ref}
                style={{
                    display: 'flex',
                    flex: '1 0 100%',
                    flexFlow: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '50vh 0',
                    height: '90vh',
                    backgroundColor: 'tomato',
                }}
            >
                Scroll the entire box into view to see state change to true.
                <pre>
                    <code>{JSON.stringify({ state }, null, 2)}</code>
                </pre>
            </div>
        </>
    )
}
