/*文件名称: index.js
 *
 * 创 建 人: fishYu
 * 创建日期: 2016/6/20 21:45
 * 描    述: react 入口
 */
var React = require('react');
var ReactDOM = require("react-dom");
var Logo = require("./components/logo.js");
var HelloWorld = require("./components/helloworld.js");
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var browserHistory = require('react-router').browserHistory;
//ReactDOM.render(<Logo></Logo>, document.getElementById("container"));

var appRouter = (
    <Router history={browserHistory}>
        <Route title="Test" path="/" handle={Logo}>
            <Route name="Hello World" title="hello" path="/hello" handler={HelloWorld} />
        </Route>
    </Router>
);

ReactDOM.render(appRouter, document.getElementById("container"));

