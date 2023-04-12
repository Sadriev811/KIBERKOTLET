let btnSpan = document.querySelector('.span')
let menu = document.querySelector('.menu_1')

btnSpan.addEventListener('click', function(){
    menu.classList.toggle('active')
})

// Scroll top

const goTopBtn = document.querySelector(".scrollTop")

goTopBtn.addEventListener("click", goTop);


function goTop() {
    if (window.pageXOffset > 0) {
        window.scrollBy(0, -75);
        setTimeout(goTop, 0);
    }
};

const scrollBtn = document.querySelector(".isShowBtn");

window.onscroll = () => {
    if (window.scrollBy > 700) {
        scrollBtn.classList.remove('isShowBtn_hide');
    } else if (window.scrollBy < 700) {
        scrollBtn.classList.add('isShowBtn_hide');
    }
};