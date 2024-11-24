document.addEventListener('DOMContentLoaded', function () {
    const feedbackButton = document.querySelector('.feedback__button');
    const popup = document.getElementById('popup');
    const closeButton = document.querySelector('.popup__close-button');

    // Функция для вычисления ширины полосы прокрутки, чтобы избежать прыжка контента
    function getScrollbarWidth() {
        const outer = document.createElement('div');
        outer.style.visibility = 'hidden';
        outer.style.overflow = 'scroll';
        outer.style.msOverflowStyle = 'scrollbar';
        document.body.appendChild(outer);

        const inner = document.createElement('div');
        outer.appendChild(inner);

        const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;
        outer.parentNode.removeChild(outer);

        return scrollbarWidth;
    }

    // Функция для открытия попапа
    function openPopup() {
        const scrollbarWidth = getScrollbarWidth();
        document.body.style.overflow = 'hidden';
        document.body.style.paddingRight = `${scrollbarWidth}px`;
        popup.style.display = 'flex';
    }

    // Функция для закрытия попапа
    function closePopup() {
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';
        popup.style.display = 'none';
    }

    feedbackButton.addEventListener('click', openPopup);
    closeButton.addEventListener('click', closePopup);

    // Закрытие попапа при клике вне его содержимого
    popup.addEventListener('click', function (event) {
        if (event.target === popup) {
            closePopup();
        }
    });

    // Закрытие попапа при нажатии клавиши Escape
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            closePopup();
        }
    });
});
