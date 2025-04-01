//scripts.js

// JavaScript to handle the hamburger menu toggle
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    
    // Toggle the mobile menu when the checkbox is checked/unchecked
    menuToggle.addEventListener('change', () => {
      if (menuToggle.checked) {
        // Show the mobile menu
        mobileMenu.style.display = 'flex';
        // Add a class for hamburger icon transformation 
        hamburgerIcon.classList.add('active');
      } else {
        // Hide the mobile menu
        mobileMenu.style.display = 'none';
        // Remove the transformation class from hamburger icon
        hamburgerIcon.classList.remove('active');
      }
    });
  });
  



  // Active Page Highlighting for navbar menu 

// Get all navigation links
const navLinks = document.querySelectorAll('.nav-links a');

// Function to check active link
function highlightActiveLink() {
  let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

  navLinks.forEach(link => {
    const section = document.querySelector(link.getAttribute('href'));
    if (section.offsetTop <= scrollPosition + 60 && section.offsetTop + section.offsetHeight > scrollPosition) {
      link.classList.add('active'); // Add active class to the current section
    } else {
      link.classList.remove('active'); // Remove active class when not in view
    }
  });
}

// Run on scroll
window.addEventListener('scroll', highlightActiveLink);

// Run on load to ensure active link is set
document.addEventListener('DOMContentLoaded', highlightActiveLink);



  



// JavaScript for Modal Functionality
// JavaScript functionality to make sure the modal content is dynamically updated based on the project card clicked:
document.addEventListener('DOMContentLoaded', () => {
    // Select all the project cards
    const projectCards = document.querySelectorAll('.project-card');
    
    // Select the modal elements
    const modal = document.getElementById('project-modal');
    const modalContent = modal.querySelector('.modal-content');
    const closeButton = modal.querySelector('.close-btn');
    
    console.log("Project cards found:", projectCards.length); // Check if project cards are selected
  
    // Loop through each project card
    projectCards.forEach(card => {
      card.addEventListener('click', (event) => {
        console.log("Project card clicked:", card); // Verify the clicked card
  
        // Get the project data from the clicked card
        const title = card.getAttribute('data-title');
        const description = card.getAttribute('data-description');
        const imageSrc = card.getAttribute('data-image');
        const liveLink = card.getAttribute('data-live-link');
        const githubLink = card.getAttribute('data-github-link');
        
        console.log("Card data:", {
          title,
          description,
          imageSrc,
          liveLink,
          githubLink
        }); // Output card data
  
        // Populate the modal with the data
        modal.querySelector('.modal-img').src = imageSrc;
        modal.querySelector('.modal-img').alt = title + " Image";
        modal.querySelector('h3').textContent = title;
        modal.querySelector('p').textContent = description; 

// Get the CSS variable value
const pinkAccentColor = getComputedStyle(document.documentElement).getPropertyValue('--pink-accent-color').trim();

// Apply it to the modal paragraph dinamically 
modal.querySelector('p').style.color = pinkAccentColor;

modal.querySelector('p').textContent = description;
modal.querySelector('p').style.color = pinkAccentColor; // Apply color


        modal.querySelector('.live-link').href = liveLink;
        modal.querySelector('.github-link').href = githubLink;
        
        // Show the modal with a smooth transition
        modal.classList.add('open');
        console.log("Modal opened"); // Confirm modal opening
      });
    });
    
    // Close the modal when the close button is clicked
    closeButton.addEventListener('click', () => {
      modal.classList.remove('open');
      console.log("Modal closed"); // Confirm modal closure
    });
    
    // Close the modal if the overlay is clicked
    modal.querySelector('.modal-overlay').addEventListener('click', () => {
      modal.classList.remove('open');
      console.log("Modal closed by overlay click"); // Confirm closure by overlay
    });
  });
  



// JS: event listeners to the table rows (tr) that will change dinamically the background color when the user hovers over them.
const techTableRows = document.querySelectorAll('.tech-stack-table tbody tr');

techTableRows.forEach(row => {
    row.addEventListener('mouseover', () => {
        row.style.backgroundColor = '#E4F9F5'; // Light color when hovered
    });
    
    row.addEventListener('mouseout', () => {
        row.style.backgroundColor = ''; // Reset to original color when mouse leaves
    });
});




//JS code for random celebrity and programming quotes, jokes, etc from external API

document.addEventListener("DOMContentLoaded", () => {
    const quoteText = document.getElementById("quote-text");
    const quoteAuthor = document.getElementById("quote-author");
    const newQuoteBtn = document.getElementById("new-quote-btn");
  
    async function fetchQuote() {
        try {
          const response = await fetch("https://api.allorigins.win/get?url=" + encodeURIComponent("https://zenquotes.io/api/random"));
          if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
      
          const json = await response.json();
          const data = JSON.parse(json.contents); // Extract the actual data
      
          if (!data[0] || !data[0].q || !data[0].a) {
            throw new Error("Invalid data format received.");
          }
      
          document.getElementById("quote-text").textContent = `"${data[0].q}"`;
          document.getElementById("quote-author").textContent = `— ${data[0].a}`;
        } catch (error) {
          console.error("Error fetching quote:", error);
          document.getElementById("quote-text").textContent = "Failed to load quote. Please try again later.";
          document.getElementById("quote-author").textContent = "";
        }
      }      
      
  
    // Fetch a quote when the page loads
    fetchQuote();
  
    // Fetch a new quote on button click
    newQuoteBtn.addEventListener("click", fetchQuote);
  });
  
  






  // Javascript for contact me form validation
  // Get form and input elements
const form = document.getElementById('contact-form');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const message = document.getElementById('message');

// Error message elements
const firstNameError = document.getElementById('firstName-error');
const lastNameError = document.getElementById('lastName-error');
const emailError = document.getElementById('email-error');
const messageError = document.getElementById('message-error');

// Add event listeners for form submission
form.addEventListener('submit', function (event) {
  // Prevent the form from submitting
  event.preventDefault();
  
  // Validate all fields
  let isValid = true;

  // Validate First Name
  if (!firstName.value.match(/^[A-Za-z]+$/)) {
    firstNameError.textContent = 'First name must contain only letters.';
    firstName.classList.add('invalid');
    isValid = false;
  } else {
    firstNameError.textContent = '';
    firstName.classList.remove('invalid');
  }

  // Validate Last Name
  if (!lastName.value.match(/^[A-Za-z]+$/)) {
    lastNameError.textContent = 'Last name must contain only letters.';
    lastName.classList.add('invalid');
    isValid = false;
  } else {
    lastNameError.textContent = '';
    lastName.classList.remove('invalid');
  }

  // Validate Email
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!email.value.match(emailPattern)) {
    emailError.textContent = 'Please enter a valid email address.';
    email.classList.add('invalid');
    isValid = false;
  } else {
    emailError.textContent = '';
    email.classList.remove('invalid');
  }

  // Validate Message
  if (message.value.trim() === '') {
    messageError.textContent = 'Message cannot be empty.';
    message.classList.add('invalid');
    isValid = false;
  } else {
    messageError.textContent = '';
    message.classList.remove('invalid');
  }

  // If all fields are valid, submit the form
  if (isValid) {
    form.submit();  // This will submit the form
  }
});
