var i = 0;
var txt = '"Aenean faucibus pharetra elit, vitae mattis elit vestibulum eu."';
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
    var images = document.querySelectorAll('img');

    images.forEach(function(img) {
        var imageSrc = img.getAttribute('src'); 
        var newSrc = imageSrc; 

        if (imageSrc.includes('black')) {
            newSrc = imageSrc.replace('black', 'white'); 
        } else if (imageSrc.includes('white')) {
            newSrc = imageSrc.replace('white', 'black'); 
        }

        img.setAttribute('src', newSrc);
    });

    if (element.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");  
        button.textContent = "1"; 
    } else {
        localStorage.setItem("darkMode", "disabled");  
        button.textContent = "0"; 
    }
}

function checkDarkMode() {
    var element = document.body;
    var images = document.querySelectorAll('img');
    
    if (localStorage.getItem("darkMode") === "enabled") {
        element.classList.add("dark-mode");
        
        images.forEach(function(img) {
            var imageSrc = img.getAttribute('src'); 
            var newSrc = imageSrc; 

            if (imageSrc.includes('black')) {
                newSrc = imageSrc.replace('black', 'white'); 
            }

            img.setAttribute('src', newSrc);
        });

        document.getElementById("dark").textContent = "1"; 
    } else {
        element.classList.remove("dark-mode");
        
        images.forEach(function(img) {
            var imageSrc = img.getAttribute('src'); 
            var newSrc = imageSrc; 

            if (imageSrc.includes('white')) {
                newSrc = imageSrc.replace('white', 'black'); 
            }

            img.setAttribute('src', newSrc);
        });

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