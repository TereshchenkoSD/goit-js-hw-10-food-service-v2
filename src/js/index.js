// import menuCardTp from "../templates/menu-card.hbs";
import menuCardsTp from "../templates/menu-cards.hbs";
import menu from "./menu.json";

const menuContainer = document.querySelector(".js-menu");

const switchToggleref = document.querySelector("#theme-switch-toggle");

const bodyRef = document.querySelector("body");

const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};

function createMenuCardsMarkup(menu) {
  return menu.map(menuCardsTp).join("");
}

const menuCardsMarkup = createMenuCardsMarkup(menu);

menuContainer.insertAdjacentHTML("afterbegin", menuCardsMarkup);

switchToggleref.addEventListener("change", onSwitchTheme);

function onSwitchTheme(e) {
  if (e.target.id !== "theme-switch-toggle") {
    return;
  }
  bodyRef.classList.toggle(Theme.DARK);
}
