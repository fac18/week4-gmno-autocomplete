const siteBox = document.querySelector('input[name="site-box"]');
const siteButton = document.querySelector("#site-button");


//Accessing wikipedia data by cliking the siteButton

siteButton.addEventListener("click", () => {
    event.preventDefault();
    window.location.href = "https://en.wikipedia.org/wiki/" + siteBox.value
                            .split(" ")
                            .join("_");
  });

  chooseOption = event => {
      let optionText = event.currentTarget.textContent;
      siteBox.value = optionText;
      changeValue();
  }

  // List should close when someone clicks


  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("site-item");
    var ul = document.getElementsByClassName("dropdown-box")[0];
    console.log("this is the list array", x);
    while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
    }    
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
