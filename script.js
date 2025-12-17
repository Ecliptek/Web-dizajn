
const cards = document.querySelectorAll('.card');

const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "all 0.6s ease-out";
    observer.observe(card);
});

// Gumb za interakciju
document.querySelectorAll('.view-code-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        alert("Ovdje možeš dodati modal ili toggle za prikaz koda!");
    });
});