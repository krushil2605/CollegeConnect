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
  var likeIcon = document.getElementById(iconId);
  var dislikeIcon = document.getElementById(
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
