$(document).ready(function(){

    let hamburger = document.querySelector('.hamburger');
    let times = document.querySelector('.times');
    let mobileNav = document.querySelector('.mobile-nav');

    let hh = document.querySelector('.hh');
    let aa = document.querySelector('.aa');
    let ss = document.querySelector('.ss');
    let oo = document.querySelector('.oo');
    let pp = document.querySelector('.pp');

    hamburger.addEventListener('click', function(){
        mobileNav.classList.add('open');
    })
    times.addEventListener('click', function(){
        mobileNav.classList.remove('open');
    })
    

    hh.addEventListener('click', function(){
        mobileNav.classList.remove('open');
    })
    aa.addEventListener('click', function(){
        mobileNav.classList.remove('open');
    })
    ss.addEventListener('click', function(){
        mobileNav.classList.remove('open');
    })
    oo.addEventListener('click', function(){
        mobileNav.classList.remove('open');
    })
    pp.addEventListener('click', function(){
        mobileNav.classList.remove('open');
    })

});

function isElementInViewport() {
    const box = document.querySelector('.skill-level');
    const rect = box.getBoundingClientRect();

    const isInViewport = rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth);

    return isInViewport;
}

// Check if it's time to start the animation.
function checkAnimation() {
    var $elem = $('.skill-level');

    // // If the animation has already been started
    // if ($elem.hasClass('begin')) return;

    if (isElementInViewport()) {
   
        console.log('isInView')
        // Start the animation
        $elem.addClass('begin');
    } else{
        $elem.remove('begin');
    }
}


$(window).scroll(function(){
    checkAnimation();
    
})