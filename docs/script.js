// script.js

document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio loaded!');

    // Highlight clicked buttons
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });

    // Smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Toggle dark mode
    const toggle = document.createElement('button');
    toggle.innerText = '🌙';
    toggle.style.position = 'fixed';
    toggle.style.top = '20px';
    toggle.style.right = '20px';
    toggle.style.zIndex = '1000';
    toggle.style.padding = '10px 10px';
    toggle.style.border = '1px solid #ccc';
    toggle.style.borderRadius = '5px';
    toggle.style.fontSize = '18px';
    toggle.style.cursor = 'pointer';
    toggle.style.transition = 'all 0.3s ease';

    function updateButtonStyle(isDark) {
        if (isDark) {
            toggle.innerText = '☀️';
            toggle.style.backgroundColor = '#222';
            toggle.style.color = '#f0f0f0';
            toggle.style.borderColor = '#555';
        } else {
            toggle.innerText = '🌙';
            toggle.style.backgroundColor = '#fff';
            toggle.style.color = '#222';
            toggle.style.borderColor = '#ccc';
        }
    }

    document.body.appendChild(toggle);
    updateButtonStyle(false); // suny 

    toggle.addEventListener('click', () => {
        const isDark = document.body.classList.toggle('dark-mode');
        updateButtonStyle(isDark);

        // Change URL based on dark mode state
        // if (isDark) {
        //    window.location.hash = "#theme=dark";
        // } else {
        //     window.location.hash = "";
        // }
    });

    // Scroll to top button visibility
    window.onscroll = function() {
        var scrollTopBtn = document.getElementById("scrollTopBtn");
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollTopBtn.style.display = "block";
        } else {
            scrollTopBtn.style.display = "none";
        }
    };

    // Scroll to top function
    document.getElementById("scrollTopBtn").onclick = function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Toggle navbar menu in mobile
    function toggleMenu() {
        var menu = document.querySelector('.navbar .menu');
        menu.classList.toggle('active');
    }
});


