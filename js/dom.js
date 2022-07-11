"use strict";

// pakeisti antraste i Dynamic Heading
// issisaugom nuoroda i h1 elementa
const h1El = document.getElementById("main-heading");
console.log("h1El ===", h1El);
h1El.textContent = "Dynamic Heading";

const textEl = document.getElementById("text");
// paima teksta is elemento
const rez = textEl.textContent;
console.log("rez ===", rez);

// prideti nauja elementa i div su id box
const boxEl = document.getElementById("box");
// innerHTML - sugeneruoti html struktura is string
boxEl.innerHTML = " <h3>Dynamic <i>Element</i></h3>";

document.getElementById("article-title").textContent = "Pagrindine antraste";
document.getElementById("article-date").textContent = "Penktadienis";
document.getElementById("article-text").textContent += " == sugeneruotas textas";
document.getElementById("color").textContent = "Violet";
document.getElementById("color").style.color = "violet";

// prideti prie spalvu <li>Brown</li>
document.getElementById("colors").innerHTML += "<li>Brown</li>";

// // pakeisti antraste i Dynamic Heading

// // issisaugom nuoroda i h1 el
// const h1El = document.getElementById('main-heading');
// console.log('h1El ===', h1El);
// h1El.textContent = 'Dynamic Heading';

// // nusitaikyti i el su id text
// const textEl = document.getElementById('text');
// // paimam texta is elemento
// const rez = textEl.textContent;
// console.log('rez ===', rez);

// // prideti nauja elementa i div su id box
// // memoryLocation 00xxlsq
// const boxEl = document.getElementById('box');
// // innerHTML - sugeneruoti html struktura is string
// boxEl.innerHTML = '<h3>As esu dinamiskas <i>elementas</i></h3>';
// // boxEl.textContent = '<h3>As esu dinamiskas <i>elementas</i></h3>';
