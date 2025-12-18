document.addEventListener('DOMContentLoaded', () => {
    
   
    const buttons = document.querySelectorAll('.view-code-btn');

    buttons.forEach(btn => {
        btn.addEventListener('click', function() {
            const drawer = this.nextElementSibling;
            
            
            drawer.classList.toggle('open');
            
           
            this.classList.toggle('active');

          
            if (drawer.classList.contains('open')) {
                this.textContent = "Zatvori kod";
            } else {
                this.textContent = "Prikaži kod";
            }
        });
    });

    
    const cards = document.querySelectorAll('.card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(40px)";
        card.style.transition = "all 0.8s ease-out";
        observer.observe(card);
    });
});