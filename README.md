# hooks for react

![CircleCI](https://img.shields.io/circleci/build/github/at0g/hooks/master)
![dependencies](https://img.shields.io/david/peer/at0g/hooks)
![dev dependencies](https://img.shields.io/david/dev/at0g/hooks)
![Snyk Vulnerabilities for GitHub Repo](https://img.shields.io/snyk/vulnerabilities/github/at0g/hooks)

[![Maintainability](https://api.codeclimate.com/v1/badges/bd5093bb7e97e2e2937f/maintainability)](https://codeclimate.com/github/at0g/hooks/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/bd5093bb7e97e2e2937f/test_coverage)](https://codeclimate.com/github/at0g/hooks/test_coverage)

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
