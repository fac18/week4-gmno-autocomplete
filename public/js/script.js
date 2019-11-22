const siteBox = document.querySelector('input[name="site-box"]');
const siteButton = document.querySelector("#site-button");


//Accessing wikipedia data by cliking the siteButton

siteButton.addEventListener("click", () => {
    event.preventDefault();
    if (siteBox.value) {
    window.location.href = "https://en.wikipedia.org/wiki/" + siteBox.value
        .split(" ")
        .join("_");
    }
});

chooseOption = event => {
    let optionText = event.currentTarget.textContent;
    siteBox.value = optionText;
}