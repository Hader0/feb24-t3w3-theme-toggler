console.log("CSS Theme Toggler loaded and running!");

let rootElement = document.querySelector(":root");

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
}

if (getChosenTheme() == null){
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    if (darkThemeMq.matches) {
      // Theme set to dark.
      setChosenTheme("dark");
      console.log("No theme found, applied the dark theme");
    } else {
      // Theme set to light.
      setChosenTheme("light");
      console.log("No theme found, applied the light theme");
    }
}



let themeToggleButton = document.getElementById("themeToggle");
themeToggleButton.onclick = toggleTheme;
// themeToggleButton.addEventListener("click", toggleTheme); - Same as above

// Loop through properties key in chosen theme object
// Apple those properties based on that name
function updateCssVariables() {

}

function getVariablesFromCSS() {
    console.log(rootElement);

    // console.log(document.documentElement.style.getPropertyValue("--backgroundColour"));

    let rootStyles = getComputedStyle(rootElement);

    console.log(rootStyles.getPropertyValue("--backgroundColour"));
}

getVariablesFromCSS();

