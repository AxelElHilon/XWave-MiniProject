document.addEventListener('DOMContentLoaded', () => {
    // Menú Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Mostrar Modal
    const buyButton = document.getElementById('buy-button');
    const modal = document.getElementById('modal');
    const closeModalButton = document.getElementById('close-modal');
    const goToCheckoutButton = document.getElementById('go-to-checkout');
    const checkoutSection = document.getElementById('checkout');

    buyButton.addEventListener('click', () => {
        modal.style.display = 'flex'; // Mostrar modal
    });

    closeModalButton.addEventListener('click', () => {
        modal.style.display = 'none'; // Cerrar modal
    });

    goToCheckoutButton.addEventListener('click', () => {
        modal.style.display = 'none'; // Cerrar modal
        checkoutSection.scrollIntoView({ behavior: 'smooth' }); // Ir a la sección de checkout
    });
});
