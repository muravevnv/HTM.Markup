
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

const newsSlider = new Swiper('.js-news-slider', {
    slidesPerView: 'auto',
    spaceBetween: 15,
    pagination: {
        el: '.swiper-pagination',
        type: 'progressbar'
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 40,
        }
    }
})


const projectSlider = new Swiper('.js-project-slider', {
    slidesPerView: 'auto',
    spaceBetween: 15,
    pagination: {
        el: '.swiper-pagination',
        type: 'progressbar'
    },
    breakpoints: {
        768: {
            spaceBetween: 20,
        },
        1024: {
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



let range = document.querySelectorAll('.filter-range');
// let rangeSliderMin = rangeSlider.querySelector('.filter-range__min');
// let rangeSliderMax = rangeSlider.querySelector('.filter-range__max');

range.forEach(function(e){
    // let rangerMin = ;
    // let rangeMax = ;
    let rangeValues = [
        e.querySelector('.filter-range__min'),
        e.querySelector('.filter-range__max')
    ]
    let rangeSlider = e.querySelector('.filter-range__slider')

    // var snapValues = [
    //     document.getElementById('slider-snap-value-lower'),
    //     document.getElementById('slider-snap-value-upper')
    // ];
    
    

    noUiSlider.create(rangeSlider, {
        start: [rangeSlider.dataset.min, rangeSlider.dataset.max],
        connect: true,
        tooltips: true,
        format: {
            to: function (value) {
                return Math.round(value)
            },
            from: function (value) {
                return Number(value);
            }
        },
        range: {
            'min': Number(rangeSlider.dataset.min),
            'max': Number(rangeSlider.dataset.max)
        }
    });

    rangeSlider.noUiSlider.on('update', function (values, handle) {
        rangeValues[handle].innerHTML = values[handle];
    });
})


// var slider = document.querySelector('.range-slider');

// noUiSlider.create(slider, {
//     start: [slider.dataset.min, slider.dataset.max],
//     connect: true,
//     tooltips: true,
//     format: {
//         to: function (value) {
//             return Math.round(value)
//         },
//         from: function (value) {
//             return Number(value);
//         }
//     },
//     range: {
//         'min': Number(slider.dataset.min),
//         'max': Number(slider.dataset.max)
//     }
// });

const filter = document.querySelector('.filter');
const filterBtn = document.querySelector('.catalog-panel__filters');
const filterClose = document.querySelector('.filter__close');

const showFilter = function(){
    filterBtn.addEventListener('click', function(){
        filter.classList.add('active')
    })
    // filterClose.addEventListener('click', function(){
    //     filter.classList.remove('active');
    // })
}

if(filterBtn) {
    showFilter();
}

let accItem = document.querySelector('.js-accordeon');


// const initAcc = function(){
//     document.addEventListener('click', function(event){
//         target = event.target;
//         console.log(target)
//         if(target === accItem) {
//             let accBody = target.nextElementSibling;
//             console.log(target)
//             target.classList.toggle('active');
//             accBody.classList.toggle('active');
//         } 
//     })
// }

// if(accItem) {
//     initAcc();
// }

