$(document).ready(function () {
    $('.menu-burger__header').click(function () {
        $('.menu-burger__header').toggleClass('open-menu');
        $('.header__nav').toggleClass('open-menu');
        $('body').toggleClass('fixed-page');
    });
});

// const smoothCoef = 0.05;
// const smoothScroll = document.querySelector("body");
// const smoothScrollBar = document.querySelector("body");

// function onResize(e) {
//     smoothScrollBar.style.height = 1000 + "px";
// }

// window.addEventListener("resize", onResize);
// onResize();

// let prevY = window.scrollY;
// let curY = window.scrollY;
// let y = window.scrollY;
// let dy;

// function loop(now) {
//     curY = window.scrollY;
//     dy = curY - prevY;
//     y = Math.abs(dy) < 1 ? curY : y + dy * smoothCoef;
//     prevY = y;
//     smoothScroll.style.transform = `translate3d(0,${-y}px,0)`;

//     requestAnimationFrame(loop);
// }
// requestAnimationFrame(loop);

