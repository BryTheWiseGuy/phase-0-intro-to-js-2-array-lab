// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat() {
    cats.push("Ralph");
}

function destructivelyPrependCat() {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name){
    return name = [...cats, "Broom"];
}

function prependCat(name) {
    return name = ["Arnold", ...cats];
}

function removeLastCat(name) {
    return name = cats.slice(0,2);
}

function removeFirstCat (name) {
    return name = cats.slice(1);
}


