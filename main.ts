// 変数の静的型付け<> 動的型付け

// Javascript
// var x = 10;  // 実行時に型を動的に決めることになる
// x = "hello"; // 文字列を代入すると型が変化する

// Typescript
var x: number = 10; // 一回型を決めるとあとから型を変更できない　変数のあとに: 型 を追記するだけ。
// x = "hello";
// 動的型付けだと大規模なプロジェクトにおいてエラーが発生しやすくなる。
// 静的型付けにすることで安全なプログラムに変更する

// 型

/*
number
string
boolean
any
 */

 var i: number;
 var i: number = 10;
 var i = 10;    // number型になる（型推論）
 

 var y; // var y: any
 y = 10;
 y = "hello";

 var results: number[]; // 数値型の配列の書き方
 results = [10, 5, 3];