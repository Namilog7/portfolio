module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    "plugin:react"
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh', "react"],
  rules: {
    'react/jsx-indent': ['error', 4], // Indentación de JSX
    'react/jsx-indent-props': ['error', 4], // Indentación de props de JSX
    'react/jsx-tag-spacing': ['error', {
      'closingSlash': "never", // No permitir espacios antes de la barra de cierre
      'beforeSelfClosing': 'always', // Siempre requerir espacios antes del autocierrre
      'afterOpening': 'never', // No permitir espacios después de la apertura
      'beforeClosing': 'never' // No permitir espacios antes del cierre
    }]
    ,
    'indent': ['error', 4],
    'semi': ['error', 'always'],
    'quotes': ['error', 'single'],
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
