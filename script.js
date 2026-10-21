
"use strict";

/*
 * GaragePro Kenya MVP
 * Website concept by MagiVibe 🇰🇪🔥
 *
 * DEMO NOTE:
 * Replace the WhatsApp placeholder with the real
 * garage owner's WhatsApp number before launch.
 */

const CONFIG = {
    // Replace this with the real business WhatsApp number.
    // Kenya example format: 2547XXXXXXXX
    whatsappNumber: "254717452095",

    // Keep false until the real number has been configured.
    whatsappEnabled: true
};


// ---------------------------------------------
// MOBILE NAVIGATION
// ---------------------------------------------

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
        const isOpen = mainNav.classList.toggle("open");

        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );

        menuToggle.textContent = isOpen ? "✕" : "☰";
    });

    // Close the menu after selecting a navigation link.
    mainNav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            mainNav.classList.remove("open");

            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation menu");
            menuToggle.textContent = "☰";
        });
    });

    // Close the mobile menu when the user presses Escape.
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            mainNav.classList.remove("open");

            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation menu");
            menuToggle.textContent = "☰";
        }
    });
}


// ---------------------------------------------
// FOOTER YEAR
// ---------------------------------------------

const currentYear = document.getElementById("currentYear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}


// ---------------------------------------------
// DATE VALIDATION
// ---------------------------------------------

const dateInput = document.getElementById("date");

if (dateInput) {
    const today = new Date();
    const localToday = new Date(
        today.getTime() - today.getTimezoneOffset() * 60000
    )
        .toISOString()
        .split("T")[0];

    dateInput.min = localToday;
}


// ---------------------------------------------
// WHATSAPP SERVICE ENQUIRY
// ---------------------------------------------

const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        if (!contactForm.reportValidity()) {
            return;
        }

        const customerName = document
            .getElementById("customerName")
            .value.trim();

        const phone = document
            .getElementById("phone")
            .value.trim();

        const vehicle = document
            .getElementById("vehicle")
            .value.trim();

        const service = document
            .getElementById("service")
            .value;

        const preferredDate = document
            .getElementById("date")
            .value;

        const message = document
            .getElementById("message")
            .value.trim();

        // Build a readable enquiry message.
        const enquiry = [
            "Hello GaragePro Kenya!",
            "",
            "I would like to enquire about a vehicle service.",
            "",
            `Name: ${customerName}`,
            `Phone: ${phone}`,
            `Vehicle: ${vehicle}`,
            `Service required: ${service}`,
            `Preferred date: ${preferredDate || "Not specified"}`,
            `Vehicle issue: ${message || "Not specified"}`,
            "",
            "Please let me know the next steps.",
            "",
            "Sent through the GaragePro Kenya website."
        ].join("\n");

        // Never send enquiries to the placeholder number.
        if (
            !CONFIG.whatsappEnabled ||
            !/^254\d{9}$/.test(CONFIG.whatsappNumber)
        ) {
            if (formStatus) {
                formStatus.textContent =
                    "Demo mode: your form works, but WhatsApp is not connected yet.Configure the real business number before launch.";

                formStatus.style.color = "#ffb454";
            }

            console.log("Demo enquiry prepared:", enquiry);
            return;
        }

        const whatsappURL =
            "https://wa.me/" +
            CONFIG.whatsappNumber +
            "?text=" +
            encodeURIComponent(enquiry);

        if (formStatus) {
            formStatus.textContent =
                "Opening WhatsApp so you can send your enquiry...";

            formStatus.style.color = "#70df9a";
        }

        // Open WhatsApp in a new tab or app.
        const whatsappWindow = window.open(
            whatsappURL,
            "_blank",
            "noopener,noreferrer"
        );

        if (!whatsappWindow && formStatus) {
            formStatus.innerHTML =
                'WhatsApp did not open. <a href="' +
                whatsappURL +
                '" target="_blank" rel="noopener noreferrer">Click here to continue.</a>';

            formStatus.style.color = "#ffb454";
        }
    });
}