console.log("Portfolio loaded successfully!");
// HAMBURGER MENU //
function toggleMenu() {
  const nav = document.getElementById("myNavbar");

  if (nav.className === "navbar") {
    nav.className += " responsive";
  } else {
    nav.className = "navbar";
  }
}
// SKILLS CLICK INTERACTION//
const skills = document.querySelectorAll(".skills li");

skills.forEach(skill => {
  skill.addEventListener("click", () => {
    alert("You clicked: " + skill.textContent);
  });
});