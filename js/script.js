/**
 * @copyright codewithsadee 2023
 * @author Sadee <codewithsadee24@gmail.com>
 */

"use strict";

/*Light and dark mode  */

const /** {NodeElement} */ $themeBtn = document.querySelector("[data-theme-btn]");
const /** {NodeElement} */ $HTML = document.documentElement;
let /** {Boolean | String} */ isDark = window.matchMedia("(prefers-color-scheme:dark)").matches;

if(sessionStorage.getItem("theme")){
    $HTML.dataset.theme= sessionStorage.getItem("theme");
}else{
    $HTML.dataset.theme= isDark ? "dark" : "light";
    sessionStorage.setItem("theme", $HTML.dataset.theme);
}
    const changeTheme = ()  => {

      $HTML.dataset.theme = sessionStorage.getItem("theme") === "light" ? "dark" : "light";
      sessionStorage.setItem("theme", $HTML.dataset.theme);


    }

$themeBtn.addEventListener("click", changeTheme);

//*TAB*//

const $tabBtn = document.querySelectorAll("[data-tab-btn]");

// Get the first element with the data-tab-content attribute
let [lastActiveTab] = document.querySelectorAll("[data-tab-content]");

// Get the first element from $tabBtn
let [lastActiveTabBtn] = $tabBtn;

// Add a click event listener to each tab button
$tabBtn.forEach(item => {
    item.addEventListener("click", function() {
        // Remove the active class from the previously active tab and button
        lastActiveTab.classList.remove("active");
        lastActiveTabBtn.classList.remove("active");

        // Get the corresponding tab content based on the data-tab-btn value
        const $tabContent = document.querySelector(`[data-tab-content="${item.dataset.tabBtn}"]`);

        // Add the active class to the new tab content and button
        $tabContent.classList.add("active");
        this.classList.add("active");

        // Update the last active tab and button references
        lastActiveTab = $tabContent;
        lastActiveTabBtn = this;
    });
});






