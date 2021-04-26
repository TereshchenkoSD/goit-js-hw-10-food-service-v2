const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};

const switchToggleref = document.querySelector("#theme-switch-toggle");

const bodyRef = document.querySelector("body");

bodyRef.classList.add(Theme.LIGHT);

switchToggleref.addEventListener("change", onSwitchTheme);

function onSwitchTheme(e) {
  if (e.target.id !== "theme-switch-toggle") {
    return;
  }
  bodyRef.classList.toggle(Theme.LIGHT);
  bodyRef.classList.toggle(Theme.DARK);

  onThemeSave(e);
}

function onThemeSave(e) {
  const switchStatus = e.target.checked;
  if (switchStatus === true) {
    localStorage.setItem("current theme", Theme.DARK);
  }

  if (switchStatus !== true) {
    localStorage.setItem("current theme", Theme.LIGHT);
  }
}

const savedTheme = localStorage.getItem("current theme");
if (savedTheme === Theme.DARK) {
  switchToggleref.checked = true;
  bodyRef.classList.add(Theme.DARK);
}
