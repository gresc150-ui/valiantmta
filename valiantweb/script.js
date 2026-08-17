document.addEventListener("DOMContentLoaded", () => {
    // Lekérjük a jelenlegi oldal fájlnevét az URL-ből
    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    // Végigmegyünk a navigációs linkeken
    document.querySelectorAll(".nav-links a").forEach(link => {
        const href = link.getAttribute("href");
        
        // Ha a link megegyezik a jelenlegi oldallal, megkapja az active osztályt
        if (href === currentPage) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
});