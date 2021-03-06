function audio (key){
    let audio = new Audio(`audio/${key}.mp3`);
    audio.load();
    audio.play()
}


document.addEventListener("keydown", function(event) {
    if (event.code === "KeyA") {
        audio("A")
    }
    else if (event.code == "KeyS") {
        audio("S")
        // console.log(`The 'S' key is pressed.`);
    }
    else if (event.code == "KeyD") {
        audio("D")
    }
    else if (event.code == "KeyF") {
        audio("F")
    }
    else if (event.code == "KeyG") {
        audio("G")
    }
    else if (event.code == "KeyH") {
        audio("H")
    }
    else if (event.code == "KeyJ") {
        audio("J")
    }
    else if (event.code == "KeyW") {
        audio("W")
    }
    else if (event.code == "KeyE") {
        audio("E")
    }
    else if (event.code == "KeyT") {
        audio("T")
    }
    else if (event.code == "KeyY") {
        audio("Y")
    }
    else if (event.code == "KeyU") {
        audio("U")
    }
    else {
        console.log(`an unbound key was pressed`);
    }
});