/* ------------------------------------------------------------
                        ACORDEON 
------------------------------------------------------------*/

const acordeon = document.querySelectorAll("#acordeonItem");

function cleanEvent(panelToShow) {
  const panels = document.querySelectorAll(".panel");
  const wasActive = panelToShow.classList.contains("active");

  panels.forEach((panel) => {
    panel.classList.remove("active");
    panel.classList.add("not-active");
  });

  return !wasActive;
}

function showContent(panel) {
  if (!cleanEvent(panel)) return;

  setTimeout(() => {
    panel.classList.remove("not-active");
    panel.classList.add("active");
  }, 200);
}

acordeon.forEach((tap) => {
  const panel = tap.children[1];
  tap.addEventListener("click", () => showContent(panel));
});

/* ------------------------------------------------------------
                          BARRA 
------------------------------------------------------------*/

const listaFeatures = document.querySelectorAll(".featureList");
const slideFeatureImg = document.querySelector(".slider-container");

function cleanEventBar() {
  listaFeatures.forEach((item) => {
    const barra = item.querySelector(".elem-barra");
    barra.classList.remove("barra-active");
  });
}

function handleClick(item) {
  cleanEventBar();
  const barra = item.querySelector(".elem-barra");
  barra.classList.remove("barra-active");
  barra.classList.add("barra-active");
}

listaFeatures.forEach((item) => {
  item.addEventListener("click", () => handleClick(item));
});

/* ------------------------------------------------------------
                          MENU 
------------------------------------------------------------*/
const menuBtn = document.querySelector(".menu-btn");
const menuSection = document.querySelector(".section-menu");
const menuCloseBtn = document.querySelector(".menu-close-btn");

function handleClickOpenMenu() {
  menuSection.classList.add("menu-open");
}
menuBtn.addEventListener("click", handleClickOpenMenu);

function handleClickCloseMenu() {
  menuSection.classList.remove("menu-open");
}
menuCloseBtn.addEventListener("click", handleClickCloseMenu);
