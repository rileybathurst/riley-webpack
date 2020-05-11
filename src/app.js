import _ from 'lodash';
/* 
import {MDCTextField} from '@material/textfield';
import {MDCTextFieldIcon} from '@material/textfield/icon';

import {MDCRipple} from '@material/ripple/index';

const textFieldElements = [].slice.call(document.querySelectorAll('.mdc-text-field'));
textFieldElements.forEach((textFieldEl) => {
  new MDCTextField(textFieldEl);
});

const icon = new MDCTextFieldIcon(document.querySelector('.mdc-text-field-icon'));
const buttonRipple = new MDCRipple(document.querySelector('.mdc-button'));
 */

 // --------------------------------- //

// const Prism = require('prismjs');
// Im going to do this custom at the moment but it's something interesting to think about again down the road

// --------------------------------- //

import lozad from 'lozad';
const observer = lozad(); // lazy loads elements with default selector as '.lozad'
observer.observe();

// import html from './index.html'; // this was killing webpack
// but its documented here https://webpack.js.org/loaders/html-loader/#root
// so I need to get the html loader working some other 

// import txt from 'raw-loader!./index.html';
// require('./index.html');
// require('./contact.html');
// require('./prism.html');