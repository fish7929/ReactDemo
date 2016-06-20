/*文件名称: helloworld.js
 *
 * 创 建 人: fishYu
 * 创建日期: 2016/6/20 23:16
 * 描    述: react 入口
 */
var React = require('react');
var HelloWorld = React.createClass({
    render : function(){
        return (<div className="Logo">Hello World</div>);
    }
});
module.exports = HelloWorld;