const cross = document.querySelector(".clear");
const resWrapper = document.querySelector(".results-wrapper");
const input = document.querySelector(".form-control");
const searchForm = document.querySelector("#search_form");

function showCross() {
    cross.style.display = "block";
}

function hiddenCross() {
    cross.style.display = "none";
}

function clearFormAndWrapper() {
    input.value = "";
    resWrapper.innerHTML = "";
    hiddenCross();
}

if (input.value.length > 0) {
    showCross();
}


cross.addEventListener("click", () => {
    clearFormAndWrapper();
})

input.addEventListener("input", () => {
        const inputLength = input.value.length;
        if (inputLength <= 0) {
            hiddenCross();
        } else {
            showCross();
        }
})

window.addEventListener("click", (event) => {
    if (!searchForm.contains(event.target)) {
        clearFormAndWrapper();
    }
} )