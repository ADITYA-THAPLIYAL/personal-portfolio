document.addEventListener("DOMContentLoaded", function() {
    const navItems = document.querySelectorAll(".nav_item a");

    navItems.forEach(item => {
        item.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                const offsetTop = targetSection.offsetTop;
                window.scrollTo({
                    top: offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });
});
