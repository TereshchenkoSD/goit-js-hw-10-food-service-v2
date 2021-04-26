import menuCardTp from "../templates/menu-card.hbs";
import menu from "./../menu.json";

const menuContainer = document.querySelector(".js-menu");

function createMenuCardsMarkup(menu) {
  return menuCardTp(menu);
}

const menuCardsMarkup = createMenuCardsMarkup(menu);

menuContainer.insertAdjacentHTML("afterbegin", menuCardsMarkup);
