module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'airbnb-base',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: [
		'@typescript-eslint',
	],
	ignorePatterns: ['dist', 'node_modules'],
	rules: {
		'no-useless-constructor': 'off',
		'no-tabs': 'off',
		'max-len': 'off',
		'no-plusplus': 'off',
		'no-bitwise': 'off',
		'no-param-reassign': 'off',
		'no-throw-literal': 'off',
		'no-underscore-dangle': 'off',
		'no-case-declarations': 'off',
		'no-unused-vars': 'off',
		'no-redeclare': 'off',
		'no-restricted-syntax': 'off',
		'@typescript-eslint/no-redeclare': ['error', { ignoreDeclarationMerge: true }],
		'@typescript-eslint/no-unused-vars': ['error'],
		'no-mixed-operators': 'off',
		'lines-between-class-members': 'off',
		'no-nested-ternary': 'off',
		'import/extensions': 'off',
		'import/prefer-default-export': 'off',
		indent: [
			'error',
			'tab', {
				SwitchCase: 1,
			},
		],
		'@typescript-eslint/type-annotation-spacing': [
			'error', {
				before: false,
				after: true,
				overrides: {
					arrow: {
						before: true,
						after: true,
					},
				},
			},
		],
	},
};
