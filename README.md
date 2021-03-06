## 내용 요약 

<pre>
[project-ex01]
ES6 for React 


===========================
[project-ex02]
전통적인 DOM API 기반의 APP 

npm init -y project menifest package.json

===========================
[project-ex03]
모듈 기반으로 작성해 보기

===========================
[project-ex04]
ES6 지원 모듈 연습 

===========================
[project-ex05]
ES6 지원 모듈 기반으로 작성해 보기 

1. 프로젝트 생성 및 매니페스트(package.json) 초기화 
    1-1 프로젝트 디렉토리 생성
    1-2 src, public 디렉토리 생성

2. 매니페스트(package.json) 초기화
    npm init -y

3. webpack 설치
    npm i -D webpack webpack-cli webpack-dev-server
    npx webpack -v
4. webpack 설정(webpack.config.js)
5. npm scripting
===========================
[project-ex06]
번들링

1-5 까지는 동일 

6. React Refactoring
    -- react 라이브러리 패키지 설치
        npm i -D react react-dom
    -- index.js, App.js 코드 수정

7. 번들링 
    --Babel 설치
        npm i -D @babel/core babel-loader @babel/preset-env @babel/preset-react
    --Babel-loader 설정(webpack.config.js)
    --Babel 설정(babel.config.json)


==========================================
[project-ex07] 컴포넌트 구현 & 컴포넌트 속성

1.프로젝트 생성
    1-1. 프로젝트 디렉토리 생성
    1-2. src, public 디렉토리 생성

2.매니페스트(package.json) 초기화
    $ npm init -y

3.패키지 설치
    $ npm i -D webpack webpack-cli webpack-dev-server react react-dom @babel/core babel-loader @babel/preset-env @babel/preset-react

4.webpack 설정(webpack.config.js)
-----------------------------------------
const path = require('path');
module.exports = {
    entry: path.resolve('src/index.js'),
    output: {
        path: path.resolve('public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
    devServer: {
        contentBase: path.resolve('public'),
        host: '0.0.0.0',
        port: 9999,
        inline: true,
        liveReload: true,
        hot: false,
        compress: true,
        historyApiFallback: true
    }    
}
-----------------------------------------

5. babel 설정(babel.config.json)
-----------------------------------------
{
    "presets": [["@babel/env",{
                "targets": {
                    "ie": "11",
                    "edge": "80",
                    "firefox": "73",
                    "chrome": "82",
                    "opera": "69",
                    "safari": "13"
                }
            }], "@babel/preset-react"]
}
-----------------------------------------

6. npm scripting : package.json, scripts 섹션 수정
-----------------------------------------
  "scripts": {
    "build": "npx webpack",
    "start": "npx webpack-dev-server"
  }
-----------------------------------------

7. 화면 디자인 

8. 컴포넌트 작성 + 조합 

9. 속성 

<pre>