console.log("CSS Theme Toggler loaded and running!");

let rootElement = document.querySelector(":root");
let themeToggleButton = document.getElementById("themeToggle");

// Colour themes for the website
let themes = [
    {
        name: "dark",
        properties: {
            backgroundColour: "darkgrey",
            fontColour: "white",
            "theme-100": "#4641d1"
        }
    },
    {
        name: "light",
        properties: {
            backgroundColour: "#87E0E0",
            fontColour: "black",
            "theme-100": "#87E0E0"
        }
    }
];

// Read theme name stored in local storage
// Update CSS variables based on that name
function getChosenTheme() {
    let foundTheme = localStorage.getItem("theme");
    console.log(foundTheme);
    return foundTheme;
}

// Set theme name to local storage
// Update CSS variables based on that name
function setChosenTheme(newThemeName) {
    localStorage.setItem("theme", newThemeName);
    updateCssVariables();
}

if (getChosenTheme() == null){
    // If a theme DOES not exist in local storage, apple that theme's properites to CSS
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    // Matching the system/browser theme by default
    if (darkThemeMq.matches) {
      // Theme set to dark.
      setChosenTheme("dark");
      console.log("No theme found, applied the dark theme");
    } else {
      // If a theme DOES not exist in local storage, apple that theme's properites to CSS
      // Theme set to light.
      setChosenTheme("light");
      console.log("No theme found, applied the light theme");
    }
}

function toggleTheme(){
	if (getChosenTheme() == "dark"){
		// set it to light 
		setChosenTheme("light");
        // Set button text to "Change theme to Dark"
        themeToggleButton.innerText = "Change Theme To Dark"
	} else {
		// set it to dark 
		setChosenTheme("dark");
        // Set button text to "Change theme to Light"
        themeToggleButton.innerText = "Change Theme To Light"
	}
}
themeToggleButton.onclick = toggleTheme;
// themeToggleButton.addEventListener("click", toggleTheme); - Same as above

// Loop through properties key in chosen theme object
// Apple those properties based on that name
function updateCssVariables() {
    // Find the matching theme object
    let matchingTheme = themes.find(themeObject => themeObject.name == getChosenTheme());
    console.log(matchingTheme);

    // Find the properties object in the matching theme object
    // Loop through all property values
    Object.keys(matchingTheme.properties).forEach(cssProperty => {
        console.log(cssProperty + ": " + matchingTheme.properties[cssProperty]);

        // Apply property value to CSS variables
        rootElement.style.setProperty(`--${cssProperty}`, matchingTheme.properties[cssProperty]);
    })
}

function getVariablesFromCSS() {
    console.log(rootElement);

    // console.log(document.documentElement.style.getPropertyValue("--backgroundColour"));

    let rootStyles = getComputedStyle(rootElement);

    console.log(rootStyles.getPropertyValue("--backgroundColour"));
}

getVariablesFromCSS();

