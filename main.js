const headerNav = document.getElementById("header__nav");
const headerButton = document.getElementById("header__button");
const headerNavLinks = document.querySelectorAll(".header__nav--link");

const changeMenuIcon = () => {
  if (headerNav.classList.contains("nav_closed")) {
    headerButton.innerHTML = `<svg>
        <use xlink:href="sprite.svg#icon-menu"></use>
      </svg>`;
  } else {
    headerButton.innerHTML = `<svg>
        <use xlink:href="sprite.svg#icon-cross"></use>
      </svg>`;
  }
};

headerButton.addEventListener("click", (e) => {
  e.preventDefault();
  headerNav.classList.toggle("nav_closed");
  changeMenuIcon();
});

headerNavLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    headerNav.classList.add("nav_closed");
    const targetId = link.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
      });
    }
    changeMenuIcon();
  });
});
