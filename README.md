# SAP Cloud SDK in React

Extending the [official guide](https://sap.github.io/cloud-sdk/docs/js/guides/browser), this is a sample in-browser app trying to configure webpack to handle `node:` protocol, with `@sap-cloud-sdk/connectivity` as a simple consumption example.

## Reproducing

1. Clone the repo, `nvm use && npm i`.
1. In the default master branch, `npm start`.
    1. It will fail with:
        ```bash
        Module build failed: UnhandledSchemeError: Reading from "node:url" is not handled by plugins (Unhandled scheme).
        Webpack supports "data:" and "file:" URIs by default.
        You may need an additional plugin to handle "node:" URIs.
        ```
1. Switch to `feat/handle-node-protocol-imports` branch and `npm start`.
    1. It will be compiled and hosted successfully with `name: foobar` as display string of `toDestinationNameUrl({ destinationName: 'foobar' })`.
