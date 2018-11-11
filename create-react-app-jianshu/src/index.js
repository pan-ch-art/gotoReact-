// <App /> jsx语法需要Readct进行解析 所以这里需要引入react
import React from 'react';
import ReactDOM from 'react-dom';
// css也可以引入
import './index.css';
// import App from './TodoList/index';
// import App from './App/App';
import App from './TodoLists/index'
// 使用pwd的时候会使用这个
import * as serviceWorker from './serviceWorker';
// 程序入口
ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
