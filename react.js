module.exports = {
    env: {
        browser: true, // we are targeting browser environments
        es6: true, // we use es6
    },
    extends: 'plugin:react/recommended',
    plugins: [
        'react',
    ],
    settings: {
        react: {
            version: 'detect',
        },
    },
    rules: {
        // react
        'react/jsx-uses-vars': 2, // indicate that react will use vars, this will prevent vars being marked unused while they are being used by react/JSX
        'react/no-unescaped-entities': ['error'],
        'react/jsx-key': ['error'],
        'react/jsx-no-undef': ['error'],
        'react/display-name': ['error'],
        'react/no-string-refs': ['error'],
        'react/no-find-dom-node': ['error'],
        'react/jsx-boolean-value': ['error', 'always'],
        'react/jsx-filename-extension': ['error'],
        'react/button-has-type': ['error'], // Forbid "button" element without an explicit "type" attribute
        'react/no-redundant-should-component-update': ['error'],
        'react/prefer-es6-class': ['error', 'always'], // Enforce ES5 or ES6 class for React Components
        'react/no-render-return-value': ['error'], // Prevent usage of the return value of React.render
        'react/no-typos': ['error'], //: Prevent common casing typos
        'react/no-this-in-sfc': ['error'], // Prevent using this in stateless functional components
        'react/no-unused-prop-types': ['error'], // Prevent definitions of unused prop types
        'react/style-prop-object': ['error'], // Enforce style prop value being an object
        'react/jsx-pascal-case': ['error', { allowAllCaps: true }], // Enforce PascalCase for user-defined JSX components
        'react/no-will-update-set-state': ['error'], // Prevent usage of setState in componentWillUpdate

        // react
        'react/jsx-no-target-blank': 'off', // we don't have user content that can generate links at the moment and most of the errors will be us referring to our own pages
        'react/prop-types': 'off', // keep this disabled as we have too many of these and switching to typescript will fix this

        // temporary disabled checks
        'react/no-multi-comp': 'off', // we should enable this at some point
        'react/no-unsafe': 'off', // we should enable this after we refactor our stuff
        'react/require-optimization': 'off', // Enforce React components to have a shouldComponentUpdate method // do this when we want to optimize for speed
        'react/no-unused-state': 'off', // Prevent definitions of unused state properties // maybe later to risky right now

        // remarked checks
        // 'react/jsx-no-bind': [                       // this check will flag too many items that would need some redesign to fix, it has no option for ignoring bind with additional attributes
        //     'error',
        //     { ignoreRefs: true, allowArrowFunctions: true, ignoreDOMComponents: true },
        // ],
    },
};
