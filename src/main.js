// Example JavaScript file
import './styles/style.css';
import logo from './logo3.svg';

document.querySelector('#logo').src = logo



  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const hamburgerIcon = document.getElementById('hamburger-icon');
  const closeIcon = document.getElementById('close-icon');

  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    hamburgerIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
});


    // Countdown Target (set your launch date here)
    const launchDate = new Date("2025-06-15T12:00:00").getTime();

    function updateCountdown() {
      const now = new Date().getTime();
      const timeLeft = launchDate - now;

      const daysEl = document.getElementById("days");
      const hoursEl = document.getElementById("hours");
      const minutesEl = document.getElementById("minutes");
      const secondsEl = document.getElementById("seconds");

      if (timeLeft < 0) {
        daysEl.textContent = "00";
        hoursEl.textContent = "00";
        minutesEl.textContent = "00";
        secondsEl.textContent = "00";
        return;
      }

      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

      daysEl.textContent = String(days).padStart(2, "0");
      hoursEl.textContent = String(hours).padStart(2, "0");
      minutesEl.textContent = String(minutes).padStart(2, "0");
      secondsEl.textContent = String(seconds).padStart(2, "0");
    }

    setInterval(updateCountdown, 1000);
    window.onload = updateCountdown;

document.getElementById('sponsor-form').addEventListener('submit', async function (e) {
  e.preventDefault();

  // Clear previous error messages
  const errorMessages = document.querySelectorAll('.error-message');
  errorMessages.forEach(msg => msg.remove());

  const name = document.getElementById('sponsor-name').value.trim();
  const email = document.getElementById('sponsor-email').value.trim();
  const message = document.getElementById('sponsor-message').value.trim();
  const brand = document.getElementById('sponsor-brand').value.trim();
  const website = document.getElementById('sponsor-brand-website').value.trim();
  const phone = document.getElementById('sponsor-phone').value.trim();
  const coin = document.getElementById('sponsor-coin').value.trim();
  const region = document.getElementById('sponsor-region').value.trim();
  const plan = document.getElementById('sponsor-plan').value.trim();

  let hasErrors = false;

  // Helper function to display error messages
  function showError(inputId, message) {
    const input = document.getElementById(inputId);
    const error = document.createElement('div');
    error.className = 'error-message';
    error.textContent = message;
    input.parentNode.insertBefore(error, input.nextSibling);
    input.classList.add('input-error');
    hasErrors = true;
  }

  // Basic validation checks
  if (!name) showError('sponsor-name', 'Name is required.');
  if (!email) {
    showError('sponsor-email', 'Email is required.');
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showError('sponsor-email', 'Please enter a valid email address.');
  }

  if (hasErrors) return;

  try {
    const response = await fetch('/api/addSponsor', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message, brand, website, phone, coin, region, plan }),
    });

    if (response.ok) {
      alert('Thank you! Your sponsorship request has been submitted.');
      document.getElementById('sponsor-form').reset();
    } else {
      alert('There was an error submitting your request. Please try again later.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('There was an error submitting your request. Please try again later.');
  }
});

