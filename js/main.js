document.addEventListener('DOMContentLoaded', () => {
    /*===== Resize Navbar on Scroll =====*/
    const navbar = document.querySelector(".navbar");
    if (navbar) {
        window.onscroll = () => {
            window.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
        };
    }

    /*===== Nav Toggler =====*/
    const navMenu = document.querySelector(".menu");
    const navToggle = document.querySelector(".menu-btn");
    if (navToggle && navMenu) {
        navToggle.addEventListener("click", () => {
            navMenu.classList.toggle("active");
        });
    }

    // Closing menu when a link is clicked
    const navLinks = document.querySelectorAll(".nav-link");
    if (navMenu) {
        navLinks.forEach(n => n.addEventListener("click", () => {
            navMenu.classList.remove("active");
        }));
    }

    /*===== Scroll Section Active Link =====*/
    const sections = document.querySelectorAll('section[id]');
    function scrollActive() {
        const scrollY = window.pageYOffset;
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 50;
            const sectionId = current.getAttribute('id');
            const link = document.querySelector('.links a[href*=' + sectionId + ']');
            if (link) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            }
        });
    }
    window.addEventListener('scroll', scrollActive);

    /*===== Skills Animation =====*/
    const skillsWrap = document.querySelector(".about-skills");
    const skillsBar = document.querySelectorAll(".progress-line");
    if (skillsWrap) {
        window.addEventListener("scroll", () => {
            skillsEffect();
        });

        function checkScroll(el) {
            let rect = el.getBoundingClientRect();
            return window.innerHeight >= rect.top + el.offsetHeight;
        }

        function skillsEffect() {
            if (!checkScroll(skillsWrap)) return;
            skillsBar.forEach(skill => {
                skill.style.width = skill.dataset.progress;
            });
        }
    }
});
