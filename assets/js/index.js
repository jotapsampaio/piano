const keys = document.querySelectorAll(".key");
const checkbox = document.querySelector(".checkbox__keys");
const switcher = document.querySelector(".switcher");
const keysSection = document.querySelector(".piano__keys");

const playNote = (note) => {
    const audio = new Audio(`../assets/audio/${note}.wav`);
    audio.play();
}

const handleMouseDown = (key) => {
    playNote(key.getAttribute("data-note"));
    if(key.className.includes("black")){
        key.classList.add("black__pressed")
        return;
    }
    key.style.background = "#ddd";
}

const handleMouseUp = (key) => {
    if(key.className.includes("black")){
        key.classList.remove("black__pressed")
        return;
    }
    key.style.background = "#fff";
}

keys.forEach((key) => {
    key.addEventListener("mousedown", () => {
        handleMouseDown(key);
    });
    key.addEventListener("mouseup", () => {
        handleMouseUp(key);
    });
});

checkbox.addEventListener("change", ({target}) => {
    if(target.checked){
        switcher.classList.add("switcher__active");
        keysSection.classList.remove("desabled__keys");
        return;
    }

    switcher.classList.remove("switcher__active");
    keysSection.classList.add("desabled__keys");
});

const keyDownMapper = {
    "Tab": () => handleMouseDown(keys[0]),
    "q": () => handleMouseDown(keys[1]),
    "w": () => handleMouseDown(keys[2]),
    "e": () => handleMouseDown(keys[3]),
    "r": () => handleMouseDown(keys[4]),
    "t": () => handleMouseDown(keys[5]),
    "y": () => handleMouseDown(keys[6]),
    "u": () => handleMouseDown(keys[7]),
    "i": () => handleMouseDown(keys[8]),
    "o": () => handleMouseDown(keys[9]),
    "p": () => handleMouseDown(keys[10]),
    "Dead": () => handleMouseDown(keys[11]),
    "CapsLock": () => handleMouseDown(keys[12]),
    "a": () => handleMouseDown(keys[13]),
    "s": () => handleMouseDown(keys[14]),
    "d": () => handleMouseDown(keys[15]),
    "f": () => handleMouseDown(keys[16]),
    "g": () => handleMouseDown(keys[17]),
    "h": () => handleMouseDown(keys[18]),
    "j": () => handleMouseDown(keys[19]),
    "k": () => handleMouseDown(keys[20]),
    "l": () => handleMouseDown(keys[21]),
    "ç": ()=> handleMouseDown(keys[22]),
    "Shift": () => handleMouseDown(keys[23]),
    "\\": () => handleMouseDown(keys[24]),
    "z": () => handleMouseDown(keys[25]),
    "x": () => handleMouseDown(keys[26]),
    "c": () => handleMouseDown(keys[27]),
    "v": () => handleMouseDown(keys[28]),
    "b": () => handleMouseDown(keys[29]),
    "n": () => handleMouseDown(keys[30]),
    "m": () => handleMouseDown(keys[31]),
    ",": () => handleMouseDown(keys[32]),
    ".": () => handleMouseDown(keys[33]),
    "/": () => handleMouseDown(keys[34]),
    "Enter": () => handleMouseDown(keys[35])
};

const keyUpMapper = {
    "Tab": () => handleMouseUp(keys[0]),
    "q": () => handleMouseUp(keys[1]),
    "w": () => handleMouseUp(keys[2]),
    "e": () => handleMouseUp(keys[3]),
    "r": () => handleMouseUp(keys[4]),
    "t": () => handleMouseUp(keys[5]),
    "y": () => handleMouseUp(keys[6]),
    "u": () => handleMouseUp(keys[7]),
    "i": () => handleMouseUp(keys[8]),
    "o": () => handleMouseUp(keys[9]),
    "p": () => handleMouseUp(keys[10]),
    "Dead": () => handleMouseUp(keys[11]),
    "CapsLock": () => handleMouseUp(keys[12]),
    "a": () => handleMouseUp(keys[13]),
    "s": () => handleMouseUp(keys[14]),
    "d": () => handleMouseUp(keys[15]),
    "f": () => handleMouseUp(keys[16]),
    "g": () => handleMouseUp(keys[17]),
    "h": () => handleMouseUp(keys[18]),
    "j": () => handleMouseUp(keys[19]),
    "k": () => handleMouseUp(keys[20]),
    "l": () => handleMouseUp(keys[21]),
    "ç": ()=> handleMouseUp(keys[22]),
    "Shift": () => handleMouseUp(keys[23]),
    "\\": () => handleMouseUp(keys[24]),
    "z": () => handleMouseUp(keys[25]),
    "x": () => handleMouseUp(keys[26]),
    "c": () => handleMouseUp(keys[27]),
    "v": () => handleMouseUp(keys[28]),
    "b": () => handleMouseUp(keys[29]),
    "n": () => handleMouseUp(keys[30]),
    "m": () => handleMouseUp(keys[31]),
    ",": () => handleMouseUp(keys[32]),
    ".": () => handleMouseUp(keys[33]),
    "/": () => handleMouseUp(keys[34]),
    "Enter": () => handleMouseUp(keys[35])
};

document.addEventListener("keydown", (event) => {
    event.preventDefault();
    keyDownMapper[event.key]();
});  

document.addEventListener("keyup", (event) => {
    keyUpMapper[event.key]();
});