document.addEventListener("DOMContentLoaded", () => {
  function setTheme(oldTheme, newTheme) {
    localStorage.setItem("theme", newTheme);
    document.querySelector("html").setAttribute("data-theme", newTheme);
  }

  function swapTheme() {
    const oldTheme = localStorage.getItem("theme");
    setTheme(oldTheme, oldTheme === "dark" ? "light" : "dark");
  }

  const match = window.matchMedia("(prefers-color-scheme: dark)");
  (function () {
    const storedTheme =
      localStorage.getItem("theme") ?? match.matches ? "dark" : "light";
    setTheme(storedTheme, storedTheme);
  })();

  // Listen for changes to the user's color scheme preference
  match.addEventListener("change", (e) => {
    const newColorScheme = e.matches ? "dark" : "light";
    const storedTheme = localStorage.getItem("theme");
    if (!storedTheme || storedTheme !== newColorScheme) swapTheme();
  });

  const themeButton = document.querySelector("#theme-button");
  themeButton.addEventListener("click", swapTheme);
});
