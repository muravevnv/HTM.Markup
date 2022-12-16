


const productSliderMain = new Swiper('.js-slider-main',{
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        prevEl:'.slider__prev',
        nextEl:'.slider__next',
    },
    pagination: {
        el:'.swiper-pagination',
        type: 'progressbar',
    }
})

const sliderMainCount = document.querySelector('.product-main__current');
const sliderMainTotal = document.querySelector('.product-main__total');

if(sliderMainTotal) {
    sliderMainTotal.innerHTML = productSliderMain.slides.length;

    sliderMainCount.innerHTML = ++productSliderMain.realIndex;

    productSliderMain.on('slideChange', function() {
        let currentSlide = ++productSliderMain.realIndex;
        sliderMainCount.innerHTML = currentSlide;
    });

}



const productSliderColorImg = new Swiper('.product-colors__img', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,

})

const productSliderColor = new Swiper('.js-slider-color',{
    slidesPerView: 3,
    spaceBetween: 20,
    freeMode: true,
    watchSlidesProgress: true,
    loop: true,
    navigation: {
        prevEl:'.slider__prev',
        nextEl:'.slider__next',
    },
    thumbs: {
        swiper: productSliderColorImg,
    },
})

let slideColor = document.querySelectorAll('.js-slider-color .swiper-slide');

slideColor.forEach((e)=>{
    e.addEventListener('click', function(){
        productSliderColor.slideNext();
        productSliderColorImg.slideNext();
        return !1;

    })
})


const productSizeColor = new Swiper('.js-slider-size',{
    slidesPerView: 'auto',
    spaceBetween: 35,
    pagination: {
        el:'.swiper-pagination',
        type:'progressbar'
    },
    breakpoints: {
        1024: {
            slidesPerView: 5,
            spaceBetween: 16,
            navigation: {
                prevEl:'.product-size__prev',
                nextEl:'.product-size__next',
            }
        }
    }
})


const sliderLight = new Swiper('.js-light-slider', {
    slidesPerView: 1,
    spaceBetween: 16,
    navigation: {
        prevEl:'.slider__prev',
        nextEl:'.slider__next',
    },
    pagination: {
        el:'.swiper-pagination',
        type:'progressbar'
    },
    breakpoints: {
        767: {
            slidesPerView: 4,
            spaceBetween: 0,
            navigation: {
                prevEl:'.product-size__prev',
                nextEl:'.product-size__next',
            }
        }
    }
})


const heroSlider = new Swiper('.js-hero-slider', {
    slidesPerView: 1,
    pagination:{
        el:'.swiper-pagination',
        type:'progressbar',
    },
    navigation:{
        prevEl:'.slider__prev',
        nextEl:'.slider__next',
    }
})

let heroSliderCurrent = document.querySelector('.hero-slider__current');
let heroSliderTotal = document.querySelector('.hero-slider__total');

if(heroSliderCurrent) {
    heroSliderTotal.innerHTML = `${'<span>/</span> 0' + heroSlider.slides.length}`;

    heroSliderCurrent.innerHTML = `${'<span>/</span> 0' + ++heroSlider.realIndex}`;

    heroSlider.on('slideChange', function() {
        let currentSlide = ++heroSlider.realIndex;
        heroSliderCurrent.innerHTML = `${'<span>/</span> 0' + currentSlide}`;
    });

}

const portfolioSlider = new Swiper('.js-portfolio-slider', {
    slidesPerView: 'auto',
    spaceBetween: 15,
    navigation: {
        prevEl:'.slider__prev',
        nextEl:'.slider__next',
    },
    pagination: {
        el:'.swiper-pagination',
        type:'progressbar',
    },
    breakpoints: {
        768: {
            spaceBetween: 20,
        },
        1025: {
            spaceBetween: 40,
        }

    }
})

const menuBtn = document.querySelector('.header__burger');
const menu = document.querySelector('.header-nav');

const initMenu = function(){
    menuBtn.addEventListener('click', function(){
        this.classList.toggle('active');
        menu.classList.toggle('active');
    })
}

if(menuBtn) {
    initMenu();
}

let tabs = document.querySelectorAll('.product-tabs__item');
let tabsContent = document.querySelectorAll('.product-tabs__content')

const initTabs = function(){
    for(let i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener('click', function(){
            tabs.forEach((e)=>{
                e.classList.remove('active')
            })
            tabsContent.forEach((k)=>{
                k.classList.remove('active')
            })
            this.classList.add('active');
            tabsContent[i].classList.add('active')
        })
    }
}
if(tabs) {
    initTabs();
}


let points = document.querySelectorAll('.product-structure__point');
let pointsText = document.querySelectorAll('.product-structure__item');


for(let i = 0; i < points.length; i++) {
    points[i].addEventListener('mouseover',function(){
        points[i].classList.add('active');
        pointsText[i].classList.add('active')
    })
    points[i].addEventListener('mouseout',function(){
        points[i].classList.remove('active');
        pointsText[i].classList.remove('active')
    })

}
