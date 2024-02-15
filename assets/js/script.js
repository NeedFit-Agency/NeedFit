'use strict';



/**
 * add Event on elements
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);



/**
 * header & back top btn show when scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const headerActive = function () {
  if (window.scrollY > 80) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

document.addEventListener("DOMContentLoaded", function() {
  const buttons = document.querySelectorAll('.filter-btn');
  const projects = document.querySelectorAll('.project-card');

  // Hide all projects except the first one
  projects.forEach((project, index) => {
    if (index !== 0) {
      project.style.display = 'none';
    }
  });

  buttons.forEach((button, index) => {
    button.addEventListener('click', function() {
      const projectId = this.getAttribute('data-filter-btn');

      // Remove active class from all buttons
      buttons.forEach(btn => btn.classList.remove('active'));
      // Add active class to the clicked button
      this.classList.add('active');

      // Hide all projects
      projects.forEach(project => project.style.display = 'none');

      // Show the project corresponding to the clicked button
      const selectedProject = document.getElementById(projectId);
      if (selectedProject) {
        selectedProject.style.display = 'block';
      }
    });
  });

  // Event listener to remove active class when clicking on project card
  projects.forEach(project => {
    project.addEventListener('click', function() {
      // Remove active class from all projects
      projects.forEach(proj => proj.classList.remove('active'));
      // Add active class to the clicked project
      this.classList.add('active');
    });
  });
});





addEventOnElem(window, "scroll", headerActive);