document.addEventListener("DOMContentLoaded", function () {
  if (Notification.permission !== "granted") {
    Notification.requestPermission().then(function (permission) {
      if (permission === "granted") {
        // showNotification("Welcome!", "Thank you for granting permission.");
        let notification = new Notification(
          "Welcome to events of Career Connect",
          {
            body: "Thanks you for allowing our notifications.",
          }
        );
      } else {
        console.log("Permission denied for notifications");
        // alert(
        //   "Please allow notifications for this site. You can manage your settings in your browser."
        // );
      }
    });
  } else {
    console.log("permission already granted!");
  }
});

let notification, interval;
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") {
    let leaveDate = new Date();
    interval = setInterval(() => {
      notification = new Notification("Come back please!!!", {
        body: `You have been away since last ${Math.round(
          (new Date() - leaveDate) / 1000
        )} seconds.`,
        tag: "Come back",
      });
    }, 5000);
  } else {
    if (interval) clearInterval(interval);
    if (notification) notification.close();
  }
});

function toggleLikeDislike(iconId) {
  let likeIcon = document.getElementById(iconId);
  let dislikeIcon = document.getElementById(
    iconId.replace("thumsup", "thumbsdown")
  );

  if (likeIcon.style.display === "" || likeIcon.style.display === "block") {
    likeIcon.style.display = "none";
    dislikeIcon.style.display = "block";
  } else {
    likeIcon.style.display = "block";
    dislikeIcon.style.display = "none";
  }
}

function openPopup(headingText, eventData) {
  let popupContainer = document.getElementById("popupContainer");
  let popupHeading = document.getElementById("popupHeading");
  let popupText = document.getElementById("popupText");

  let imageUrl = "/images/";

  switch (headingText) {
    case "Academic Events":
      imageUrl += "Academic Events";
      break;
    case "Cultural and Arts Events":
      imageUrl += "Cultural and Arts Events";
      break;
    case "Sports Events":
      imageUrl += "Sports Events";
      break;
    case "Social and Networking Events":
      imageUrl += "Social and Networking Events";
      break;
    case "Educational Workshops and Training":
      imageUrl += "Educational Workshops and Training";
      break;
    case "Celebrations":
      imageUrl += "Celebrations";
      break;
    default:
      imageUrl = "";
      break;
  }

  if (imageUrl != "") {
    imageUrl += ".jpg";
    let popupImage = document.getElementById("popupImage");
    popupImage.src = imageUrl;
  }

  popupHeading.textContent = headingText;
  popupText.textContent = eventData;

  popupContainer.style.display = "block";
  document.body.style.overflow = "hidden";
}

function closePopup() {
  let popupContainer = document.getElementById("popupContainer");
  popupContainer.style.display = "none";
  let popupImage = document.getElementById("popupImage");
  popupImage.src = "";
  document.body.style.overflow = "auto";
}

document.addEventListener("DOMContentLoaded", function () {
  let headings = document.querySelectorAll(".eventinfoheading");
  headings.forEach(function (heading) {
    heading.addEventListener("click", function () {
      let eventData = heading.nextElementSibling.textContent;
      openPopup(heading.innerText, eventData);
    });
  });

  let closeButton = document.getElementById("closePopup");
  closeButton.addEventListener("click", closePopup);
});
