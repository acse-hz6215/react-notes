
const App = () =>
{
    const clickHandler = (event) =>
{
    event.preventDefault(); // 取消默认行为
    event.stopPropagation(); // 取消事件的冒泡

    alert('这个clickHandler取消了事件冒泡，取消了超链接的默认行为！');
}
    return <div
        onClick={() => { alert('这是div的事件，点击div会弹出'); }} /* 在div中设置事件 */

        style={{ width: 200, height: 200, margin: '100px auto', backgroundColor: '#bfa' }} /* 设置div的样式 */
    >

        <br />
        <button onClick={() => alert('这是button1，没有取消事件冒泡')}>button1</button>
        <br />
        <button onClick={clickHandler}>button2</button>
        <br />
        <a href="https://www.google.com" onClick={clickHandler}>hyperlink</a>
    </div>
};


export default App;
