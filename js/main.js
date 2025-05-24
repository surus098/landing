(function () {
    /* BURGER */
    document.addEventListener('click', burgerInet)

    function burgerInet(e) {

        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.nav__link')

        if (!burgerIcon && !burgerNavLink) return

        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')
        }
    }
    /* BURGER END */

    /* MODALKA */
    const modal = document.querySelector('.modal')
    const modalButton = document.querySelector('.about__img-button')

    modalButton.addEventListener('click', openModal)
    modal.addEventListener('click', closeModal)

    function openModal(e) {
        e.preventDefault()
        document.body.classList.toggle('body--opened-modal')
    }

    function closeModal(e) {
        e.preventDefault()

        const target = e.target

        if (target.closest('.modal__cancel') || target.classList.contains('modal')) {
            document.body.classList.remove('body--opened-modal')
        }
    }
    /* MODALKA END */

    /* TABS */

    const tabControls = document.querySelector('.tab-controls')

    tabControls.addEventListener('click', toggleTab)

    function toggleTab(e) {

        const tabControl = e.target.closest('.tab-controls__link')

        if (!tabControl) return
        e.preventDefault()
        if (tabControl.classList.contains('tab-controls__link--active')) return

        const tabContentID = tabControl.getAttribute('href')
        const tabContent = document.querySelector(tabContentID)
        const activeControl = document.querySelector('.tab-controls__link--active')
        const activeContent = document.querySelector('.tab-content--show')

        activeControl.classList.remove('tab-controls__link--active')
        tabControl.classList.add('tab-controls__link--active')

        activeContent.classList.remove('tab-content--show')
        tabContent.classList.add('tab-content--show')
    }
    /* TABS END */



    /* АККОРДИОН */
    const accordionLists = document.querySelectorAll('.accordion-list');

    accordionLists.forEach(el => {
        el.addEventListener('click', (e) => {
            const accordionList = e.currentTarget;
            const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened');
            const accordionControl = e.target.closest('.accordion-list__control');
            if (!accordionControl) return;
            const accordionItem = accordionControl.parentElement;
            const accordionContent = accordionControl.nextElementSibling;

            // Закрываем ранее открытый элемент, если он есть и это не текущий ЧАСТОИСПОЛЬЗОВАТЬ
            /* if (accordionOpenedItem && accordionItem !== accordionOpenedItem) {
                accordionOpenedItem.classList.remove('accordion-list__item--opened');
                const accordionOpenedContent = accordionOpenedItem.querySelector('.accordion-list__content');
                if (accordionOpenedContent) {
                    accordionOpenedContent.style.maxHeight = null;
                }
            } */

            accordionItem.classList.toggle('accordion-list__item--opened');
            if (accordionItem.classList.contains('accordion-list__item--opened')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            } else {
                accordionContent.style.maxHeight = null;
            }
        });
    });
    /* АККОРДИОН END*/


    /* СЛАЙДЕР-ГАЛЛЕРЕЯ */

    const swiper = new Swiper('.gallery__slider', {

        spaceBetween: 15,
        slidesPerView: 1.3,

        pagination: {
            el: '.gallery__pagination',
            type: 'fraction',
        },

        navigation: {
            nextEl: '.gallery__next',
            prevEl: '.gallery__prev',
        },

        breakpoints: {
            451: {
                spaceBetween: 32,
                slidesPerView: 2,
            },
            601: {
                spaceBetween: 32,
                slidesPerView: 3,
            },
            801: {
                spaceBetween: 32,
                slidesPerView: 3,
            },

            1101: {
                spaceBetween: 15,
                slidesPerView: 4,
            }

        }
    });

        /* СЛАЙДЕР-ОТЗЫВЫ */

        new Swiper('.testimonials__slider', {

            spaceBetween: 0,
            slidesPerView: 1,
            centeredSlides: true,
    
            navigation: {
                nextEl: '.testimonials__next',
                prevEl: '.testimonials__prev',
            },

            scrollbar: {
                el: '.swiper-scrollbar',
                draggable: true,
            },

            breakpoints: {
                451: {
                    spaceBetween: 0,
                    slidesPerView: 1,
                },
                601: {
                    spaceBetween: 0,
                    slidesPerView: 1.2,
                },
                801: {
                    spaceBetween: 0,
                    slidesPerView: 1.5,
                },
    
                1101: {
                    spaceBetween: 0,
                    slidesPerView: 2.1,
                }
            }

        });

    /* МАСКА ДЛЯ ТЕЛЕФОНА */
    const telInputs = document.querySelectorAll('input[type="tel"]')
    const im = new Inputmask('+7 (999) 999-99-99')
    im.mask(telInputs)


    /* АВТОПЛЭЙ ВИДЕО В FSLightbox*/
    document.addEventListener('DOMContentLoaded', function() {
        // Настраиваем FSLightbox
        const lightbox = fsLightboxInstances['video'];
        if (lightbox) {
            lightbox.props.onOpen = () => {
                const video = document.querySelector('.fslightbox-container video');
                if (video) {
                    video.muted = true; // Отключаем звук для автопроигрывания
                    video.play(); // Запускаем видео
                    video.loop = true; // Зацикливаем (опционально)
                }
            };
        }
    });
    

})()