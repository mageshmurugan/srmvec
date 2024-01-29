// // const homeoth = document.querySelector('#home8');
// const bars = document.querySelector('#bars')
// const times = document.querySelector('#times')

// bars.addEventListener('click', function () {
//     navLinks.style.right = "0";
// })


// times.addEventListener('click', function () {
//     navLinks.style.right = "-400px";
// })



const home8 = document.querySelector('#home8');
const me = document.querySelector('#me');

// home8.addEventListener('click', function () {
//     if (me.style.right == "-300px") {
//         me.style.right = "10px";
//     } else {
//         me.style.right = "-300px";
//     }

// })

function navbar() {
    if (me.style.right == "-300px") {
        me.style.right = "10px";
    } else {
        me.style.right = "-300px";
    }
}
navbar();
home8.addEventListener('click', navbar);





// home8.addEventListener('mouseenter', () => {
//     me.style.display = 'block';
// })
// home8.addEventListener('mouseleave', () => {
//     me.style.display = 'none';
// })

// home8.addEventListener('click', () => {
//     if (me.style.display == 'none') {
//         me.style.display = 'block';

//     }
//     else {
//         me.style.display = 'none';
//     }

// })
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    if (scrollY >= 300) {
        nav.style.backgroundColor = 'black';
        me.style.backgroundColor = 'black';

    }
    else {
        nav.style.backgroundColor = 'transparent';
        me.style.backgroundColor = 'transparent';

    }
})

