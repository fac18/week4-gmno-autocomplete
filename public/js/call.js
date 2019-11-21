let xhr = new XMLHttpRequest();

  //example search endpoint : /search?q=fluffyunicorn

  let searchUrl = `/search?q=${encodeURIComponent(searchTerm)}`;
  xhr.onreadystatechange = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      //populate suggestionsArray with parsed JSON response
      suggestionsArray = JSON.parse(xhr.responseText);
      //fill DOM with li elements created from suggestionsArray
      populateSuggestionBox();
    }
  };

  xhr.open("GET", searchUrl, true);
  xhr.send();
  
};