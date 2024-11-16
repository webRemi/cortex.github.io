var i = 0;
var txt = '"They engage in a frenetic dance, an infernal electronic waltz where pulses of light and shadow weave a symphony of possibilities."';
var speed = 50;

document.addEventListener('DOMContentLoaded', function() {
    writeQuote();
    checkDarkMode(); 
});

function writeQuote() {
    if (i < txt.length) {
        document.getElementById("quote").innerHTML += txt.charAt(i);
        i++;
        setTimeout(writeQuote, speed);
    }
}

function myFunction() {
    var element = document.body;
    var button = document.getElementById("dark"); 
    element.classList.toggle("dark-mode");
    
    if (element.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
        document.getElementById("profileImg").src = "assets/general/cortex-white.webp"; 
        //document.getElementById("asxImg").src = "assets/team/asx-white.webp";
        button.textContent = "1"; 
    } else {
        localStorage.setItem("darkMode", "disabled");
        document.getElementById("profileImg").src = "assets/general/cortex-black.webp";
        //document.getElementById("asxImg").src = "assets/team/asx-black.webp"; 
        button.textContent = "0"; 
    }
}

function checkDarkMode() {
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
        document.getElementById("profileImg").src = "assets/general/cortex-white.webp"; 
        //document.getElementById("asxImg").src = "assets/team/asx-white.webp";
        document.getElementById("dark").textContent = "1"; 
    } else {
        document.getElementById("profileImg").src = "assets/general/cortex-black.webp";
        //document.getElementById("asxImg").src = "assets/team/asx-black.webp";
        document.getElementById("dark").textContent = "0"; 
    }
}

const buttons = document.querySelectorAll('input[type=button]');
const totalButtons = buttons.length;

buttons.forEach((button, index) => {
    const reverseIndex = totalButtons - index;
    button.addEventListener("click", function() {
        const showMore = document.getElementById(`show-more-${reverseIndex}`);
        if (showMore) {
            showMore.style.display = showMore.style.display === "block" ? "none" : "block";
        }
    });
});