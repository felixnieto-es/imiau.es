document.addEventListener('DOMContentLoaded', function() {  

    /* ---------------------- [HEADER & FOOTER] ---------------------- */
    const header = document.getElementById('header'); // Obtiene el elemento con ID 'header'
    const footer = document.getElementById('footer'); // Obtiene el elemento con ID 'footer'
  
    // Realiza una solicitud para obtener el contenido de 'header.html'
    fetch('header.html')
      .then(response => response.text()) // Convierte la respuesta en texto
      .then(data => {
          header.innerHTML = data; // Inserta el contenido en el elemento 'header'
      })
      .catch(error => console.error('Error loading header:', error)); // Maneja cualquier error

    // Realiza una solicitud para obtener el contenido de 'footer.html'
    fetch('footer.html')
      .then(response => response.text()) // Convierte la respuesta en texto
      .then(data => {
          footer.innerHTML = data; // Inserta el contenido en el elemento 'footer'
      })
      .catch(error => console.error('Error loading footer:', error)); // Maneja cualquier error

    /* ---------------------- [NAVBAR] ---------------------- */
    const observer = new MutationObserver((mutations, obs) => {
        const navMenu = document.querySelector('.menu');
        const navMenuSub = document.querySelector('.nav-menu');
        const navClose = document.querySelector('.nav-close');
        if (navMenu) {
            navMenu.addEventListener('click', (event) => {
                event.preventDefault();
                navMenuSub.classList.add('open');
            });
            navClose.addEventListener('click', (event) => {
                event.preventDefault();
                navMenuSub.classList.remove('open');
            });
            obs.disconnect(); // Deja de observar una vez que se ha encontrado el elemento
        }
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

    /* ---------------------- [FAQ] ---------------------- */
    // FAQ sistema de acordeón
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const answer = item.querySelector('.faq-answer');

        item.addEventListener('click', () => {
            // Cierra todas las respuestas abiertas
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    const otherAnswer = otherItem.querySelector('.faq-answer');
                    otherAnswer.classList.remove('open');
                }
            });

            // Abre o cierra la respuesta actual
            answer.classList.toggle('open');
        });
    });
});