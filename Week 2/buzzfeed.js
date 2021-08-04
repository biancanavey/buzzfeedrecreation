// ===== Scroll to Top ====
// window.scroll(function () {
//   if ($(this).scrollTop() >= 50) {
//     // If page is scrolled more than 50px
//     "#return-to-top".fadeIn(200); // Fade in the arrow
//   } else {
//     "#return-to-top".fadeOut(200); // Else fade out the arrow
//   }
// });
// "#return-to-top".click(function () {
//   // When arrow is clicked
//   "body,html".animate(
//     {
//       scrollTop: 0, // Scroll to top of body
//     },
//     500
//   );
// });

// ==== Hamburger Menu ===

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navItems = document.querySelectorAll(".nav-item");

console.log(hamburger);
hamburger.addEventListener("click", openHamburgerMenu);
hamburger.addEventListener("click", openHamburgerItem);

function openHamburgerMenu() {
  if (navMenu.style.display === "none") {
    navMenu.style.display = "block";
  } else {
    navMenu.style.display = "none";
  }
}

function openHamburgerItem() {
  navItems.forEach((navItem) => {
    if (navItem.style.display === "none") {
      navItem.style.display = "block";
    } else {
      navItem.style.display = "none";
    }
  });
}

// === End of Hamburger Menu ===
