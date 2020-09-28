$(document).ready(function(){

    //splash screen animations
    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

    tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
    tl.to(".splash", { y: "-100%", duration: 1, delay: 1.5}, "-=1" );
    tl.fromTo(".site-main-wrapper", { opacity: 0 }, { opacity: 1, duration: 1 });
    tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 0.6 });
    // tl.fromTo(".spl-1", { opacity: 0 }, { opacity: 1, duration: 0.4 });
    // tl.fromTo(".spl-2", { opacity: 0 }, { opacity: 1, duration: 0.4 });
    // tl.fromTo("section", { opacity: 0 }, { opacity: 1, duration: 0.4 });


    // mobile hamburger UI
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


//Skill-bar animation
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
