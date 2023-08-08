- [模块化](#模块化)
  - [导出 Export](#导出-export)
  - [导入 Import](#导入-import)
  - [默认导入/导出 Default Import/Export](#默认导入导出-default-importexport)
  - [命名导入/导出 Named Import/Export](#命名导入导出-named-importexport)
  - [组合使用](#组合使用)


# 模块化
模块化意味着将代码分解成独立的、可重用的部分（模块）

ES6之前，JavaScript没有模块系统，ES6的模块化分为两个部分：export和import
- 作为一个模块，不希望模块中的所有内容暴露给外部
- 作为导入方，也不希望导入无用变量
  
## 导出 Export
用来决定模块对外暴露哪些内容，可以是变量、函数、对象等

导出分为两种方式：
  - 默认导出 Default Export 
    - >语法：export default xxx
  - 命名导出 Named Export
    - >语法：export {xxx, yyy, zzz}

## 导入 Import
导入分为两种方式：
- 默认导入 Default Import
  - >语法：import xxx from 'path'
  - 导入默认模块时变量名可以自主指定，无需和模块中的变量名一致
  - 在网页中使用时，需要将模块路径写成相对路径（以./或../开头，扩展名.js也可得写）
- 命名导入 Named Import
  - >语法：import {xxx, yyy, zzz} from 'path'
  - 导入指定的内容，变量名必须与导出的变量名完全匹配


## 默认导入/导出 Default Import/Export
 每个模块只能有一个默认导出。好处是在导入时可以为其分配任何名称，并且不需要使用大括号
 
  
可以导出函数、变量、对象等：

```js
// 创建一个变量模块 variables.js
const a = 1;
export default a; // 默认导出变量a

// 创建一个对象模块 myObject.js
const myObject = {
    name: 'John',
    age: 18,
};
export default myObject; // 默认导出对象myObject

// 创建一个函数模块 math.js
function greeting() {
    return "Hello, World!";
}
export default greeting; // 默认导出函数greeting
```
在另一个文件中导入以上模块：
```js
// app.js

import haha from './variables.js'; // 导入变量a,导入默认模块时变量名可以自主指定
import myObject from './myObject.js'; // 导入对象myObject
import greeting from './math.js'; // 导入函数greeting


console.log(haha);
 // 输出：1
console.log(myObject.name); 
// 输出：John
console.log(greeting()); 
// 输出：Hello, World!
```

## 命名导入/导出 Named Import/Export
命名导出允许我们导出多个变量、函数、对象等，需要使用大括号

创建一个变量模块 module.js:
```js
// module.js

// ----------创建变量---------------
const a = 1;
export const b = 2; // 命名导出变量b
export const c = 3; // 命名导出变量c

// ----------创建对象---------------
const myObject = {
    name: 'John',
    age: 18,
};
// ----------创建函数--------------
function greeting() {
    return "Hello, World!";
}
// ----------命名导出---------------

export{myObject,greeting}; // 命名导出对象myObject、函数greeting
```
在另一个文件中导入以上模块，名字必须与导出的变量名完全匹配：
```js
// app.js

import {b, c, myObject, greeting} from './module.js'; // 导入变量b、c、对象myObject、函数greeting

console.log(b);
// 输出：2
console.log(c);
// 输出：3
console.log(myObject.name);
// 输出：John
console.log(greeting());
// 输出：Hello, World!
```
当然也可以改名导入：
```js
// app.js
import {b as haha, c as hehe} from './variables.js'; // 导入变量b和c并改名为haha和hehe

console.log(haha);
// 输出：2
console.log(hehe);
// 输出：3
```

## 组合使用
在实际开发中，通常会将默认导出和命名导出组合使用，例如：
```js
// combined.js

// 命名导出变量a、函数greeting
export const a = 1;
export function greeting() {
    return "Hello, World!";
}

// 默认导出对象myObject
const myObject = {
    name: 'John',
    age: 18,
};
export default myObject;
```
在另一个文件中导入以上模块：
```js
// app.js

import myObject, {a, greeting} from './combined.js'; // 导入默认模块myObject、变量a、函数greeting

console.log(a);
// 输出：1
console.log(greeting());
// 输出：Hello, World!
console.log(myObject.name);
// 输出：John
```
