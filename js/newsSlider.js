const bg = document.querySelector('.item-bg');
const items = document.querySelectorAll('.news__item');
const item = document.querySelector('.news__item');

const cLog = (content) => {
    console.log(content);
};

if (window.innerWidth > 800) {
    document.addEventListener("mouseover", (event) => {
        if (event.target.classList.contains('news__item')) {
            // const x = event.target.getBoundingClientRect().left;
            // const y = event.target.getBoundingClientRect().top;
            // const width = event.target.getBoundingClientRect().width;
            // const height = event.target.getBoundingClientRect().height;

            $('.item-bg').addClass('active');
            $('.news__item').removeClass('active');

            // bg.style.width = `${width}px`;
            // bg.style.height = `${height}px`;
            // bg.style.transform = `translateX(${x}px) translateY(${y}px)`;
        }
    });

    document.addEventListener('mouseleave', () => {
        $('.item-bg').removeClass('active');
        $('.news__item').removeClass('active');
    });
}

const swiper = new Swiper('.news-slider', {
    effect: 'coverflow',
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    keyboard: true,
    spaceBetween: 0,
    slidesPerView: 'auto',
    speed: 300,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 0,
        modifier: 3,
        slideShadows: false
    },
    breakpoints: {
        480: {
            spaceBetween: 0,
            centeredSlides: true
        }
    },
    simulateTouch: true,
    navigation: {
        nextEl: '.news-slider-next',
        prevEl: '.news-slider-prev'
    },
    pagination: {
        el: '.news-slider__pagination',
        clickable: true
    },
    on: {
        init: () => {
            const activeItem = document.querySelector('.swiper-slide-active');
            const sliderItem = activeItem.querySelector('.news__item');

            $('.swiper-slide-active .news__item').addClass('active');

            // const x = sliderItem.getBoundingClientRect().left;
            // const y = sliderItem.getBoundingClientRect().top;
            // const width = sliderItem.getBoundingClientRect().width;
            // const height = sliderItem.getBoundingClientRect().height;

            $('.item-bg').addClass('active');

            // bg.style.width = `${width}px`;
            // bg.style.height = `${height}px`;
            // bg.style.transform = `translateX(${x}px) translateY(${y}px)`;
        }
    }
});

swiper.on('touchEnd', () => {
    $('.news__item').removeClass('active');
    $('.swiper-slide-active .news__item').addClass('active');
});

swiper.on('slideChange', () => {
    $('.news__item').removeClass('active');
});

swiper.on('slideChangeTransitionEnd', () => {
    $('.news__item').removeClass('active');
    const activeItem = document.querySelector('.swiper-slide-active');
    const sliderItem = activeItem.querySelector('.news__item');

    $('.swiper-slide-active .news__item').addClass('active');

    // const x = sliderItem.getBoundingClientRect().left;
    // const y = sliderItem.getBoundingClientRect().top;
    // const width = sliderItem.getBoundingClientRect().width;
    // const height = sliderItem.getBoundingClientRect().height;

    $('.item-bg').addClass('active');

    // bg.style.width = `${width}px`;
    // bg.style.height = `${height}px`;
    // bg.style.transform = `translateX(${x}px) translateY(${y}px)`;
});


