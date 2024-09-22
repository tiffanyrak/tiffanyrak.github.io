document.querySelectorAll('.accordion').forEach(button => {
    button.addEventListener('click', () => {
        // Toggle active class
        button.classList.toggle('active');
        
        // Get the associated panel
        const panel = button.nextElementSibling;

        // Toggle the panel's display
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
});
