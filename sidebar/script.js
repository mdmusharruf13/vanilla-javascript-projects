const toggleCross = document.querySelector(".toggle-cross");
const toggleBar = document.querySelector(".toggle-bar");
const sideBar = document.querySelector(".side-bar");

toggleBar.addEventListener("click", () => {
    if (sideBar.classList.contains("display-block")) {
        sideBar.classList.remove("display-block");
        sideBar.classList.add("display-none");
    }
    else {
        sideBar.classList.remove("display-none");
        sideBar.classList.add("display-block");
    }

});

toggleCross.addEventListener("click", () => {
    if (sideBar.classList.contains("display-block")) {
        sideBar.classList.remove("display-block");
    }

    sideBar.classList.add("display-none");
})
