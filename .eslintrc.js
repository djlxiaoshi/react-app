/*
 * @Author: your name
 * @Date: 2020-05-06 18:35:31
 * @LastEditTime: 2020-05-07 20:32:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-app/src/eslint.js
 */
module.exports = {
    parser:  '@typescript-eslint/parser', //定义ESLint的解析器
    extends: [
        "plugin:react/recommended",
        'plugin:@typescript-eslint/recommended',
        "prettier",
        'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
        'prettier/react',
        "plugin:prettier/recommended" // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    ],//定义文件继承的子规范
    plugins: [
        // '@typescript-eslint', // 在extends中配置了插件推荐的plugin:@typescript-eslint/recommended预设，可以不用在这里显示配置
        // "react", // 在extends中配置了插件推荐的plugin:react/recommended预设，可以不用在这里显示配置
        // "prettier" // 在extends中配置了插件推荐的plugin:prettier/recommended预设，可以不用在这里显示配置
    ],//定义了该eslint文件所依赖的插件
    env:{                          //指定代码的运行环境
        browser: true,
        node: true,
    },
    parserOptions: {        
        "ecmaVersion": 2019,
        "sourceType": 'module',
        "ecmaFeatures":{
            jsx:true  //指定ESLint可以解析JSX语法
        }
    },
    settings: {
        react: {
            version: "detect" // Tells eslint-plugin-react to automatically detect the version of React to use
        }
    },
    rules: {
        "prettier/prettier": ["error"], // 当设置了plugin:prettier/recommended 这个就可以不用显示设置了，当然如果要在这里配置，记得在plugins中添加prettier
    }                            
}
