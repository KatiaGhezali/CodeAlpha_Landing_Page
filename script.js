document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.menu-btn');
    const sidebar = document.querySelector('.sidebar');
    const closeBtn = document.querySelector('#close-btn'); 

    menuBtn.addEventListener('click', function() {
        sidebar.classList.toggle('active');
    });
    
    closeBtn.addEventListener('click', function() {
        sidebar.classList.toggle('active');
    });

    window.addEventListener('resize', function() {
        if (window.innerWidth > 960) {
            sidebar.classList.remove('active');
        }
    });
});
