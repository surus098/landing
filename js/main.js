(function(){
    /* BURGER */
    document.addEventListener('click', burgerInet)

    function burgerInet(e) {
        
        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.nav__link')

        if (!burgerIcon && !burgerNavLink) return

        if (!document.body.classList.contains('body--opened-menu')){
            document.body.classList.add('body--opened-menu')
        }else{
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
        const activeControl = document.querySelector('tab-controls__link--active')
        const activeContent = document.querySelector('tab-content--show')

        activeControl.classList.remove('tab-controls__link--active')
        tabControl.classList.add('tab-controls__link--active')

        activeContent.classList.remove('tab-content--show')
        tabContent.classList.add('tab-content--show')
    }
})()