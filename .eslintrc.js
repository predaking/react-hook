module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    es2020: true,
    node: true
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 11,
    sourceType: 'module'
  },
  globals: {
    window: true,
    document: true,
    $: true,
    Jockey: true
  },
  plugins: [
    'react',
    'import',
    'compat',
    'promise',
    'standard',
    'jsx-a11y'
  ],
  rules: {
    // 文件末尾强制换行
    'eol-last': 0,
    'no-console': 0,
    'default-case': 1,
    'prefer-template': 0,
    'no-useless-return': 0,
    //禁止行末加空格
    'no-trailing-spaces': 0,
    // 使用 === 替代 ==
    'eqeqeq': [2, 'allow-null'],
    // 强制使用.号取属性
    //    参数： allowKeywords：true 使用保留字做属性名时，只能使用.方式取属性
    //                         false 使用保留字做属性名时, 只能使用[]方式取属性 e.g [2, {'allowKeywords': false}]
    //           allowPattern:  当属性名匹配提供的正则表达式时，允许使用[]方式取值,否则只能用.号取值 e.g [2, {'allowPattern': '^[a-z]+(_[a-z]+)+$'}]
    'dot-notation': [2, {'allowKeywords': false}],
    // 方法表达式是否需要命名
    'func-names': 0,
    // 对于JSX属性值总是使用双引号('), 其他均使用单引号(')
    'jsx-quotes': 2,
    // 不要在自动关闭的标签前加多个空格
    'no-multi-spaces': 2,
    // JSX属性名使用骆驼式风格，符合规范也校验错误，暂时关闭
    'camelCase': 0,
    // 使用箭头函数作为回调函数
    'prefer-arrow-callback': 0,
    'indent': 0,
    'object-shorthand': 0,
    'arrow-parens': 0,
    'class-methods-use-this': 0,
    'compat/compat': 2,
    'comma-dangle': 0,
    'consistent-return': 2,
    'generator-star-spacing': [0],
    'new-cap': 0,
    // 箭头函数中，如果函数体里只有一句代码时可以省略大括号
    // 规定是否可以省略大括号
    'arrow-body-style': 0,
    // 禁止对函数的参数重新进行无意义的赋值
    'no-param-reassign': 0,
    // 禁止隐式转换，为了消除简写的类型转换
    'no-implicit-coercion': 1,
    'no-mixed-operators': 0,
    'no-plusplus': 0,
    'no-use-before-define': 0,
    'no-nested-ternary': 0,
    'no-underscore-dangle': 0,
    'no-var': 'error',
    'semi': ['error', 'always'],
    'import/no-extraneous-dependencies': ['off'],
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'import/newline-after-import': 0,
    'import/no-webpack-loader-syntax': 0,
    'import/prefer-default-export': 1,
    'import/first': 0,
    'promise/param-names': 2,
    'promise/always-return': 0,
    'promise/catch-or-return': 0,
    'promise/no-native': 0,
    //禁止多余的冒号
    'no-extra-semi': 1,
    // <img> 标签总是添加 alt 属性.
    // 'jsx-a11y/img-has-alt': 1,
    // 使用有效正确的 aria role属性值 ARIA roles，https://www.w3.org/TR/wai-aria/roles#role_definitions
    'jsx-a11y/aria-role': 0,
    'jsx-a11y/no-static-element-interactions': 1,
    'react/prefer-es6-class': 0,
    'react/jsx-indent': 0,
    'react/forbid-prop-types': 0,
    'react/prop-types': 1,
    'react/prefer-stateless-function': 0,
    'react/jsx-closing-bracket-location': 1,
    // 没有子元素的标签来说总是自己关闭标签, 因为限制html已有标签，所以使用警告
    'react/self-closing-comp': 1,
    // 将多行的JSX标签写在 ()里.
    'react/jsx-wrap-multilines': 2,
    // 总是在Refs里使用回调函数
    'react/no-string-refs': 2,
    // 如果属性值为 true, 可以直接省略
    'react/jsx-boolean-value': 2,
    // 在自动关闭的标签前加一个空格
    'react/jsx-space-before-closing': 2,
    'react/jsx-pascal-case': 2,
    // 'react/jsx-no-bind': 2,
    // 在 render 方法中总是确保 return 返回值
    'react/require-render-return': 2,
    // 非必输项，必须要有默认值
    'react/require-default-props': 2,
    'react/display-name': 0,
    'react/jsx-indent-props': 0,
    'space-before-function-paren': 0,
    // 函数名与括号之间保留空格
    'func-call-spacing': ['error', 'never']
  }
}
