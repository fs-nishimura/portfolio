# namplate

## Feature
- webpack & gulp : react(jsx)も対応
- ES2015
- JS/CSSの圧縮とファイルの結合
- BrowserSync

## Dependence
* [NodeJS](https://nodejs.org/) v6.3.0
* [Gulp](http://gulpjs.com/) 3.9.0

## 構成

```
package.json - npmパッケージ設定ファイル
gulpfile.babel.js - gulpファイル

/dest - flabo用
┣ /assets - PC or PC&SP共通アセット
	┗ /js/common.js PC&SP共通JS
	┗ /js/library/ PC&SP共通　ライブラリJS
┗/assets-sp - SP専用アセット
	┗ /common.js SP専用JS
	/dest - テストソース
/production - 本番用
/src - 開発用フォルダ
  ┣ /_config - /js からよむ
  ┣ /js_comcompressed - BabeったJSが出力される。Compressして/assets/js/に出力。
  ┗  /sass - ここからコンパイル

```

## コーディングルール

こんぽ〜ねんと志向
- CSS：SMACSS  
https://app.codegrid.net/entry/smacss-1#toc-0  
http://qiita.com/matsui-a/items/9b9188904d160a3ec223
 - JS

## Get Started

### node4以上必須
```
nvm use xxx
```
でバージョンを切り替えましょう

### ファイル監視の実行 & サーバー起動

以下のコマンドを実行するとブラウザで開発中のページが開きます。この状態でCSSやJSを修正するとユニットテストやLintも同時に実行され、ブラウザが自動的に更新されます。

```
# ディレクトリを監視(src) 
本番用ソース生成
```
gulp release
```
テスト用ソース生成
```
gulp
```


## Other documentation

- [Babel](https://babeljs.io/)
- [EJS](http://www.embeddedjs.com/)
- [ESLint](http://eslint.org/)
- [FrontNote](http://frontainer.com/frontnote/)
- [HTMLHint](http://htmlhint.com/)
- [SASS](http://sass-lang.com/)
- [webpack](http://webpack.github.io/)
- [JSHint](http://jshint.com/)
- [Mocha](http://mochajs.org/)
- [PowerAssert](https://github.com/power-assert-js/power-assert)
- [Sinon](http://sinonjs.org/)

## License

The MIT License (MIT)

Copyright (c) 2016 Naoko Nishimura

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
