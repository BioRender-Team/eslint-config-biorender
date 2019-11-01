module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        "prettier",
        "prettier/@typescript-eslint",
        "prettier/babel",
        "prettier/react",
    ],
    plugins: [
        'prettier',
    ],
    rules: {
        // enabled checks
        'no-cond-assign': ['error'], //	disallow assignment operators in conditional expressions
        'no-constant-condition': ['error'], //	disallow constant expressions in conditions
        'no-control-regex': ['error'], //	disallow control characters in regular expressions
        'no-debugger': ['error'], //	disallow the use of debugger
        'no-dupe-args': ['error'], //	disallow duplicate arguments in function definitions
        'no-dupe-keys': ['error'], //	disallow duplicate keys in object literals
        'no-duplicate-case': ['error'], //	disallow duplicate case labels
        'no-empty-character-class': ['error'], //	disallow empty character classes in regular expressions
        'no-empty': ['error'], //	disallow empty block statements
        'no-ex-assign': ['error'], //	disalwlow reassigning exceptions in catch clauses
        'no-extra-boolean-cast': ['error'], //	disallow unnecessary boolean casts
        'no-extra-parens': ['error', 'functions'], //	auto fixable disallow unnecessary parentheses
        'no-extra-semi': ['error'], //	auto fixable disallow unnecessary semicolons
        'no-func-assign': ['error'], //	disallow reassigning function declarations
        'no-inner-declarations': ['error'], //	disallow function or var declarations in nested blocks
        'no-invalid-regexp': ['error'], //	disallow invalid regular expression strings in RegExp constructors
        'no-irregular-whitespace': ['error'], //	disallow irregular whitespace outside of strings and comments
        'no-obj-calls': ['error'], //	disallow calling global object properties as functions
        'no-regex-spaces': ['error'], //	auto fixable disallow multiple spaces in regular expressions
        'no-sparse-arrays': ['error'], //	disallow sparse arrays
        'no-template-curly-in-string': ['error'], //	disallow template literal placeholder syntax in regular strings
        'no-unexpected-multiline': ['error'], //	disallow confusing multiline expressions
        'no-unreachable': ['error'], //	disallow unreachable code after return, throw, continue, and break statements
        'no-unsafe-finally': ['error'], //	disallow control flow statements in finally blocks
        'no-unsafe-negation': ['error'], //	auto fixable disallow negating the left operand of relational operators
        'use-isnan': ['error'], //	require calls to isNaN() when checking for NaN
        'valid-typeof': ['error'], //	enforce comparing typeof expressions against valid strings
        'accessor-pairs': ['error', { getWithoutSet: false }], //	enforce getter and setter pairs in objects
        'array-callback-return': ['error'], //	enforce return statements in callbacks of array methods
        'block-scoped-var': ['error'], //	enforce the use of variables within the scope they are defined
        curly: ['error', 'all'], //	enforce consistent brace style for all control statements
        'dot-location': ['error', 'property'], //	enforce consistent newlines before and after dots (this does not force newlines it just forces the dot '.' to be with the object or the property when newlines are used.
        'guard-for-in': ['error'], //	require for-in loops to include an if statement
        'no-caller': ['error'], //	disallow the use of arguments.caller or arguments.callee
        'no-case-declarations': ['error'], //	disallow lexical declarations in case clauses
        'no-else-return': ['error'], //	disallow else blocks after return statements in if statements
        'no-empty-function': ['error'], //	disallow empty functions
        'no-empty-pattern': ['error'], //	disallow empty destructuring patterns
        'no-eval': ['error'], //	disallow the use of eval()
        'no-extend-native': ['error'], //	disallow extending native types
        'no-extra-bind': ['error'], //	disallow unnecessary calls to .bind()
        'no-extra-label': ['error'], //	disallow unnecessary labels
        'no-fallthrough': ['error', { commentPattern: 'falls?\\s?through' }], //	disallow fallthrough of case statements
        'no-floating-decimal': ['error'], //	auto fixable disallow leading or trailing decimal points in numeric literals
        'no-global-assign': ['error'], //	disallow assignments to native objects or read-only global variables
        'no-implicit-globals': ['error'], //	disallow var and named function declarations in the global scope
        'no-implied-eval': ['error'], //	disallow the use of eval()-like methods
        'no-iterator': ['error'], //	disallow the use of the __iterator__ property
        'no-labels': ['error'], //	disallow labeled statements
        'no-lone-blocks': ['error'], //	disallow unnecessary nested blocks
        'no-loop-func': ['error'], //	disallow function declarations and expressions inside loop statements
        'no-multi-spaces': ['error'], //	auto fixable disallow multiple spaces
        'no-multi-str': ['error'], //	disallow multiline strings
        'no-new-func': ['error'], //	disallow new operators with the Function object
        'no-new-wrappers': ['error'], //	disallow new operators with the String, Number, and Boolean objects
        'no-new': ['error'], //	disallow new operators outside of assignments or comparisons
        'no-octal-escape': ['error'], //	disallow octal escape sequences in string literals
        'no-octal': ['error'], //	disallow octal literals
        'no-proto': ['error'], //	disallow the use of the __proto__ property
        'no-redeclare': ['error'], //	disallow var redeclaration
        'no-return-assign': ['error'], //	disallow assignment operators in return statements
        'no-script-url': ['error'], //	disallow javascript: urls
        'no-self-assign': ['error'], //	disallow assignments where both sides are exactly the same
        'no-self-compare': ['error'], //	disallow comparisons where both sides are exactly the same
        'no-sequences': ['error'], //	disallow comma operators
        'no-throw-literal': ['error'], //	disallow throwing literals as exceptions
        'no-unmodified-loop-condition': ['error'], //	disallow unmodified loop conditions
        'no-unused-expressions': ['error'], //	disallow unused expressions
        'no-unused-labels': ['error'], //	disallow unused labels
        'no-useless-call': ['error'], //	disallow unnecessary calls to .call() and .apply()
        'no-useless-concat': ['error'], //	disallow unnecessary concatenation of literals or template literals
        'no-useless-escape': ['error'], //	disallow unnecessary escape characters
        'no-void': ['error'], //	disallow void operators
        'no-with': ['error'], //	disallow with statements
        radix: ['error'], //	enforce the consistent use of the radix argument when using parseInt()
        'wrap-iife': ['error', 'inside'], //	require parentheses around immediate function invocations
        yoda: ['error', 'never'], //	require or disallow “Yoda” conditions
        strict: ['error'], //	auto fixable require or disallow strict mode directives
        'no-catch-shadow': ['error'], //	disallow catch clause parameters from shadowing variables in the outer scope
        'no-delete-var': ['error'], //	disallow deleting variables
        'no-label-var': ['error'], //	disallow labels that share a name with a variable
        'no-shadow-restricted-names': ['error'], //	disallow identifiers from shadowing restricted names
        'no-shadow': ['error'], //	disallow var declarations from shadowing variables in the outer scope
        'array-bracket-spacing': ['error', 'never'], //	auto fixable enforce consistent spacing inside array brackets
        'block-spacing': ['error', 'always'], //	auto fixable enforce consistent spacing inside single-line blocks
        'brace-style': ['error', '1tbs', { allowSingleLine: true }], //	enforce consistent brace style for blocks
        'comma-dangle': ['error', 'always-multiline'], //	auto fixable require or disallow trailing commas
        'comma-spacing': ['error', { before: false, after: true }], //	auto fixable enforce consistent spacing before and after commas
        'comma-style': ['error', 'last'], //	auto fixable enforce consistent comma style
        'computed-property-spacing': ['error', 'never'], //	auto fixable enforce consistent spacing inside computed property brackets
        'eol-last': ['error'], //	auto fixable enforce at least one newline at the end of files
        'func-call-spacing': ['error', 'never'], //	auto fixable require or disallow spacing between function identifiers and their invocations
        'id-match': [
            'error',
            '(^[A-Za-z_0-9]+$)|(^p_[A-Z]([a-z]+[0-9]*([A-Z][a-z0-9]*)*)$)|(^_?[a-zE]+[0-9]*([A-Z][a-z0-9]*)*$)|NaN',
        ], //	require identifiers to match a specified regular expression
        'key-spacing': ['error', { beforeColon: false, afterColon: true }], //	auto fixable enforce consistent spacing between keys and values in object literal properties
        'keyword-spacing': ['error', { before: true, after: true }], //	auto fixable enforce consistent spacing before and after keywords
        'linebreak-style': ['error', 'unix'], //	auto fixable enforce consistent linebreak style
        'max-params': ['error', { max: 10 }], //	enforce a maximum number of parameters in function definitions
        'new-parens': ['error'], //	auto fixable require parentheses when invoking a constructor with no arguments
        'no-array-constructor': ['error'], //	disallow Array constructors
        'no-continue': ['error'], //	disallow continue statements
        'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'], //	disallow mixed spaces and tabs for indentation
        'no-multiple-empty-lines': ['error', { max: 2 }], //	auto fixable disallow multiple empty lines
        'no-new-object': ['error'], //	disallow Object constructors
        'no-trailing-spaces': ['error', { skipBlankLines: true }], //	auto fixable disallow trailing whitespace at the end of lines
        'no-unneeded-ternary': ['error'], //	disallow ternary operators when simpler alternatives exist
        'no-whitespace-before-property': ['error'], //	auto fixable disallow whitespace before properties
        'object-curly-spacing': ['error', 'always'], //	auto fixable enforce consistent spacing inside braces
        'object-property-newline': ['error', { allowMultiplePropertiesPerLine: true }], //	enforce placing object properties on separate lines
        'one-var-declaration-per-line': ['error', 'initializations'], //	require or disallow newlines around var declarations
        'padded-blocks': ['error', 'never'], //	auto fixable require or disallow padding within blocks
        'quote-props': ['error', 'as-needed'], //	auto fixable require quotes around object literal property names
        quotes: ['error', 'single', { avoidEscape: true }], //	auto fixable enforce the consistent use of either backticks, double, or single quotes
        'semi-spacing': ['error', { before: false, after: true }], //	auto fixable enforce consistent spacing before and after semicolons
        semi: ['error', 'always'], //	auto fixable require or disallow semicolons instead of ASI
        'space-before-blocks': ['error', 'always'], //	auto fixable enforce consistent spacing before blocks
        'space-before-function-paren': [
            'error',
            {
                anonymous: 'never',
                named: 'never',
                asyncArrow: 'always',
            },
        ], //	auto fixable enforce consistent spacing before function definition opening parenthesis
        'space-in-parens': ['error', 'never'], //	auto fixable enforce consistent spacing inside parentheses
        'space-infix-ops': ['error', { int32Hint: true }], //	auto fixable require spacing around operators
        'space-unary-ops': ['error', { words: true, nonwords: false }], //	auto fixable enforce consistent spacing before or after unary operators
        'arrow-parens': ['error', 'always'], //	auto fixable require parentheses around arrow function arguments
        'arrow-spacing': ['error', { before: true, after: true }], //	auto fixable enforce consistent spacing before and after the arrow in arrow functions
        'constructor-super': ['error'], //	require super() calls in constructors
        'generator-star-spacing': ['error', { before: false, after: true }], //	auto fixable enforce consistent spacing around * operators in generator functions
        'no-const-assign': ['error'], //	disallow reassigning const variables
        'no-dupe-class-members': ['error'], //	disallow duplicate class members
        'no-duplicate-imports': ['error', { includeExports: true }], //	disallow duplicate module imports
        'no-new-symbol': ['error'], //	disallow new operators with the Symbol object
        'no-this-before-super': ['error'], //	disallow this/super before calling super() in constructors
        'no-useless-computed-key': ['error'], //	disallow unnecessary computed property keys in object literals
        'no-useless-rename': ['error'], //	auto fixable disallow renaming import, export, and destructured assignments to the same name
        'no-var': ['error'], //	auto fixable require let or const instead of var
        'prefer-const': ['error'], //	auto fixable require const declarations for variables that are never reassigned after declared
        'prefer-numeric-literals': ['error'], //	disallow parseInt() in favor of binary, octal, and hexadecimal literals
        'prefer-spread': ['error'], //	require spread operators instead of .apply()
        'require-yield': ['error'], //	require generator functions to contain yield
        'rest-spread-spacing': ['error', 'never'], //	auto fixable enforce spacing between rest and spread operators and their expressions
        'template-curly-spacing': ['error', 'never'], //	auto fixable require or disallow spacing around embedded expressions of template strings
        'yield-star-spacing': ['error', { before: false, after: true }], // auto fixable require or disallow spacing around the * in yield* expressions
        'prefer-template': ['error'], //	auto fixable require template literals instead of string concatenation
        'object-shorthand': ['error', 'always'], //	auto fixable require or disallow method and property shorthand syntax for object literals
        'prefer-rest-params': ['error'], //	require rest parameters instead of arguments
        'no-implicit-coercion': ['error', { boolean: false, number: true, string: false }], //	auto fixable disallow shorthand type conversions
        'no-unused-vars': ['error'], //	disallow unused variables
        'no-use-before-define': ['error', { "functions": false }], // disallow the use of variables before they are defined
        'no-undef': ['error'], //	disallow the use of undeclared variables unless mentioned in /*global */ comments
        'spaced-comment': ['error', 'always'], //	auto fixable enforce consistent spacing after the // or /* in a comment
        'arrow-body-style': ['error', 'as-needed'], //	require braces around arrow function bodies
        'consistent-this': ['error', '_this'], //	enforce consistent naming when capturing the current execution context
        'no-eq-null': ['error'], //	disallow null comparisons without type-checking operators
        'prefer-arrow-callback': ['error'], //	auto fixable require arrow functions as callbacks
        'id-length': ['error', { min: 2, exceptions: ['x', 'y', 'z', '_', 'r', 'g', 'b'] }], //	enforce minimum and maximum identifier lengths
        'vars-on-top': ['error'], //	require var declarations be placed at the top of their containing scope
        'no-alert': ['error'], //	disallow the use of alert, confirm, and prompt
        'no-div-regex': ['error'], //	disallow division operators explicitly at the beginning of regular expressions
        'jsx-quotes': ['error', 'prefer-double'], //	auto fixable enforce the consistent use of either double or single quotes in JSX attributes
        'symbol-description': ['error'], //	require symbol descriptions
        'one-var': ['error', { var: 'never', let: 'never', const: 'never' }], //	enforce variables to be declared either together or separately in functions
        'no-lonely-if': ['error'], //	disallow if statements as the only statement in else blocks
        'no-bitwise': ['error'], //	disallow bitwise operators
        'dot-notation': ['error'], //	auto fixable enforce dot notation whenever possible
        'no-path-concat': ['error'], //	disallow string concatenation with __dirname and __filename
        'no-mixed-requires': ['error'], //	disallow require calls to be mixed with regular var declarations
        'no-new-require': ['error'], //	disallow new operators with calls to require
        'handle-callback-err': ['error'], //['error'], //	require error handling in callbacks
        'no-process-exit': ['error'], //	disallow the use of process.exit()
        'no-prototype-builtins': ['error'], //	disallow calling some Object.prototype methods directly on objects
        eqeqeq: ['error'], //	require the use of === and !==

        // intentionally disabled checks
        'no-warning-comments': 'off', //	disallow specified warning terms in comments
        complexity: 'off', //	enforce a maximum cyclomatic complexity allowed in a program, leave this up to the developer
        'no-sync': 'off', //	disallow synchronous methods
        camelcase: 'off', //	enforce camelcase naming convention, we use underscores for defines or enums
        'max-depth': 'off', //	enforce a maximum depth that blocks can be nested, up to the developer
        'max-len': 'off', //	enforce a maximum line length, prettier takes care of this
        'max-lines': 'off', //	enforce a maximum number of lines per file, up to the developer
        'no-restricted-modules': 'off', //	disallow specified modules when loaded by require, we currently have no module restrictions
        'no-restricted-properties': 'off', //	disallow certain properties on certain objects, we currently have no property restrictions
        'no-ternary': 'off', //	disallow ternary operators, ternary is useful in lots of cases
        'no-inline-comments': 'off', //	disallow inline comments after code, inline comments are useful
        'id-blacklist': 'off', //	disallow specified identifiers, we currently have no blacklisted ids
        'no-underscore-dangle': 'off', //	disallow dangling underscores in identifiers, besides using lodash, we use underscores at start to indicate unused params
        'lines-around-comment': 'off', //	auto fixable require empty lines around comments, prettier  handles our formatting
        'lines-around-directive': 'off', //	require or disallow newlines around directives, prettier  handles our formatting
        'line-comment-position': 'off', //	enforce position of line comments, this is up to the developer and prettier
        'max-statements-per-line': 'off', //	enforce a maximum number of statements allowed per line, up to the developer
        'max-statements': 'off', //	enforce a maximum number of statements allowed in function blocks, up to the developer
        'multiline-ternary': 'off', //	enforce newlines between operands of ternary expressions, prettier will handle this
        'max-nested-callbacks': 'off', //	enforce a maximum depth that callbacks can be nested, up to the developer
        'sort-keys': 'off', //	requires object keys to be sorted, we don't enforce sorted keys
        'sort-vars': 'off', //	require variables within the same declaration block to be sorted, vars should be sorted how they make the most sense
        'unicode-bom': 'off', //	auto fixable require or disallow Unicode byte order mark (BOM)
        'wrap-regex': 'off', //	auto fixable require parenthesis around regex literals
        'no-restricted-imports': 'off', //	disallow specified modules when loaded by import, we don't have disallowed modules at the moment
        'no-nested-ternary': 'off', //	disallow nested ternary expressions, up to the developer
        'newline-after-var': 'off', //	require or disallow an empty line after var declarations, up to the developer
        'newline-before-return': 'off', //	auto fixable require an empty line before return statements, up to the developer
        'newline-per-chained-call': 'off', //	require a newline after each call in a method chain, prettier will handle this
        'no-tabs': 'off', //	disallow tabs in file
        'no-plusplus': 'off', //	disallow the unary operators ++ and --, why?
        'operator-linebreak': 'off', //	enforce consistent linebreak style for operators, formatting is handled by prettier
        'object-curly-newline': 'off', //	auto fixable enforce consistent line breaks inside braces, prettier will handle this
        'no-restricted-syntax': 'off', //	disallow specified syntax, we don't have restrictions
        'operator-assignment': 'off', //	require or disallow assignment operator shorthand where possible, up to the developer and context whatever makes sense
        'no-param-reassign': 'off', //	disallow reassigning function parameters, depends on the code
        'no-useless-constructor': 'off', //	disallow unnecessary constructors, we might add placeholders for constructors, so up to the developer
        'init-declarations': 'off', //	require or disallow initialization in var declarations, situation depended, don't enforce
        'no-restricted-globals': 'off', //	disallow specified global variables, we don't have restricted globals
        'global-require': 'off', //	require require() calls to be placed at top-level module scope, some requires might be conditional
        'callback-return': 'off', //	require return statements after callbacks
        'no-negated-condition': 'off', //	disallow negated conditions, in some cases negated conditions are more clear so do not enforce this
        'no-undefined': 'off', //	disallow the use of undefined as an identifier, sadly this would not allow any use of undefined, even valid once
        'no-undef-init': 'off', //	disallow initializing variables to undefined
        'func-names': 'off', //	require or disallow named function expressions, situation depended up to the developer
        'func-style': 'off', //	enforce the consistent use of either function declarations or expressions, situation depended up to the developer
        'sort-imports': 'off', //	enforce sorted import declarations within modules, probably don't need this sorted

        // conflicting with prettier
        'no-mixed-operators': 'off', // ['error'],	//	disallow mixed binary operators *** note this cannot be enabled since it conflicts with prettier and prettier has no options to prevent the conflict
        indent: 'off', // ['error', 4, { VariableDeclarator: 0, SwitchCase: 1 }], // auto fixable enforce consistent indentation *** note cannot enable this since it will conflict with prettier
        'no-confusing-arrow': 'off', // ['error', { allowParens: true }],	//	disallow arrow functions where they could be confused with comparisons *** note the brackets that eslint requires to silence this error get removed by prettier

        // conflicting with our code (might be reconsidered later)
        'new-cap': 'off', // ['error'], //	require constructor function names to begin with a capital letter *** don't enable this for now it react function components don't follow this for instance
        'no-class-assign': 'off', // ['error'], //	disallow reassigning class members *** note we re-assign classes all the time using connect or onClickOutside for instance
        'default-case': 'off', //	require default cases in switch statements. We don't always need a default action, since they could be handled outside the switch statement

        // temporary disabled checks
        'no-console': 'off', // ['error'],	//	disallow the use of console, enable this once we have a console replacement
        'no-process-env': 'off', //	disallow the use of process.env, we should make a config file for environment variables, when that is done enable this rule
        'consistent-return': 'off', //	require return statements to either always or never specify values, needs looking into, for now disable
        'no-magic-numbers': 'off', // ['error', { "ignore" : [0, 1], enforceConst: true }], //	disallow magic numbers, might revisit in future but currently there are too many

        // remarked checks
        // 'class-methods-use-this': ['error'],	        //	enforce that class methods utilize this
        // 'no-invalid-this': ['error'],			    //	disallow this keywords outside of classes or class-like objects

        'require-atomic-updates': 'off',
    },
    overrides: [{
        files: [
            '*.spec.*',
            '*.test.*',
            '*-test.*',
            'test_*',
            'spec_*',
        ],
        rules: {
            'prefer-arrow-callback': 'off',
        }
    }],
};
