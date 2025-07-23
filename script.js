const hero = document.querySelector('.hero');
const heroButton = document.querySelector('#hero-button');
const formTop = document.querySelector('.form-top');
const heroContact = document.querySelector('.hero-contact');
const heroContactForm = document.querySelector('.hero-contact-form');
const heroContactAbout = document.querySelector('.hero-contact-about');
const heroName = document.querySelector('.hero-name');
// Ensure DOM is fully loaded before running animations
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        const rows = document.querySelectorAll('.a-letter-con > div'); // Select all rows
        rows.forEach((row, index) => {
            setTimeout(() => {
                const rowElement = row; // Type assertion
                rowElement.style.opacity = "1"; // Make row visible
                rowElement.style.transform = "translateY(0)"; // Remove translate effect
            }, index * 250); // Stagger by 250ms for each row
        });
    }, 500); // Start after 500ms
});
// Flag to check if the initial position has been set
let initialized = false;
// Function to handle hero background movement
function heroBackgroundShift(event) {
    if (!hero)
        return; // Ensure hero exists
    const { left, top, width, height } = hero.getBoundingClientRect();
    const x = (event.clientX - left) / width;
    const y = (event.clientY - top) / height;
    const moveX = (x * 2 - 1) * -30; // Normalize and invert X
    const moveY = (y * 2 - 1) * -30; // Normalize and invert Y
    hero.style.backgroundPosition = `${50 + moveX}% ${50 + moveY}%`;
}
// Initialize background position on mouse enter
function initializeBackgroundPosition() {
    if (!initialized && hero) {
        hero.style.backgroundPosition = '50% 50%';
        initialized = true;
    }
}
// Reveal hero contact
function revealHeroContact() {
    if (heroContact && heroContactForm && heroContactAbout && heroName) {
        heroContact.style.opacity = "1";
        heroContact.style.pointerEvents = 'all';
        heroContactAbout.style.top = '0%';
        heroContactForm.style.top = '0%';
        heroName.style.opacity = "0";
        heroName.style.pointerEvents = 'none';
    }
}
// Close hero contact
function closeHeroContact() {
    if (heroContact && heroContactAbout && heroContactForm && heroName) {
        heroContact.style.opacity = "0";
        heroContact.style.pointerEvents = 'none';
        heroContactAbout.style.top = '-100%';
        heroContactForm.style.top = '100%';
        heroName.style.opacity = "1";
        heroName.style.pointerEvents = 'all';
    }
}
// Event listeners (check if elements exist before adding listeners)
if (hero) {
    hero.addEventListener('mouseenter', initializeBackgroundPosition);
    hero.addEventListener('mousemove', heroBackgroundShift);
}
if (heroButton) {
    heroButton.addEventListener('click', revealHeroContact);
}
// Ensure `formTop` exists before querying its button
const formTopButton = formTop === null || formTop === void 0 ? void 0 : formTop.querySelector('button');
if (formTopButton) {
    formTopButton.addEventListener('click', closeHeroContact);
}