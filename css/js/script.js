document.addEventListener("DOMContentLoaded", () => {

    // CONTACT FORM (safe check)
    const form = document.getElementById("contactForm");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const messageBox = document.getElementById("message");

            if (messageBox) {
                messageBox.innerHTML = "<h3>Message Sent Successfully!</h3>";
            }

            form.reset();
        });
    }

    // PAGE TRANSITION
    const links = document.querySelectorAll("a");

    links.forEach(link => {
        link.addEventListener("click", function (e) {

            const href = this.getAttribute("href");

            if (!href || href.startsWith("#") || href.startsWith("http")) return;

            e.preventDefault();
            document.body.classList.add("page-exit");

            setTimeout(() => {
                window.location.href = href;
            }, 300);
        });
    });

    // LOGO ANIMATION
    const logo = document.querySelector(".logo-img");

    if (logo) {
        logo.addEventListener("click", () => {
            logo.classList.add("pop");

            setTimeout(() => {
                logo.classList.remove("pop");
            }, 500);
        });
    }

});