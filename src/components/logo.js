/*文件名称: logo.js
 *
 * 创 建 人: fishYu
 * 创建日期: 2016/6/20 21:45
 * 描    述: react 入口
 */
require('../css/logo.css');
var React = require('react');
var Logo = React.createClass({
    render : function(){
        return (<img className="Logo" src={require("../images/logo.png")}/>);
    }
});
module.exports = Logo;