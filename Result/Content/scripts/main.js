
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
const menuClose = document.querySelector('.header-mob__close')
const menu = document.querySelector('.header-mob');

const initMenu = function(){
    menuBtn.addEventListener('click', function(){
        menu.classList.add('active');
    })
    menuClose.addEventListener('click', function(){
        menu.classList.remove('active');
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
let pointsText = document.querySelectorAll('.product-structure__desc-mob');


for(let i = 0; i < points.length; i++) {
    let pointsTextOverlay = pointsText[i].querySelector('.product-structure__desc-overlay');
    let pointsTextClose = pointsText[i].querySelector('.product-structure__desc-close')
    points[i].addEventListener('click',function(){
        points[i].classList.add('active');
        pointsText[i].classList.add('active')
    })
    pointsTextOverlay.addEventListener('click', function(){
        points[i].classList.remove('active');
        pointsText[i].classList.remove('active')
    })
    pointsTextClose.addEventListener('click', function(){
        points[i].classList.remove('active');
        pointsText[i].classList.remove('active')
    })
    
}



let range = document.querySelectorAll('.filter-range');

range.forEach(function(e){

    let rangeValues = [
        e.querySelector('.filter-range__min'),
        e.querySelector('.filter-range__max')
    ]
    let rangeSlider = e.querySelector('.filter-range__slider')

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

const filter = document.querySelector('.filter');
const filterBtn = document.querySelector('.catalog-panel__filters');
const filterClose = document.querySelector('.filter__close');

const showFilter = function(){
    filterBtn.addEventListener('click', function(){
        filter.classList.add('active')
    })
    filterClose.addEventListener('click', function(){
        filter.classList.remove('active');
    })
}

if(filterBtn) {
    showFilter();
}
const catalog = document.querySelector('.catalog-list');
const catalogBtn = document.querySelector('.catalog-panel__btn');
const catalogClose = document.querySelector('.catalog-list__close');

const showCatalog = function(){
    catalogBtn.addEventListener('click', function(){
        catalog.classList.add('active')
    })
    catalogClose.addEventListener('click', function(){
        catalog.classList.remove('active');
    })
}

if(catalogBtn) {
    showCatalog();
}



var acc = document.querySelectorAll('.js-accordeon');

for(var i = 0; i < acc.length; i++) {
	acc[i].addEventListener('click', openAccordion);
}


function openAccordion(e) {
	var parent = this.parentElement;
	var article = this.nextElementSibling;
	
	if (!parent.classList.contains('open')) {
		parent.classList.add('open');
		article.classList.add('open')
	}
	else {
		parent.classList.remove('open');
		article.classList.remove('open')
	}
}




let mobFilterAcc = document.querySelectorAll('.filter-section__head');

if(window.innerWidth < 1024) {
    mobFilterAcc.forEach((e)=>{
        e.classList.add('js-accordeon')
    })
}

let catalogLine = document.querySelector('.catalog-sort__line');
let catalogGrid = document.querySelector('.catalog-sort__grid');
let catalogLayout = document.querySelector('.catalog__items');

let catalogClass = 'catalog__items--line'



if(catalogLine) {
    catalogLine.addEventListener('click', function(){
        if(catalogLayout.classList.contains(catalogClass)){
            return
        } else {
            catalogLayout.classList.add(catalogClass)
            catalogLine.classList.add('active')
            catalogGrid.classList.remove('active')
        }
    })
    catalogGrid.addEventListener('click', function(){
        if(catalogLayout.classList.contains(catalogClass)){
            catalogLayout.classList.remove(catalogClass)
            catalogLine.classList.remove('active')
            catalogGrid.classList.add('active')
        } else {
            
        }
    })
}


let video = document.querySelector('.product-video__player video');
let videoBtn = document.querySelector('.video__btn ');

if(videoBtn) {
    videoBtn.addEventListener('click', function(){
        video.play();
        video.setAttribute("controls", "true");
        this.style.display = 'none'
    })
}



let categories = document.querySelectorAll('.categories__item');




if(categories) {
    for(let i = 0; i < categories.length; i++) {
        categories[i].addEventListener('click', function(){
            categories.forEach(function(elem){
                elem.classList.remove('active')
            })
            this.classList.add('active')
        })
    }
}



let colorsItems =  document.querySelectorAll('.product-colors__list-item');
let colorsImg = document.querySelectorAll('.product-colors__img');

if(colorsItems) {
    for(let i = 0; i < colorsItems.length; i++) {
        colorsItems[i].addEventListener('click', function(){
            colorsItems.forEach(elem => elem.classList.remove('active'))
            colorsImg.forEach(elem => elem.classList.remove('active'))
            colorsItems[i].classList.add('active');
            colorsImg[i].classList.add('active');
        })
    }
}


