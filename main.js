// Toggle mobile navigation menu
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

if (menuBtn && navLinks) {
  const menuBtnIcon = menuBtn.querySelector("i");

  // Toggle the nav menu open/close on button click
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
  });

  // Close the nav menu when a link is clicked (for mobile)
  navLinks.addEventListener("click", (event) => {
    if (event.target.tagName === "A") {
      navLinks.classList.remove("open");
      menuBtnIcon.setAttribute("class", "ri-menu-line");
    }
  });
}


function countdownTimer() {
  const eventDate = new Date("Jan 25, 2025 15:00:00").getTime();
  const interval = setInterval(function () {
    const now = new Date().getTime();
    const timeLeft = eventDate - now;

    if (timeLeft < 0) {
      clearInterval(interval);
      const countdownElement = document.getElementById("countdown-timer");
      if (countdownElement) {
        countdownElement.innerHTML = "The event has started!";
      }
      return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
  }, 1000);
}

countdownTimer();

// ScrollReveal Configuration
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// Ensure ScrollReveal exists before using it
if (typeof ScrollReveal !== "undefined") {
  // header container
  ScrollReveal().reveal(".header__container .section__subheader", { ...scrollRevealOption });
  ScrollReveal().reveal(".header__container h1", { ...scrollRevealOption, delay: 500 });
  ScrollReveal().reveal(".header__container .btn", { ...scrollRevealOption, delay: 1000 });

  // room container
  ScrollReveal().reveal(".room__card", { ...scrollRevealOption, interval: 500 });

  // feature container
  ScrollReveal().reveal(".feature__card", { ...scrollRevealOption, interval: 500 });

  // news container
  ScrollReveal().reveal(".news__card", { ...scrollRevealOption, interval: 500 });
}

// Get the modals
const participantModal = document.getElementById('participant-form-modal');
const stallModal = document.getElementById('stall-form-modal');

// Get the buttons that open the modals
const openParticipantBtn = document.getElementById('open-participant-form');
const openStallBtn = document.getElementById('open-stall-form');

// Get the <span> elements that close the modals
const closeParticipantBtn = document.getElementById('close-participant-form');
const closeStallBtn = document.getElementById('close-stall-form');

// When the user clicks the button, open the participant modal
openParticipantBtn.addEventListener('click', function () {
  participantModal.style.display = 'block';
});

// When the user clicks the button, open the stall modal
openStallBtn.addEventListener('click', function () {
  stallModal.style.display = 'block';
});

// When the user clicks on <span> (x), close the participant modal
closeParticipantBtn.addEventListener('click', function () {
  participantModal.style.display = 'none';
});

// When the user clicks on <span> (x), close the stall modal
closeStallBtn.addEventListener('click', function () {
  stallModal.style.display = 'none';
});

// When the user clicks outside the modal content, close the modals
window.addEventListener('click', function (event) {
  if (event.target === participantModal) {
    participantModal.style.display = 'none';
  }
  if (event.target === stallModal) {
    stallModal.style.display = 'none';
  }
});
