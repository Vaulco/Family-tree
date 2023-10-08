// Add a search function for the search box 
const search = () => {
    const searchbox = document.getElementById("search-item").value.toUpperCase().replace(/\s+/g, '_');
    const storeitems = document.getElementById("product-list");
    const product = document.querySelectorAll(".product");
    const pname = storeitems.querySelectorAll("h2, h3, h4, h5");

    for (var i = 0; i < product.length; i++) {
        let matches = product[i].querySelectorAll('h1, h2, h3, h4, h5'); 

        let foundMatch = false;
        for (let match of matches) {
            let textvalue = match.textContent || match.innerHTML;
            if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
                foundMatch = true;
                break;
            }
        }
        if (foundMatch) {
            product[i].style.display = "";
        } else {
            product[i].style.display = "none";
        }
    }
}

// Add a toggle function for the arrow and expanded container
const toggleExpandedContainer = () => {
    const arrowIcon = document.getElementById("arrow-icon");
    const expandedContainer = document.getElementById("expanded-container");

    arrowIcon.classList.toggle("open");
    expandedContainer.classList.toggle("open");
};

document.getElementById("arrow-icon").addEventListener("click", toggleExpandedContainer);

//login container with username and password transition to product list
const validUsername = "1"; // Replace with your username
const validPasswordHash = "8c9a013ab70c0434313e3e881c310b9ff24aff1075255ceede3f2c239c231623"; // Replace with your password
const MAX_LOGIN_ATTEMPTS = 3;
const loginButton = document.getElementById("login-button");
     
const showWebsiteContent = () => {
    const loginContainer = document.getElementById("login-container");
    const websiteContainer = document.getElementById("website-container");
            
    loginContainer.style.opacity = "0"; // Start fading out the login container
            
    setTimeout(() => {
        loginContainer.style.display = "none"; // Hide the login container after fade-out
        websiteContainer.style.opacity = "0"; // Start fading in the website container
        websiteContainer.style.display = "block"; // Make the website container visible
                
        // Reset opacity after the fade-in is complete
        setTimeout(() => {
            websiteContainer.style.opacity = "1";
         }, 40); // 500ms matches the transition duration in the CSS
    }, 500); // Start fade-out after 500ms (matches transition duration)
};
        
const attemptLogin = () => {
    const usernameInput = document.getElementById("username").value;
    const passwordInput = document.getElementById("password").value;
    const hashedEnteredPassword =  CryptoJS.SHA256(passwordInput).toString();
            
    if (usernameInput === validUsername && hashedEnteredPassword === validPasswordHash) {
        showWebsiteContent();
     }
};

const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

usernameInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault(); // Prevent the default form submission behavior
        passwordInput.focus(); // Move focus to the password input
    }
});

passwordInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault(); // Prevent the default form submission behavior
        attemptLogin(); // Call the login function
    }
});

loginButton.addEventListener("click", attemptLogin);
// Keep track of the currently expanded product
let expandedProduct = null;

// Function to expand/collapse product details
const toggleProductDetails = (product) => {
    if (expandedProduct === product) {
        // Collapse the product
        product.classList.remove("expanded");
        expandedProduct = null;
    } else {
        // Collapse the previously expanded product, if any
        if (expandedProduct) {
            expandedProduct.classList.remove("expanded");
        }

        // Expand the clicked product
        product.classList.add("expanded");
        expandedProduct = product;
    }
};


// Attach the toggle function to each product
const products = document.querySelectorAll(".product");
products.forEach((product) => {
    product.addEventListener("click", () => {
        toggleProductDetails(product);
    });
});
const hoverSound = document.getElementById("hover-sound");
const buttons = document.querySelectorAll(".btn");

products.forEach((product) => {
    product.addEventListener("mouseenter", () => {
        // Play the audio when hovering over the product
        hoverSound.play();
    });

    // Optional: Pause the audio when the mouse leaves the product (if needed)
    product.addEventListener("mouseleave", () => {
        // Pause the audio
        hoverSound.pause();
        // Reset the audio playback time to the beginning
        hoverSound.currentTime = 0;
    });
});
buttons.forEach((button) => {
    button.addEventListener("mouseenter", () => {
        // Play the hover sound when mouse enters the button
        hoverSound.play();
    });

    button.addEventListener("mouseleave", () => {
        // Pause the hover sound when mouse leaves the button
        hoverSound.pause();
        hoverSound.currentTime = 0; // Reset audio to the beginning
    });
});



const help = document.querySelector('#help');
const popupContainer = document.querySelector('.popup-container');
const closeBtn = document.querySelector('.close-btn');

