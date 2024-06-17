document.addEventListener("DOMContentLoaded", () => {
  const birthdaySong = document.getElementById("birthdaySong");
  const title = document.getElementById("title");
  const desc = document.getElementById("desc");
  const showImageBtn = document.getElementById("showImageBtn");
  const birthdayImage = document.getElementById("birthdayImage");
  const imageContainer = document.getElementById("imageContainer");

  title.innerText = "Miranda";

  desc.innerText =
    "Happy 20th Birthday!\nMay your special day be filled with joy and happiness.\nI hope you find happiness in the CHOICCE you have made and discover all the joy you seek.";

  // Menambahkan event listener untuk tombol "Click me"
  showImageBtn.addEventListener("click", () => {
    // Memulai pemutaran lagu hanya setelah interaksi pengguna
    if (birthdaySong.paused) {
      birthdaySong.play().catch((error) => {
        console.error("Failed to play the birthday song:", error);
      });
    }

    // Menampilkan gambar dan overlay
    imageContainer.style.display = "flex"; // Menampilkan kontainer overlay
    birthdayImage.style.display = "block"; // Menampilkan gambar ulang tahun
  });
});
