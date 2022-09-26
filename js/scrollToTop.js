const scrollToTop = () => {
    const topBTN = document.querySelector('#scrollToTopButton')

    topBTN.addEventListener('click', (event) => {
        event.preventDefault();

        seamless.scrollIntoView(document.querySelector(".header"), {
            behavior: "smooth",
            block: "center",
            inline: "center",
        });
    })
}

scrollToTop();