const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelectorAll('.nav-links li');
const navLinksMobile = document.querySelectorAll('.mobile-links li');


mobileMenuBtn.addEventListener('click', () => {
    const icon = document.querySelector('.mobile-menu-btn img');
    mobileMenuBtn.classList.toggle('active-btn');
    
    if(mobileMenuBtn.classList.contains('active-btn')){
        icon.src="../images/icon-close-menu.svg";
    }else{
        icon.src="../images/icon-menu.svg";
    }
    mobileMenu.classList.toggle('active-menu');

})

navLinks.forEach((link) => {
    const subMenu = link.querySelector('.sub-menu');

    link.addEventListener('click', () => {
        link.classList.toggle('active');
        subMenu.classList.toggle('active-menu');
    })
})


navLinksMobile.forEach((link) => {
    const subMenu = link.querySelector('.mobile-sub');

    link.addEventListener('click', () => {
        link.classList.toggle('active');
        subMenu.classList.toggle('active-menu');
    })
})
