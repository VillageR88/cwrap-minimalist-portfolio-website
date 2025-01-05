const aboutMeButton = document.getElementById("button-about-me");
aboutMeButton.addEventListener("click", () => {
  window.scrollTo({
    top: 850, // Adjust this value as needed
    behavior: "smooth",
  });
});
