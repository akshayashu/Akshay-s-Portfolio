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