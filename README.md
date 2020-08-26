# ESLint Config for BioRender

## Overview

* Base `"extends": "biorender"`
    * Includes eslint and prettier rules
* Cypress `"extends": "biorender/cypress"`
* Mocha `"extends": "biorender/mocha"`
* React `"extends": "biorender/react"`

## Usage

1. Install eslint `npm install --save-dev eslint`

2. Install BioRender eslint config `npm install --save-dev BioRender-Team/eslint-config-biorender#vX.Y.Z`

    * Replace `vX.Y.Z` with the latest version. (e.g. `v1.0.0`)

    * See `package.json` or run `git tag`

3. Create a script called `eslint` with the command `eslint src`

    * If you have other directories, then specify them (e.g. `eslint src test`)

4. For each source folder, create an `.eslintrc.js`.

    * For example, if you use React in the `src` folder, create `src/.eslintrc.js`
        with:

        ```js
        /* eslint-disable */
        module.exports = {
            extends: [
                'biorender',
                'biorender/react',
            ],
            parser: 'babel-eslint',
            parserOptions: {
                sourceType: 'module',
                ecmaVersion: 8,
                ecmaFeatures: {
                    jsx: true,
                },
            },
        };
        ```

        Run `npm install --save-dev babel-eslint`

    * For example, if you use Jest enable jest by adding`
        with:

        ```js
        /* eslint-disable */
        module.exports = {
            extends: [
                'biorender',
                'biorender/jest',
            ],
        };
        ```

    * If you use Cypress in the `cypress` folder, create `cypress/.eslintrc.js`
        with:

        ```js
        /* eslint-disable */
        module.exports = {
            extends: [
                'biorender',
                'biorender/cypress',
            ],
        };
        ```

## Modifying this package

1. Write your changes and commit to git

2. `npm version major`, `npm version minor`, or `npm version patch` based on the nature of changes

3. `git push --tags origin master`

4. Upgrade the usage of this package to the latest version in other projects
