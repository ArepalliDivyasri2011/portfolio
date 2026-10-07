/* =========================
   MOBILE MENU
========================= */

const menuIcon = document.querySelector(".menu-icon");
const navbar = document.querySelector(".navbar");

if (menuIcon && navbar) {

    menuIcon.addEventListener("click", () => {

        navbar.classList.toggle("active");

        const icon = menuIcon.querySelector("i");

        if (icon) {
            if (navbar.classList.contains("active")) {
                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");
            } else {
                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");
            }
        }

    });

}


/* =========================
   CLOSE MOBILE MENU
========================= */

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        if (navbar) {
            navbar.classList.remove("active");
        }

        const icon = menuIcon?.querySelector("i");

        if (icon) {
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        }

    });

});


/* =========================
   READ MORE / READ LESS
========================= */

const readMoreBtn = document.getElementById("readMoreBtn");
const moreAbout = document.getElementById("moreAbout");

if (readMoreBtn && moreAbout) {

    readMoreBtn.addEventListener("click", () => {

        const isOpen = moreAbout.classList.toggle("show");

        readMoreBtn.textContent = isOpen
            ? "Read Less"
            : "Read More";

    });

}


/* =========================
   ACTIVE NAVBAR ON SCROLL
========================= */

const sections = document.querySelectorAll("section");

function updateActiveNav() {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 180;
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

        if (
            current &&
            link.getAttribute("href") === "#" + current
        ) {
            link.classList.add("active");
        }

    });

}

window.addEventListener("scroll", updateActiveNav);

updateActiveNav();


/* =========================
   HEADER SHADOW
========================= */

const header = document.querySelector(".header");

function updateHeader() {

    if (!header) return;

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 5px 25px rgba(0, 0, 0, 0.25)";

    } else {

        header.style.boxShadow = "none";

    }

}

window.addEventListener("scroll", updateHeader);

updateHeader();


/* =========================
   SCROLL REVEAL
========================= */

const revealElements = document.querySelectorAll(
    ".section-title, " +
    ".about-text, " +
    ".skill-card, " +
    ".project-card, " +
    ".timeline-item, " +
    ".contact-info, " +
    ".contact-form"
);

if ("IntersectionObserver" in window) {

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "reveal",
                        "active"
                    );

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.15
        }
    );

    revealElements.forEach(element => {

        element.classList.add("reveal");

        revealObserver.observe(element);

    });

} else {

    // Fallback for older browsers

    revealElements.forEach(element => {

        element.classList.add(
            "reveal",
            "active"
        );

    });

}


/* =========================
   CONTACT FORM
========================= */

const contactForm = document.querySelector(".contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", () => {

        const button = contactForm.querySelector("button");

        if (button) {

            button.innerHTML =
                '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';

            button.disabled = true;

        }

    });

}


/* =========================
   SMOOTH SCROLL
========================= */

navLinks.forEach(link => {

    link.addEventListener("click", event => {

        const targetId = link.getAttribute("href");

        if (
            targetId &&
            targetId.startsWith("#")
        ) {

            const target = document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        }

    });

});


/* =========================
   ESC KEY CLOSE MENU
========================= */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        if (navbar) {
            navbar.classList.remove("active");
        }

        const icon = menuIcon?.querySelector("i");

        if (icon) {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    }

});