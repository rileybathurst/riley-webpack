// Remeber to hide the imports if testing uncompressed on the site

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


// move around images so I can see thumbnails as the hero on hover
// It's kinda jerky so maybe it's too much
/* let starter = document.getElementById("starter");
let thumb1 = document.getElementById("thumb1");
let thumb2 = document.getElementById("thumb2");

thumb1.addEventListener("mouseenter", function( event ) {
  // needs to be a const to not get updated
  const holder = starter.src;

  // change the top image
  starter.setAttribute("src", thumb1.src);

  // change the bottom image to what was in top
  thumb1.setAttribute("src", holder);
});

thumb2.addEventListener("mouseenter", function( event ) {
  const holder = starter.src;
  starter.setAttribute("src", thumb2.src);
  thumb2.setAttribute("src", holder);
}); */


// Tryptych

var first = document.getElementById('first');
if (first != null) {
  // for images Im going to go back to a triptych carousel thing thats smoother and more interesting

  var intElemOffsetWidth = document.getElementById('first').offsetWidth;

  console.log('width ' + intElemOffsetWidth);
  document.getElementById('snap-scroll-container-coordinates').scrollLeft += intElemOffsetWidth;

  var snap_scroll = document.getElementById("snap-scroll-container-coordinates");

  var th1 = document.getElementById("th1");
  var th2 = document.getElementById("th2");
  var th3 = document.getElementById("th3");

  th1.addEventListener("click", event => {
    document.getElementById('snap-scroll-container-coordinates').scrollLeft += - intElemOffsetWidth*2;
    // doubling the negative always pulls us to the far left
  });


  var target = document.getElementById("target");
  var rext = target.getBoundingClientRect();

  // this is the hard one as I dont know which way to scroll
  th2.addEventListener("click", event => {
    snap_scroll.scroll(intElemOffsetWidth,0);
  });

  th3.addEventListener("click", event => {
    document.getElementById('snap-scroll-container-coordinates').scrollLeft += intElemOffsetWidth*2;
    // doubling always pulls us to the far left
  });

  var left = document.getElementById("left");
  var right = document.getElementById("right");

  // almost the same as th1 but only a single movement
  left.addEventListener("click", event => {
    document.getElementById('snap-scroll-container-coordinates').scrollLeft += - intElemOffsetWidth;
  });

  right.addEventListener("click", event => {
    document.getElementById('snap-scroll-container-coordinates').scrollLeft += intElemOffsetWidth;
    // doubling always pulls us to the far left
  });

  function sideScroll(element,direction,speed,distance,step){
    scrollAmount = 0;
    var slideTimer = setInterval(function(){
        if(direction == 'left'){
            element.scrollLeft -= step;
        } else {
            element.scrollLeft += step;
        }
        scrollAmount += step;
        if(scrollAmount >= distance){
            window.clearInterval(slideTimer);
        }
    }, speed);
  }
} // tryptych

// menu border slider
// Wordpress doesnt let you add an hr to a menu so I'll do it with JS

var menu = document.getElementById('top-menu');
if (menu != null) {
  // drop in the hr
  let hr = document.createElement('hr');
  menu.appendChild(hr);

  // when the menu is horizontal I need to know the width
  // console.log(menu.children[0].offsetWidth);
  let clicks = menu.children[0];

  let clicksStyle = window.getComputedStyle(clicks);
  let clicksRem = clicksStyle.getPropertyValue('font-size');
  console.log(clicksRem);

  // console.log(menu.children[1].offsetWidth);
  let code = menu.children[1];

  // console.log(menu.children[2].offsetWidth);
  let camera = menu.children[2];

  // on hover of element set the width of the hr to this and the margin to
  clicks.addEventListener("mouseenter", function( event ) {
    hr.style.width = clicks.offsetWidth + clicksRem*2 + 'px';
    hr.style.marginLeft = '0';
  }, false);

  code.addEventListener("mouseenter", function( event ) {
    hr.style.width = code.offsetWidth + clicksRem*2 + 'px';
    hr.style.marginLeft = clicks.offsetWidth + clicksRem*2 + 'px';
  }, false);

  camera.addEventListener("mouseenter", function( event ) {
    hr.style.width = camera.offsetWidth + 'px';
    hr.style.marginLeft = clicks.offsetWidth + code.offsetWidth + 'px';
  }, false);

} // menu


// Keep this here so I know were making the file
console.log('end of file');