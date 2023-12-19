// document.addEventListener("DOMContentLoaded", function() {
//     const mobileMenuButton = document.getElementById('mobile-menu');
//     const navLinks = document.querySelector('.nav-links');

//     if (mobileMenuButton) {
//         mobileMenuButton.addEventListener('click', function() {
//             navLinks.classList.toggle('active');
//         });
//     }
// });

document.body.addEventListener('click', function(event) {
    if (event.target.closest('#mobile-menu')) {
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.toggle('active');
    }
});
