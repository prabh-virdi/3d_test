document.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector(".box");

    // Initialize VanillaTilt
    VanillaTilt.init(box, {
        max: 10,
        speed: 200,
        easing: "cubic-bezier(.03,.98,.52,.99)",
        reverse: true,
        glare: true,
        "max-glare": 0.1,
    });

    // Add touch support
    box.addEventListener('touchstart', (event) => {
        event.preventDefault();
        handleTouch(event);
    });

    box.addEventListener('touchmove', (event) => {
        event.preventDefault();
        handleTouch(event);
    });

    box.addEventListener('touchend', () => {
        box.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
    });

    function handleTouch(event) {
        const touch = event.touches[0];
        const { clientX, clientY } = touch;
        const { width, height, left, top } = box.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;

        const deltaX = (clientX - centerX) / (width / 2);
        const deltaY = (clientY - centerY) / (height / 2);

        box.style.transform = `perspective(1000px) rotateY(${deltaX * 10}deg) rotateX(${-deltaY * 10}deg)`;
    }
});
