const menuIcon = document.querySelector(".menu-icon");
const navbar = document.querySelector(".navbar");

if (menuIcon) {

    menuIcon.addEventListener("click", () => {

        navbar.classList.toggle("active");

        const icon = menuIcon.querySelector("i");

        if (navbar.classList.contains("active")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");
        } else {
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        }

    });

}


/* ================= CLOSE MENU ================= */

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

        const icon = menuIcon?.querySelector("i");

        if (icon) {
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        }

    });

});


/* ================= READ MORE ================= */

const readMoreBtn = document.getElementById("readMoreBtn");
const moreAbout = document.getElementById("moreAbout");

if (readMoreBtn && moreAbout) {

    readMoreBtn.addEventListener("click", () => {

        moreAbout.classList.toggle("show");

        if (moreAbout.classList.contains("show")) {

            readMoreBtn.textContent = "Read Less";

        } else {

            readMoreBtn.textContent = "Read More";

        }

    });

}


/* ================= ACTIVE NAVBAR ================= */

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            current = section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/* ================= HEADER SHADOW ================= */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 5px 25px rgba(0, 0, 0, 0.25)";

    } else {

        header.style.boxShadow = "none";

    }

});


/* ================= SCROLL REVEAL ================= */

const revealElements = document.querySelectorAll(
    ".section-title, .about-text, .skill-card, .project-card, .timeline-item, .contact-info, .contact-form"
);

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("reveal");

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* ================= CONTACT FORM ================= */

const contactForm = document.querySelector(".contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", () => {

        const button = contactForm.querySelector("button");

        if (button) {

            button.innerHTML =
                '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';

        }

    });

}