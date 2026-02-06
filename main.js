let combodex;

async function load() {
    const initcombo = await fetch("base.json");
    combodex = initcombo.json;
    console.log("Initialized")
    console.log(combodex)
}




async function egg() {

    const tempt = await fetch("base.json");
const combodext = tempt.json;
console.log(combodext.radio);
};


document.addEventListener("DOMContentLoaded", load())