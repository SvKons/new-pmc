'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const numberElements = document.querySelectorAll('.increase-number');
    const animationStates = new Map();

    const animateNumber = (element, targetNumber) => {
        let currentNumber = 0;
        let animationFrame;

        const updateNumber = () => {
            if (currentNumber < targetNumber) {
                currentNumber += Math.ceil((targetNumber - currentNumber) / 100);
                element.textContent = currentNumber;
                animationFrame = requestAnimationFrame(updateNumber);
            } else {
                element.textContent = targetNumber;
                cancelAnimationFrame(animationFrame);
            }
        };

        updateNumber();
    };

    const isInViewport = element => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    const handleScroll = () => {
        numberElements.forEach(element => {
            if (isInViewport(element) && !animationStates.get(element)) {
                const targetNumber = parseInt(element.getAttribute('data-target'));
                animationStates.set(element, true);
                animateNumber(element, targetNumber);
            }
        });
    };

    window.addEventListener('scroll', handleScroll);
});
