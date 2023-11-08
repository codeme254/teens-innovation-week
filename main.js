const headerNav = document.getElementById("header__nav");
const headerButton = document.getElementById("header__button");

headerButton.addEventListener("click", (e) => {
  e.preventDefault();
  headerNav.classList.toggle("nav_closed");

  if (headerNav.classList.contains("nav_closed")) {
    headerButton.innerHTML = `<svg>
        <use xlink:href="sprite.svg#icon-menu"></use>
      </svg>`;
  } else {
    headerButton.innerHTML = `<svg>
        <use xlink:href="sprite.svg#icon-cross"></use>
      </svg>`;
  }
});
