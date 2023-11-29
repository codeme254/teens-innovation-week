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

const toggleNav = (e) => {
  e.preventDefault();
  headerNav.classList.toggle("nav_closed");
  changeMenuIcon();
}
headerButton.addEventListener("click", (e) => {
  toggleNav(e);
});
headerButton.addEventListener("touchstart", toggleNav);

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

// carousel
const carousel = document.querySelector(".carousel");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentIndex = 0;
const items = document.querySelectorAll(".carousel-item");
const totalItems = items.length;

function showItem(index) {
  const offset = -index * 100;
  carousel.style.transform = `translateX(${offset}%)`;
}

function goToNext() {
  currentIndex = (currentIndex + 1) % totalItems;
  showItem(currentIndex);
}

function goToPrev() {
  currentIndex = (currentIndex - 1 + totalItems) % totalItems;
  showItem(currentIndex);
}

nextBtn.addEventListener("click", goToNext);
prevBtn.addEventListener("click", goToPrev);
