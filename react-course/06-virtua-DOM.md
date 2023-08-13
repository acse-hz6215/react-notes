# 虚拟 DOM

示例：[../script/06-virtual-DOM](../script/06-virtual-DOM.html)

## React 中的虚拟 DOM

在 React 中我们操作的元素被称为 React 元素，而不是原生 DOM 元素

> **React 元素**：它们是我们在 React 中直接操作的元素
>
> **原生 DOM 元素**：这是在浏览器中真实存在的元素

React 通过虚拟 DOM 将 React 元素映射到原生 DOM 上，虽然操作的是 React 元素，但最终都会在真实 DOM 上体现出来（呈现在页面上）

虚拟 DOM 的好处：

- 降低 API 的使用难度
- 解决兼容性问题
- 提升渲染性能（减少不必要的 DOM 操作）

React 渲染机制：每次调用 `root.render()`，页面都会重新渲染。React 会使用**diffing 算法**来比较新的元素和旧的元素，只更新发生变化的部分，保持其他部分不变

## 详解 Diffing 算法的工作原理

React 的 Diffing 算法是其核心，用于在重新渲染时确定哪些部分需要在 DOM 中更新

### 父元素的比较

如果比较的父元素不同，React 会直接替换所有子元素；如果父元素一致，再去逐个比较子元素，直到找到所有发生变化的元素为止

### 子元素的比较

1. **完全相同的子元素**：例如，两次渲染之间没有任何变化

   - 旧数据： `['Coffee', 'Milk', 'Tea']`
   - 新数据： `['Coffee', 'Milk', 'Tea']`
   - 结果：由于两次数据完全一致，没有任何 DOM 对象被修改

2. **部分变化的子元素**：例如，只有某一部分发生了变化

   - 旧数据： `['Coffee', 'Milk', 'Tea']`
   - 新数据： `['Tom', 'Milk', 'Tea']`
   - 结果：只有第一个元素发生变化，因此只有第一个 DOM 元素会被修改

3. **添加新的子元素**：例如，列表末尾添加了新的元素

   - 旧数据： `['Coffee', 'Milk', 'Tea']`
   - 新数据： `['Coffee', 'Milk', 'Tea', 'Tom']`
   - 结果：新元素被添加到列表的末尾，其他元素保持不变

4. **插入新的子元素到列表开头**：可能导致性能问题
   - 旧数据： `['Coffee', 'Milk', 'Tea']`
   - 新数据： `['Tom', 'Coffee', 'Milk', 'Tea']`
   - 结果：由于新元素被插入到了列表开头，所有其他元素的位置都改变了，导致整个列表都需要重新渲染

### 设置 key 属性来优化 Diffing 算法

设置`key`属性可以帮助 React 更有效地识别哪些项已经改变、添加或删除

- **设置唯一的 key**：
  - key 的作用相当于给每个元素打上标签，React 可以通过 key 来识别哪些元素发生了变化，而不是通过顺序来比较
  - 在渲染一个列表时，通常会给列表项设置一个唯一的 key 来避免上述问题 （这个 key 在当前列表中是唯一的即可，不需要全局唯一）
  - 注意：
    - 1. 开发中一般采用数据中的 id 作为 key
    - 2. 避免使用数组 index 作为 key，因为它可能会在数据重新排序时发生变化

```js
const data = ["Coffee", "Milk", "Tea"];
const list = (
  <ul>
    {data.map((item, index) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);

/* 旧数据（使用数据作为key）：
 * <ul>
 *   <li key="Coffee">Coffee</li>
 *   <li key="Milk">Milk</li>
 *   <li key="Tea">Tea</li>
 * </ul>
 *
 * 新数据（使用数据作为key）：
 * <ul>
 *   <li key='Tom'>Tom</li>
 *   <li key='Coffee'>Coffee</li>
 *   <li key='Milk'>Milk</li>
 *   <li key='Tea'>Tea</li>
 * </ul>
 *
 * 结果：只更新了第一个元素，其他元素保持不变
 */
```
