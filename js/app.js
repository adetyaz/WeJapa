document.addEventListener('DOMContentLoaded', () => {
    anime.timeline({
            easing: 'easeOutExpo'
        })
        .add({
            targets: '.logo',
            translateX: [-50, 50, 0],
            endDelay: 100,
            duration: 1000
        })
        .add({
            targets: '.home__intro',
            translateY: [100, 0],
            opacity: [0, 1],
            offset: '-= 700'
        })
        .add({
            targets: '.home__image',
            translateX: [100, 0],
            opacity: [0, 1],
            offset: '-=800'
        })
        .add({
            targets: '.animate-value',
            translateY: [100, 0],
            opacity: [0, 1],
            scale: [2, 1],
            duration: 1000,
            offset: '-= 400'
        })
        .add({
            targets: '.values__card',
            translateY: [100, -50, 0],
            opacity: [0, 1],
            delay: (el, i) => i * 500,
            duration: 1800,
            offset: '-= 450'
        })
        .add({
            targets: '.values__card',
            scale: [1, 1.1, 1],
            delay: (el, i) => i * 500,
            duration: 2000
        })
        .add({
            targets: '.features__card',
            scale: [0, 1],
            opacity: [0, 1],
            delay: (el, i) => i * 500,
            duration: 1800,
        })
        .add({
            targets: '.features__image',
            translateY: [100, 0],
            opacity: [0, 1],
        })
});