function handleTouch12() {
    console.log("Pin 12 berührt");
    let sound = new Audio("Assets/do-80236.mp3");
    sound.play();
}

function handleTouch13() {
    console.log("Pin 13 berührt");
    let sound = new Audio("Assets/la-80237.mp3");
    sound.play();
}

function handleTouch14() {
    console.log("Pin 14 berührt");
    let sound = new Audio("Assets/mi-80239.mp3");
    sound.play();
}

function handleTouch27() {
    console.log("Pin 27 berührt");
    let sound = new Audio("Assets/re-78500.mp3");
    sound.play();
}

function handleTouch32() {
    console.log("Pin 32 berührt");
    let sound = new Audio("Assets/si-80238.mp3");
    sound.play();
}

function handleTouch33() {
    console.log("Pin 33 berührt");
    let sound = new Audio("Assets/sol-101774.mp3");
    sound.play();
}

// SDK initialisieren und Verbindung zum ESP herstellen
function ccSDKconnect() {
    console.log("ESP verbunden!");
    
    // Touch-Handler registrieren
    ccSDK.setTouchCallback(12, handleTouch12);
    ccSDK.setTouchCallback(13, handleTouch13);
    ccSDK.setTouchCallback(14, handleTouch14);
    ccSDK.setTouchCallback(27, handleTouch27);
    ccSDK.setTouchCallback(32, handleTouch32);
    ccSDK.setTouchCallback(33, handleTouch33);
}

// Wird aufgerufen, wenn die Verbindung getrennt wird
function ccSDKdisconnect() {
    console.log("ESP getrennt!");
}
