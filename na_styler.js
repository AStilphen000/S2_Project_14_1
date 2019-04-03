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

      // getting the document using the ggeetElementbyID() method
      var figBox = document.createElement("figure"); 
      figBox.setAttribute("id", "styleThumbs");
      document.getElementById("box").appendChild(figBox);

      for (var i = 0; i <= 4; i++) { 
            // sheetIMG element creating an image, loops through the atl num
            var sheetIMG = document.createElement("img")
            sheetIMG.setAttribute("src", "na_small" + i + ".png");
            sheetIMG.setAttribute("alt", "na_style_" + i + ".css");

            // loads different thumbnail images
            sheetIMG.onclick = function (e) {
                  fancy.setAttribute("href", e.target.alt);
            }
            figBox.appendChild("style");
      }
}