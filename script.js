const title = document.getElementById("title");
const desc = document.getElementById("desc");
const showImageBtn = document.getElementById("showImageBtn");
const birthdayImage = document.getElementById("birthdayImage");
const birthdaySong = document.getElementById("birthdaySong");

title.innerText = "Miranda";

desc.innerText =
  "Happy 20th Birthday!\nMay your special day be filled with joy and happiness.\nI hope you find happiness in the CHOICE you have made and discover all the joy you seek.";

showImageBtn.addEventListener("click", () => {
  // Show the birthday image
  birthdayImage.style.display = "block";
  // Play the birthday song
  birthdaySong.play();
});
