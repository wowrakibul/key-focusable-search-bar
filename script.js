// Sample data for suggestions
var suggestions = [
  "Apple",
  "Banana",
  "Orange",
  "Pineapple",
  "Mango",
  "Grapes",
  "Watermelon",
  "Strawberry",
  "Blueberry",
  "Wow Rakibul",
  "20min designs",
  "avatarakib",
  "x-ray",

  // letter base == "U"
  "ui",
  "uix",
  "uiux",
  "ui tutorial",
  "user interface",
  "user research",
  "user experience",
  "unlimited development",
  "ui kit",
  "ui bangla Factory",
  "ui materials",
];

// Get the search input and suggestions list elements
var searchInput = document.getElementById("search-input");
var suggestionsList = document.getElementById("suggestions-list");

// Event listener for search input
searchInput.addEventListener("input", function () {
  var inputValue = searchInput.value.trim();
  updateSuggestions(inputValue);
});

// Event listener for suggestion item click
suggestionsList.addEventListener("click", function (event) {
  var selectedSuggestion = event.target.textContent;
  searchInput.value = selectedSuggestion;
  suggestionsList.style.display = "none";
});

// Function to update suggestions based on user input
function updateSuggestions(inputValue) {
  if (inputValue === "") {
    suggestionsList.style.display = "none";
    suggestionsList.innerHTML = "";
    return;
  }

  var matchedSuggestions = getMatchedSuggestions(inputValue);
  renderSuggestions(matchedSuggestions);
}

// Function to get matched suggestions based on user input
function getMatchedSuggestions(inputValue) {
  var matchedSuggestions = [];

  for (var i = 0; i < suggestions.length; i++) {
    var suggestion = suggestions[i];

    if (suggestion.toLowerCase().includes(inputValue.toLowerCase())) {
      matchedSuggestions.push(suggestion);
    }
  }

  return matchedSuggestions;
}

// Function to render suggestions in the suggestions list
function renderSuggestions(matchedSuggestions) {
  suggestionsList.innerHTML = "";

  if (matchedSuggestions.length > 0) {
    matchedSuggestions.forEach(function (suggestion) {
      var listItem = document.createElement("li");
      listItem.textContent = suggestion;
      suggestionsList.appendChild(listItem);
    });

    suggestionsList.style.display = "block";
  } else {
    suggestionsList.style.display = "none";
  }
}

// key controller

const keyControl = document.getElementById("searchInput");

document.addEventListener("keydown", function (event) {
  // Check if Ctrl+K, Ctrl+/, or Enter is pressed
  if (
    (event.ctrlKey && event.key === "k") ||
    (event.ctrlKey && event.key === "/") ||
    event.key === "Enter"
  ) {
    event.preventDefault(); // Prevent default browser behavior

    // Focus the search input when Ctrl+K, Ctrl+/, or Enter is pressed
    searchInput.focus();
  } else if (event.key === "Escape") {
    searchInput.blur();
  }
});
