'use strict';

import { animate, inView } from 'https://cdn.jsdelivr.net/npm/framer-motion@11.11.11/dom/+esm';

inView('section', ({ target }) => {
    animate(
        target.querySelector('div'),
        { opacity: [0, 1] },
        {
            duration: 0.9,
            easing: [0.17, 0.55, 0.55, 1],
        }
    );
});
