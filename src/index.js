import React from "react";
import ReactDOM from "react-dom";
import Moment from 'moment';

var day = Moment().format('dddd');
var elem = React.createElement('div', null, "Hello world! Today: " + day);

ReactDOM.render(elem, document.getElementById('root'));