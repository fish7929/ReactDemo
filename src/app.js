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
var hashHistory  = require('react-router').hashHistory ;
var IndexRoute = require('react-router').IndexRoute;
//ReactDOM.render(<HelloWorld></HelloWorld>, document.getElementById("container"));

var appRouter = (
    <Router history={hashHistory}>
        <Route title="Test" path="/" component={Logo}>
        </Route>
        <Route path="/hello" component={HelloWorld} />
    </Router>
);

ReactDOM.render(appRouter, document.getElementById("container"));


