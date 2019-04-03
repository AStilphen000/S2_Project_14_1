"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Case Problem 1

   Author: Angelina Stilphen
   Date:   4.2.19

   Filename: na_styler.js

   Functions
   =========
   
   setStyles()
      Sets up the style sheets and the style sheet switcher.
      
   randInt(size)
      Returns a random integer from 0 up to size-1.

*/


function randInt(size) {
   return Math.floor(size*Math.random());
} 


window.addEventListener("load", setStyles);

// set up the style sheets and the style switcher 
function setStyles() {
      var styleNum = randInt(5); 

      // create a link element for the page view styles 
      var pageStyle = document.createElement("link");
      pageStyle.setAttribute("rel", "stylesheet");
      pageStyle.setAttribute("id", "fancySheet");
      pageStyle.setAttribute("href", "na_style_" + styleNum + ".css");
       // append the link element to the document head
      document.head.appendChild(pageStyle);

}