# JSX Syntax & Usage
示例代码：[../script/04-JSX-basics-p2.html](../script/04-JSX-basics-p2.html)

![text](./image/04-JSX-example.png)

## JSX 规范

1. JSX 不是字符串，不要加引号
2. JSX 的 HTML 标签名必须小写，大写会被认为是 React 组件
   1. 例如 `<div>` 是 HTML 标签，`<Div>` 是 React 组件
3. 标签：

   1. JSX 中有且只有一个根标签

   ```js
   // 错误示例
    const element = (
      <h1>Hello</h1>
      <h2>World</h2>
    );

    // 正确示例
    const element = (
      <div>
        <h1>Hello</h1>
        <h2>World</h2>
      </div>
    );
   ```

   2. 自结束的标签必须以 `/` 结尾。例如

   ```html
   <input type="text" />
   ```

4. JSX 中可以使用 JavaScript 表达式，但必须写在 `{ }` 中，例如：

   ```js
   const user = {
     name: "Tom",
     age: 18,
   }; // 表达式

   <h1>Hello, {user.name}!</h1>;
   ```

   > 表达式 = 最终会返回一个值的语句，如 {a + b} 或 {user.firstName}。JS 语句，如 if 和 for，不能直接在 { } 中使用，但可以在它们外部使用; 如果表达式是 null、undefined、Boolean，则不会显示

5. 属性&属性名：
   1. 在 JSX 中属性名采用驼峰命名法，例如 `className`、`htmlFor`、`onClick` 等；
   2. 属性可以直接写在标签上
      ```html
      <div className="container"></div>
      ```
   3. style 属性的值必须是一个对象
      ```js
      <div style={{ color: "red", fontSize: "20px" }}></div>
      // 注意这里用了双大括号{{}}，外层大括号表示这是一个表达式，内层大括号表示这是一个对象
      ```
6. JSX 中的注释用 `{/* ... */}` 包裹
