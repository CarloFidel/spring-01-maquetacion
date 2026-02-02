/* ------------------------------------------------------------
                        ACORDEON 
------------------------------------------------------------*/

const acordeon = document.querySelectorAll(".acordeon-item");

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

const listaFeaturesFirst = listaFeatures[0].querySelector(".elem-barra");
listaFeaturesFirst.classList.add("barra-active");

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

// ...existing code...

/* ------------------------------------------------------------
                          SLIDE 
------------------------------------------------------------*/
const btnAll = document.querySelectorAll(".featureList");
const slide = document.querySelector(".slider");

let current = "btn-01";

btnAll.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const idElement = e.target.id;
    const cases = `from ${current} to ${idElement}`;

    if (idElement === current) return;
    operateCases(cases);

    current = idElement;
  });
});

function operateCases(cases) {
  switch (cases) {
    case `from btn-01 to btn-02`:
      cleanClasses();
      slide.classList.add("back-One");
      break;
    case `from btn-01 to btn-03`:
      cleanClasses();
      slide.classList.add("foward-Two");
      break;
    case `from btn-02 to btn-03`:
      cleanClasses();
      slide.classList.add("foward-Two");
      break;
    case `from btn-02 to btn-01`:
      cleanClasses();
      slide.classList.add("foward-One");
      break;
    case `from btn-03 to btn-01`:
      cleanClasses();
      slide.classList.add("foward-One");
      break;
    case `from btn-03 to btn-02`:
      cleanClasses();
      slide.classList.add("back-One");
      break;
    default:
      break;
  }
}

function cleanClasses() {
  slide.classList.remove("foward-One");
  slide.classList.remove("foward-Two");
  slide.classList.remove("back-One");
  slide.classList.remove("back-Two");
}
