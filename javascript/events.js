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
