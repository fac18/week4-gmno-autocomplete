let siteArray = [];
let siteBox = document.querySelector(".input-box");

const changeValue = () =>
{
    let searchTerm=siteBox.value;
    let xhr = new XMLHttpRequest();

  //example search endpoint : /search?q=fluffyunicorn

  let searchUrl = `/search?q=${searchTerm}`;
  console.log(searchUrl);
  xhr.onreadystatechange = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      //populate suggestionsArray with parsed JSON response
      suggestionsArray = JSON.parse(xhr.responseText);
      //fill DOM with li elements created from suggestionsArray
      populateDropDown();
    }
  };

  xhr.open("GET", searchUrl, true);
  xhr.send();

  
}

const populateDropDown = () => {
let dropDownInfo=document.querySelector(".dropdown-box")
dropDownInfo.textContent="";
siteArray.forEach((site, i) => {
    let liElement = document.createElement("li");
    liElement.classList.add("site-item");
    let matchingText = document.createElement("span");
    matchingText.classList.add("matching-text");
    matchingText.textContent = site.slice(0, searchBox.value.length);
    let remainingText = document.createElement("span");
    remainingText.classList.add("remaining-text");
    remainingText.textContent = site.slice(searchBox.value.length);
    liElement.appendChild(matchingText);
    liElement.appendChild(remainingText);
    dropDownInfo.appendchild(liElement);

}
)
}

siteBox.addEventListener("input", changeValue);

