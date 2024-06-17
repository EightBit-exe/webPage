// Simulate data loading or processing
setTimeout(function () {
  // Hide the loader
  document.querySelector(".loader").style.display = "none";

  // Show the animated content
  document.querySelector(".content").classList.remove("hidden");

  // GSAP animation setup
  gsap.to(".item", {
    y: "+=100", // Example animation, adjust as per your requirement
    duration: 2,
    repeat: -1, // Infinite repeat
    yoyo: true, // Alternate direction animation
    ease: "power1.inOut", // Easing function
  });
}, 2000); // Simulated 2-second delay for demonstration purposes

// Display loader immediately when the script starts
document.querySelector(".loader").style.display = "block";
