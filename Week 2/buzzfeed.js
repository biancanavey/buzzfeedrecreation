// ===== Scroll to Top ====
 window.scroll(function () {
   if ($(this).scrollTop() >= 50) {
    "#return-to-top".fadeIn(200); 
   } else {
     "#return-to-top".fadeOut(200); 
   }
 });
 "#return-to-top".click(function () {
   "body,html".animate(
     {
       scrollTop: 0, 
     },
     500
   );
 });

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
