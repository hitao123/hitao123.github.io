(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{280:function(t,e,n){"use strict";n.r(e);var a=n(0),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h3",{attrs:{id:"react的生命周期"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#react的生命周期"}},[t._v("#")]),t._v(" react的生命周期")]),t._v(" "),n("blockquote",[n("p",[t._v("在组件的整个生命周期中，随着组件的props或者state发生改变，其DOM表现也会有相应的变化。一个组件就是一个状态机，对于特定地输入，它总返回一致的输出。一个React组件的生命周期分为三个部分：实例化、存在期和销毁时。")])]),t._v(" "),n("h4",{attrs:{id:"实例化-第一次"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#实例化-第一次"}},[t._v("#")]),t._v(" 实例化(第一次)")]),t._v(" "),n("h5",{attrs:{id:"客户端"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#客户端"}},[t._v("#")]),t._v(" 客户端")]),t._v(" "),n("div",{staticClass:"language-下列方法依次被调用 extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("  1. getDefaultProps()\n  2. getInitialState()\n  3. componentWillMount()\n  4. render()\n  5. componentDidMount() //发送ajax 或者 设定定时器\n")])])]),n("h5",{attrs:{id:"服务端"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#服务端"}},[t._v("#")]),t._v(" 服务端")]),t._v(" "),n("div",{staticClass:"language-下列方法依次被调用 extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("  1. getDefaultProps()\n  2. getInitialState()\n  3. componentWillMount()\n  4. render()\n  //5. componentDidMount() 该方法不会被调用（同构注意这一点） \n")])])]),t._v(" "),n("h4",{attrs:{id:"存在期"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#存在期"}},[t._v("#")]),t._v(" 存在期")]),t._v(" "),n("blockquote",[n("p",[t._v("此时组件已经渲染好并且用户可以与它进行交互，比如鼠标点击，或者其它的一些事件(发送请求的时候"),n("code",[t._v("dispatch()")]),t._v(")，导致应用状态的改变("),n("code",[t._v("state")]),t._v(" 或者 "),n("code",[t._v("props")]),t._v(")，下面的方法依次被调用")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("  1. componentWillReceiveProps(nextProps) \n  2. shouldComponentUpdate(nextProps, nextState) //默认true，返回 false 3-4-5 都不会被调用\n  3. componentWillUpdate(nextProps, nextState) //类似前面的componentWillMount()\n  4. render() \n  5. componentDidUpdate(prevProps, prevState) //类似componentDidMount()\n")])])]),n("h4",{attrs:{id:"销毁期"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#销毁期"}},[t._v("#")]),t._v(" 销毁期")]),t._v(" "),n("p",[n("strong",[t._v("componentWillUnmount()")])]),t._v(" "),n("blockquote",[n("p",[t._v("每当React使用完一个组件，这个组件必须从 DOM 中卸载后被销毁，此时 componentWillUnmout 会被执行，完成所有的清理和销毁工作，在 conponentDidMount 中添加的任务都需要再该方法中撤销，如创建的定时器或事件监听器。")])]),t._v(" "),n("p",[n("a",{attrs:{href:"https://facebook.github.io/react/docs/react-component.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("React LifeCycle"),n("OutboundLink")],1),t._v(" "),n("a",{attrs:{href:"https://segmentfault.com/a/1190000004168886",target:"_blank",rel:"noopener noreferrer"}},[t._v("React LifeCycle"),n("OutboundLink")],1),t._v(" "),n("img",{attrs:{src:"http://omla9ld8j.bkt.clouddn.com/IZ%28%5BWD%7BRART1EV0U%7BZ67GB6.png",alt:"React LifeCycle"}})]),t._v(" "),n("hr"),t._v(" "),n("h3",{attrs:{id:"react的几种写法区别"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#react的几种写法区别"}},[t._v("#")]),t._v(" react的几种写法区别")]),t._v(" "),n("h4",{attrs:{id:"es5-写法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#es5-写法"}},[t._v("#")]),t._v(" ES5 写法")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("  //Photo组件\n  var Photo = React.createClass({\n      getDefaultProps: function() {\n          return {\n              height: 50\n          };\n      },\n      getInitialState: function() {\n          return {\n              width: 50\n          };\n      },\n      handleClick: function() {\n\n      }, //自动绑定this scope\n      propTypes: {\n          height: React.PropTypes.number.isRequired\n      },\n      render: function() {\n          return (\n              <Image height={this.props.height} onClick={this.handleClick}/>\n          );\n      },\n  }); \n")])])]),n("h4",{attrs:{id:"es6写法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#es6写法"}},[t._v("#")]),t._v(" ES6写法")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("   //Photo组件\n   class Photo extends React.Component {\n       constructor(props) {\n           this.state = { width : 10 };\n           //this.handleClick = this.handleClick.bind(this);\n           //上面写了,这里才可以这么用 onClick={this.handleClick}\n           //这次项目里面全部是ES6 this.signClick = () => {} 定义的，\n           //并没有在构造函数里面绑定，所以运行时候没有报错\n       }\n       handleClick() {\n        //和ES5 相比较\n       }\n       render() {  // 函数名简写 \n           return (\n               <Image height={this.props.height} onClick={ () => {this.handleClick}}/>\n           );\n       }\n   }\n   Photo.defaultProps = {\n      height: 50\n   };\n   Photo.propTypes = {\n       height: React.PropTypes.number.isRequired\n   };\n\n   //ES7  \n   // static成员在IE10及之前版本不能被继承，而在IE11和其它浏览器上可以\n   class Photo extends React.Component {\n       static defaultProps = {\n           height: 50   \n       };  // 注意这里有分号\n       static propTypes = {\n           height: React.PropTypes.number.isRequired\n       };  \n       render() {  // 函数名简写 \n           return (\n               <Image height={this.props.height} />\n           );\n       }\n   }\n")])])]),n("h3",{attrs:{id:"es6-module"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#es6-module"}},[t._v("#")]),t._v(" "),n("code",[t._v("ES6 module")])]),t._v(" "),n("div",{staticClass:"language-export与export default extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("   //export class IndexList extends Component{}\n   导出\n   import { IndexList } from './index.js'\n   //export  default class IndexList extends Component{}\n   导出\n   import IndexList/anyName from './index.js'\n\n   2. import IndexList from './common'\n   这种写法会自动去寻找 common 目录下 index 文件，(后缀省略是在webpack里面配置的)\n   resolve: {\n       extensions: ['', '.js', '.jsx'], //后缀名自动补全\n   }\n")])])])])}),[],!1,null,null,null);e.default=s.exports}}]);