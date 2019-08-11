/*jshint esversion: 6 */

"use strict"; // this is for avoiding common mistakes.unsaved actions.

// difference between var and let

// "let" doesn't allow a variable name twice

var catName = "nano";
var catName = "nana";

function catTalk() {
  var voice = catName + "meow";
}

catTalk();

// this will throw an error. "Duplicate decleration"
let dogName = "tim";
let dogName = "tom";
function dogTalk() {
  var voice = dogName + "vouuf";
}

dogName();
