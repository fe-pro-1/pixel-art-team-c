const swiper = new Swiper(".swiper", {
    autoHeight: true,
    observer: true,
    observeParents: true,

    direction: "horizontal",
    loop: true,

    pagination: {
        el: ".swiper-pagination",
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    scrollbar: {
        el: ".swiper-scrollbar",
    },
});

swiper.updateContainerSize();
swiper.update();
