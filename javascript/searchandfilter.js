function validateForm() {
  var radios = document.getElementsByName("campus");
  var formValid = false;

  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      formValid = true;
      break;
    }
  }

  if (!formValid) {
    var errorMessageDiv = document.getElementById("campus-error-message");
    errorMessageDiv.style.display = "block";
    errorMessageDiv.innerHTML = "Please select a campus";
    return false;
  } else {
    var errorMessageDiv = document.getElementById("campus-error-message");
    errorMessageDiv.style.display = "none";
    errorMessageDiv.innerHTML = "";
  }

  var emailErrorMessage = document.getElementById("email-error-message");
  emailErrorMessage.style.display = "none";
  emailErrorMessage.innerHTML = "";
  var email = document.getElementById("email");
  if (email.value != "") {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!mailformat.test(email.value)) {
      emailErrorMessage.style.display = "block";
      emailErrorMessage.innerHTML =
        "You have entered an invalid email address!";
      return false;
    }
  }

  var cityNameErrorMessage = document.getElementById("cityName-error-message");
  cityNameErrorMessage.style.display = "none";
  cityNameErrorMessage.innerHTML = "";
  var cityName = document.getElementById("cityName");
  if (cityName.value != "") {
    var mailformat = /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/;
    if (!mailformat.test(cityName.value)) {
      cityNameErrorMessage.style.display = "block";
      cityNameErrorMessage.innerHTML = "You have entered an invalid city name!";
      return false;
    }
  }
  displayPersonDetails();
  return false;
}

function toggleDetails(personId) {
  var detailsElement = document.getElementById("details-" + personId);
  if (
    detailsElement.style.display === "none" ||
    detailsElement.style.display == ""
  ) {
    detailsElement.style.display = "block";
  } else {
    detailsElement.style.display = "none";
  }
}

function displayPersonDetails() {
  var resultsContainer = document.getElementById("results-container");
  var personDetails =
    '<div class="person-card" onclick="toggleDetails(\'person1\')">' +
    "<strong>Person 1</strong>" +
    '<div id="details-person1" class="person-details">' +
    "<p><strong>Name:</strong> Neel Kachhia</p>" +
    "<p><strong>Age:</strong> 24</p>" +
    "<p><strong>Email:</strong> neel.kachhia13@gmail.com</p>" +
    "</div>" +
    "</div>" +
    '<div class="person-card" onclick="toggleDetails(\'person2\')">' +
    "<strong>Person 2</strong>" +
    '<div id="details-person2" class="person-details">' +
    "<p><strong>Name:</strong> Hemang Patel</p>" +
    "<p><strong>Age:</strong> 22</p>" +
    "<p><strong>Email:</strong> hemangpatel@gmail.com</p>" +
    "</div>" +
    "</div>";

  resultsContainer.innerHTML = personDetails;
}
