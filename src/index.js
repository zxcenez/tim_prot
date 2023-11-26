
function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('element-show');
        }
        // else {
        //     change.target.classList.remove('element-show')
        // }
    });
}

let options = {
    threshold: [0.5]
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.nomber , .title_about_red , .p_div_about_textmini , .img_red_folars , .red_titgero ,.text_pod_tit_geroi , .pos_img_red , .img_glav_geroi_red , .but_geroi , .titl__red_skil ,.box1_skil , .box2_skil , .box3_skil ,.box4_skil ,.h1_titl_pricing ,.box_pricing ,.h1_titl ,.p_contactus ,.img_contactus ,.but_input_contactus ,.li_foot_colo ,.solid_footer');

for (let elm of elements) {
    observer.observe(elm);
}



// const boxes = document.querySelectorAll('nomber');

// const checkBoxes = () => {
//     const triger = (window.innerHeight / 5) * 4;
//     for (const box of boxes) {
//         const topOfBox = box.getBoundingClientRect().top;
//         if (topOfBox < triger) {
//             box.classList.add('show')
//         }
//     }

// };

// checkBoxes();

// window.addEventListener('scroll', checkBoxes)


$(document).ready(function () {
    $('.menu-burger__header').click(function () {
        $('.menu-burger__header').toggleClass('open-menu');
        $('.header__nav').toggleClass('open-menu');
        $('body').toggleClass('fixed-page');
    });
});

// let options = {
//     root: null,
//     rootMargin: '5px',
//     threshold: 0.5
// }

// let callback = function (entries, observer) {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             console.log('find', entry);
//             entry.target.classList.add('active');
//         }
//     });
// }

// let observer = new IntersectionObserver(callback, options);

// let targets = document.querySelectorAll('.anim')
// targets.ForEach(target => {
//     observer.observe(target);
// });