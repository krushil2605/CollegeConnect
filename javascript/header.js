// Get the current page URL
var currentPage = window.location.pathname;

// Get all the menu items
var menuItems = document.querySelectorAll("#com_nav a");

// Loop through each menu item
menuItems.forEach(function (item) {
  // Extract the page name from the href attribute
  var pageName = item.getAttribute("href").split("/").pop().split(".")[0];

  // Check if the page name matches the current page
  if (currentPage.includes(pageName)) {
    // Add the 'active' class to the matching item
    item.classList.add("active");
  }
});
