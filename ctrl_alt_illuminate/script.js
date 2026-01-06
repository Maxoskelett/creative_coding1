console.log("Hallo! Das ist eine verdammt harte Galaxis. Wenn man hier überleben will, muss man immer wissen, wo sein Handtuch ist.")
console.log("Dieses Script steuert die Lichtmodi in einem virtuellen Raum. Doppelklicken zum Dimmen, Rechtsklick zum Moduswechsel.")
const roomImage = document.querySelector('.room-image');
const overlay = document.querySelector('.overlay');
const modeDisplay = document.getElementById('modeDisplay');

let letzterModus = 'normal';
let partyInterval = null;
let istLichtAn = false;

// Seite startet dunkel
roomImage.style.filter = 'brightness(0.1)';
overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';

//normales Licht an/aus Script
document.querySelector('button').addEventListener('click', function() {
    if (!istLichtAn) {
        istLichtAn = true;
        applyMode(letzterModus);
    } else {
        istLichtAn = false;
        if (partyInterval) {
            clearInterval(partyInterval);
            partyInterval = null;
        }
        roomImage.style.filter = 'brightness(0.1)';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
        modeDisplay.textContent = 'AUS';
    }
});

//Dimmer Script
let brightness = 100;
document.addEventListener('dblclick', function(event) {
    if (istLichtAn && brightness > 20) {
        brightness -= 10;
        roomImage.style.filter = `brightness(${brightness / 100})`;
    } else {
        brightness = 100;
        roomImage.style.filter = 'brightness(1)';
    }
});

//Lichtmodus wechseln Script. Es war furchtbar...
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
    
    if (istLichtAn) {
        if (partyInterval) {
            clearInterval(partyInterval);
            partyInterval = null;
        }
        
        if (letzterModus === 'normal') {
            letzterModus = 'lesen';
        } else if (letzterModus === 'lesen') {
            letzterModus = 'yoga';
        } else if (letzterModus === 'yoga') {
            letzterModus = 'party';
        } else {
            letzterModus = 'normal';
        }
        
        applyMode(letzterModus);
    }
});

function applyMode(mode) {
    if (mode === 'normal') {
        roomImage.style.filter = 'brightness(1)';
        overlay.style.backgroundColor = 'rgba(255, 255, 255, 0)';
        modeDisplay.textContent = 'NORMAL';
    } else if (mode === 'lesen') {
        roomImage.style.filter = 'brightness(0.9)';
        overlay.style.backgroundColor = 'rgba(188, 155, 35, 0.3)';
        modeDisplay.textContent = 'LESEN 📖';
    } else if (mode === 'yoga') {
        roomImage.style.filter = 'brightness(0.5)';
        modeDisplay.textContent = 'YOGA 🧘‍♀️';
        
        // Fade von Amber zu Rosa - intensiver
        let yogaStep = 0;
        const yogaColors = [
            'rgba(255, 140, 60, 0.6)',   // Intensives Amber
            'rgba(255, 120, 80, 0.6)',
            'rgba(255, 100, 110, 0.6)',
            'rgba(255, 90, 140, 0.6)',
            'rgba(255, 80, 170, 0.65)',  // Kräftiges Rosa
        ];
        
        partyInterval = setInterval(function() {
            overlay.style.backgroundColor = yogaColors[yogaStep];
            yogaStep++;
            if (yogaStep >= yogaColors.length) yogaStep = 0;
        }, 3000); // Alle 3 Sekunden langsam wechseln
        
    } else if (mode === 'party') {
        modeDisplay.textContent = 'PARTY 🎉';
        const partyColors = [
            'rgba(255, 107, 107, 0.5)',
            'rgba(78, 205, 196, 0.5)',
            'rgba(69, 183, 209, 0.5)',
            'rgba(249, 202, 36, 0.5)',
            'rgba(108, 92, 231, 0.5)',
            'rgba(253, 121, 168, 0.5)'
        ];
        let colorIndex = 0;
        
        partyInterval = setInterval(function() {
            overlay.style.backgroundColor = partyColors[colorIndex];
            colorIndex = (colorIndex + 1) % partyColors.length;
        }, 300);
    }
}