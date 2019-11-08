# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed

-   BREAKING unpkg UMD export changed from `window.hooks` to `window.uprHooks`

### Added

-   `useIntersect` hook (simple `IntersectionObserver`)
-   `isBrowser` util

### Fixed

-   code coverage for `useOffline`
-   husky and pretty-quick are now devDependencies instead of dependencies

## [0.1.0] - 2019-11-8

### Added

-   `useMedia` hook
-   @storybook/react static site as github pages

## [0.0.3] - 2019-11-02

### Fixed

-   unpkg UMD build now exports `window.hooks`

## [0.0.2] - 2019-11-02

### Added

-   UMD output for unpkg

## [0.0.1] - 2019-11-02

### Added

-   Published first version
-   `useOffline` hook
-   MIT license
