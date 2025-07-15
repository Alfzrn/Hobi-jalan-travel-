document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("container");

  document.getElementById("register").addEventListener("click", () => {
    container.classList.add("right-panel-active");
    console.log("Overlay moved to the right."); // Debug log
  });

  document.getElementById("login").addEventListener("click", () => {
    container.classList.remove("right-panel-active");
    console.log("Overlay moved to the left."); // Debug log
  });
});
