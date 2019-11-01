# hooks for react

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
