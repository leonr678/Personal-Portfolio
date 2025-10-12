document.addEventListener("DOMContentLoaded", () => {		// runs once all html is loaded

  const navBarLinks = document.querySelectorAll("nav ul li a");	   // get all links in navbar into list
  const currentPage = window.location.pathname.split("/").pop();    // current html file active

  navBarLinks.forEach(link => {
    const linkPage = link.getAttribute("href");
    if (linkPage === currentPage) {	// if link in navbar is current page, set active (styled in css)
      link.classList.add("active");
    }
  });

  const nav = document.querySelector("nav");	 //gets navbar
  window.addEventListener("scroll", () => {	// activates when user scrolls
    if (window.scrollY > 30) {		// scrolled down more than 30 pixels, add scrolled class
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");    //if you scroll back up to top remove scrolled class
    }
  });

  const fadeTarget = document.querySelectorAll(".main-container, .game-card, .about-me, .intro-projects, footer");  // elements to fade in

  const observer = new IntersectionObserver(		// feature that watches when elements enter or leave
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {		// if element enters frame that user sees, add fade-in class
          entry.target.classList.add("fade-in");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }		// start fade when 15% of element visible 
  );

  fadeTarget.forEach(el => observer.observe(el)); 		// watches for visibility changes


  const navToggle = document.querySelector(".nav-toggle");  	// menu toggle on phone/tab screen
  if (navToggle) {
    navToggle.addEventListener("click", () => {		// click event listener to hamburger icon
      document.querySelector("nav ul").classList.toggle("show-nav");  //shows nav bar list
      navToggle.classList.toggle("open");
    });
  }

  const profilePic = document.querySelector(".profile-pic");	// get profile pic
  if (profilePic) {
    profilePic.addEventListener("mouseenter", () => {		// on hover make bigger and rotate
      profilePic.style.transition = "transform 0.4s ease";
      profilePic.style.transform = "scale(1.03) rotate(1deg)";
    });
    profilePic.addEventListener("mouseleave", () => {		// bring back to original state
      profilePic.style.transform = "scale(1) rotate(0deg)";
    });
  }
});