
let swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    hashNavigation: {
        watchState: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".g__click-next",
        prevEl: ".g__click-prev",
    },
});

let swiper2 = new Swiper(".mySwiper", {
    cssMode: true,
    navigation: {
        nextEl: ".next",
        prevEl: ".prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
});