// let i = 0;

// while (i < 3) {
//   console.log("vardas");
//   i++;
// }

// let combo = "";
// let times = 3;
// let name = "Petras";

// do {
//   combo += name;
//   times--;
// } while (times > 0);

// console.log(combo);

// Suskaičiuok su JS koks bus cos(0) (t.y. cos, kai kampas 0 radians).

// console.log(Math.cos(0));

// Sukurk random skaičių tarp 1 ir 5 (įskaitant abu).

// let rnd = Math.floor(Math.random() * 5 + 1);
// console.log("rnd ===", rnd);

// Sukurk random skaičių tarp 5 ir 12 (įskaitant abu).

// let rnd2 = Math.floor(Math.random() * (13 - 5) + 5);
// console.log("rnd2 ===", rnd2);

// Sukurk programą, kur vartotojui atidarius puslapį, alert išmestų ar jis laimėjo bilietą ar ne. Tikimybė laimėti - viena iš penkių. (Hint: čia reikės if-else su math random).

// let win = Math.floor(Math.random() * 5 + 1);

// if (win === 5) {
//   console.log(`Laimingas skaicius - ${win}! Jus laimejote`);
// } else {
//   console.log(`Jusu skaicius - ${win}. Bandykite dar karta`);
// }

// Susikurkite projektą, be jokių HTML tag'ų body. Su JavaScript sukurkite <h2> elementą su savo vardu ir pridėkite į <body>.

// document.body.innerHTML = "<h2>Hi</h2>";

// Sukurkite HTML'e <h1> tag'ą su id="name" ir tekstu "unknown". Naudodami JavaScript pakeiskite šio elemento tekstą į savo vardą .

// document.getElementById("main-heading").textContent = "Petras";

// Sukurkite unordered list su trim list item'ais: "Pienas", "Varškė", "Jautiena". Su JavaScript pakeiskite paskutinį list item tekstą į "Sūris".

// document.getElementById("sultys").textContent = "Suris";

// Ištaisykite klaidą. Nusikopijuokite apačioje esantį kodą ir su JavaScript pasikeiskite antrame paragrafe esantčio <span> tekstą - iš 'red' į 'blue':

// document.querySelectorAll("p span")[1].textContent = "blue";

// Sukurkite ordered list su trimis list item duota eilės tvarka: "BMW group", "VW group" ir "GE".

// <ol>
//   <li>BMW group</li>
//   <li>VW group</li>
//   <li>GE</li>
// <ol>

// Naudodami JavaScript apkeiskite pirmus du sąrašo elementus vietomis. Tačiau, kabliukas - negalima JavaScript įrašyti testo (kitaip tariant hard-codinti). Pirma Jūs turite pasiimt pirmo ir antro sąrašo elemento reikšmes ir jas išsisaugoti į kintamuosius.

const firstItem = document.querySelector("li:first-child");
const secondItem = document.querySelector("li:nth-child(2)");

const bmwGroup = firstItem.textContent;
const vwGroup = secondItem.textContent;

firstItem.textContent = vwGroup;
secondItem.textContent = bmwGroup;