help.onclick = () => {
    popupContainer.classList.add('active');
}

closeBtn.onclick = () => {
    popupContainer.classList.remove('active');
}

const set = document.querySelector('#set');
const settingsPop = document.querySelector('.settings-pop');
const closeBtx = document.querySelector('.close-btx');

set.onclick = () => {
    settingsPop.classList.add('active');
}

closeBtx.onclick = () => {
    settingsPop.classList.remove('active');
}

document.addEventListener("DOMContentLoaded", function () {
    const selectBtn = document.querySelector(".select-btn");
    const listItems = document.querySelector(".list-items");
  
    selectBtn.addEventListener("click", function () {
      listItems.classList.toggle("active");
    });
});
  
/*
  const backgroundOptions = document.querySelectorAll('.background-options img');

backgroundOptions.forEach((option) => {
    option.addEventListener('click', () => {
        // Remove white border from all options
        backgroundOptions.forEach((opt) => {
            opt.classList.remove('selected');
        });
        
        // Add white border to the selected option
        option.classList.add('selected');
        
        // Get the path to the selected background image
        const selectedBackground = option.getAttribute('src');
        
        // Set the selected background as the body's background
        document.body.style.backgroundImage = `url('${selectedBackground}')`;
        
        // Store the selected background in local storage for persistence
        localStorage.setItem('selectedBackground', selectedBackground);
    });
});

// Add a click event listener to each background option
backgroundOptions.forEach((option) => {
    option.addEventListener('click', () => {
    });
});

// Check if a background is already selected in local storage
const storedBackground = localStorage.getItem('selectedBackground');
if (storedBackground) {
    document.body.style.backgroundImage = `url('${storedBackground}')`;
    const selectedOption = document.querySelector(`.background-options img[src="${storedBackground}"]`);
    if (selectedOption) {
        selectedOption.classList.add('selected');
    }
}*/

document.addEventListener("DOMContentLoaded", function () {
    const listItems = document.querySelectorAll(".list-items .item");

    listItems.forEach((item) => {
        item.addEventListener("click", function () {
            const colorScheme = item.getAttribute("data-color-scheme");
            const colorVariation = item.getAttribute("data-color-variation");
            applyColorScheme(colorScheme, colorVariation);
            
            // Save the selected color scheme and variation to localStorage
            localStorage.setItem("selectedColorScheme", colorScheme);
            localStorage.setItem("selectedColorVariation", colorVariation);
        });
    });

    // Retrieve and apply the selected color scheme and variation from localStorage
    const storedColorScheme = localStorage.getItem("selectedColorScheme");
    const storedColorVariation = localStorage.getItem("selectedColorVariation");
    if (storedColorScheme && storedColorVariation) {
        applyColorScheme(storedColorScheme, storedColorVariation);
    }
});

const applyColorScheme = (scheme) => {
    document.documentElement.style.setProperty('--1-c', getComputedStyle(document.documentElement).getPropertyValue(`--${scheme}-1-c`));
    document.documentElement.style.setProperty('--2-c', getComputedStyle(document.documentElement).getPropertyValue(`--${scheme}-2-c`));
    document.documentElement.style.setProperty('--3-c', getComputedStyle(document.documentElement).getPropertyValue(`--${scheme}-3-c`));
    document.documentElement.style.setProperty('--4-c', getComputedStyle(document.documentElement).getPropertyValue(`--${scheme}-4-c`));
    document.documentElement.style.setProperty('--5-c', getComputedStyle(document.documentElement).getPropertyValue(`--${scheme}-5-c`));
    document.documentElement.style.setProperty('--6-c', getComputedStyle(document.documentElement).getPropertyValue(`--${scheme}-6-c`));
    document.documentElement.style.setProperty('--7-c', getComputedStyle(document.documentElement).getPropertyValue(`--${scheme}-7-c`));
    document.documentElement.style.setProperty('--8-c', getComputedStyle(document.documentElement).getPropertyValue(`--${scheme}-8-c`));
    document.documentElement.style.setProperty('--9-c', getComputedStyle(document.documentElement).getPropertyValue(`--${scheme}-9-c`));
    document.documentElement.style.setProperty('--10-c', getComputedStyle(document.documentElement).getPropertyValue(`--${scheme}-10-c`));
    document.documentElement.style.setProperty('--11-c', getComputedStyle(document.documentElement).getPropertyValue(`--${scheme}-11-c`));
    document.documentElement.style.setProperty('--12-c', getComputedStyle(document.documentElement).getPropertyValue(`--${scheme}-12-c`));
};



