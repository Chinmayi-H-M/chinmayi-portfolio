const toggleBtn = document.getElementById("themeToggle");

// Load saved theme on page load
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    toggleBtn.textContent = "☀️ Light";
}

// Toggle theme on click
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
        toggleBtn.textContent = "☀️ Light";
    } else {
        localStorage.setItem("theme", "light");
        toggleBtn.textContent = "🌙 Dark";
    }
});
