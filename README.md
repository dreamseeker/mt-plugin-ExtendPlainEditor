# ExtendPlainEditor プラグイン

Movable Type 6 のプレーンエディタに、ボタンを追加します。  

![ScreenShot](https://raw.github.com/dreamseeker/mt-plugin-ExtendPlainEditor/master/screenshot.png)

## 動作環境

動作確認は Movable Type 6.0.3 のみで行っていますが、  
システムフォルダに TinyMCE プラグインを含む Movable Type 5.2 以降で動作する予定です。

## インストール

ダウンロードしたソースを解凍後、plugins / mt-static にそれぞれアップロードしてください。

```
pathToMT/
	plugins/
		ExtendPlainEditor/
	mt-static/
		plugins/
			ExtendPlainEditor/
```

## ライセンス

Licensed under MIT Lisence:  
[http://www.opensource.org/licenses/mit-license.php](http://www.opensource.org/licenses/mit-license.php)  
[http://sourceforge.jp/projects/opensource/wiki/licenses%2FMIT_license](http://sourceforge.jp/projects/opensource/wiki/licenses%2FMIT_license)

## 謝辞

テキストエリアの選択内容を取得するにあたり  
Koji Iwasaki (@madapaja) さんの jQuery.selection プラグインを利用させていただきました。  
[https://github.com/madapaja/jquery.selection](https://github.com/madapaja/jquery.selection)
