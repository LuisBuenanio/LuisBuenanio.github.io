document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    // Form validation
    const form = document.querySelector('form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('mensaje').value.trim();

        if (!name || !email || !message) {
            alert('Todos los campos son obligatorios.');
            return;
        }

        if (!validateEmail(email)) {
            alert('Por favor, introduce un email válido.');
            return;
        }

        // Si la validación es exitosa, enviar el formulario (simulado aquí)
        alert('Formulario enviado exitosamente.');
        form.reset();
    });

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(String(email).toLowerCase());
    }
});
