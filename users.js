"use strict";function _instanceof(e,t){return null!=t&&"undefined"!=typeof Symbol&&t[Symbol.hasInstance]?!!t[Symbol.hasInstance](e):e instanceof t}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,t){if(!_instanceof(e,t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?_assertThisInitialized(e):t}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Users=function(e){function t(){var e,n;_classCallCheck(this,t);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return _defineProperty(_assertThisInitialized(n=_possibleConstructorReturn(this,(e=_getPrototypeOf(t)).call.apply(e,[this].concat(o)))),"state",{items:[],isLoaded:!1}),_defineProperty(_assertThisInitialized(n),"render",function(){return n.state.isLoaded?React.createElement("div",{style:{padding:20}},React.createElement("h1",{style:{textAlign:"center"}},"Users"),React.createElement("ul",null,n.state.items.map(function(e){return React.createElement("li",{key:e.id},e.name," | ",e.email," ||| lives in ",e.address.street,","," ",e.address.suite," (",e.address.city,"), his/her phone number is ",e.phone," and works in ",React.createElement("strong",null,e.company.name),".")}))):React.createElement("div",null,"Loading...")}),n}return _inherits(t,React.Component),_createClass(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){e.setState({isLoaded:!0,items:t})})}}]),t}();ReactDOM.render(React.createElement(Users,null),document.getElementById("users"));
