import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import Obj from './components/object.js';

let appear = true;
setTimeout(() => {
    if (appear) {
        ReactDOM.render( <Obj />, document.getElementById('app'));
    } 
    appear = false;
},2000);

if (!appear)  {
    ReactDOM.render( <Obj />, document.getElementById('app'));
}



