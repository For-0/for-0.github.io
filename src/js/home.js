addEventListener("DOMContentLoaded", () => {
    document.getElementById("down-to-second-page").addEventListener("click", () => document.getElementById("second-page").scrollIntoView({ behavior: "smooth" }));
});