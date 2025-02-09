document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.scroll-to');

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); 

            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (!targetElement) {
                return;
            }

            const navbarHeight = document.querySelector('nav').offsetHeight;

            window.scrollTo({
                top: targetElement.offsetTop - navbarHeight, 
                behavior: 'smooth' 
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.read-more-btn');
    const servicesSection = document.getElementById('services');
    const image = document.querySelector('.services-image img'); 
    const navbar = document.querySelector('nav');

    function toggleDescription(button) {
        const card = button.closest('.service-card');
        const fullDescription = card.querySelector('.full-description');
        const isExpanded = fullDescription.style.display === 'block';

        if (isExpanded) {
            fullDescription.style.display = 'none';
            button.textContent = 'Pročitaj više';
            
            servicesSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

            window.scrollTo({
                top: servicesSection.offsetTop - navbar.offsetHeight,
                behavior: 'smooth'
            });
        } else {
            document.querySelectorAll('.full-description').forEach(desc => {
                desc.style.display = 'none';
            });
            document.querySelectorAll('.read-more-btn').forEach(btn => {
                btn.textContent = 'Pročitaj više';
            });

            fullDescription.style.display = 'block';
            button.textContent = 'Sakrij'; 

            fullDescription.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }
    }

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            toggleDescription(button);
        });
    });
});

















