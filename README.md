# hooks for react

![dependencies](https://img.shields.io/david/peer/at0g/hooks)
![dev dependencies](https://img.shields.io/david/dev/at0g/hooks)

### installation

```
npm i -S @at0g/hooks
```

### usage

```
import React from 'react'
import { useOffline } from '@at0g/hooks'

export default () => {
    const fallbackValue = false
    const offline = useOffline(fallbackValue)

    return <>{offline && 'Offline'}</>
}
```
