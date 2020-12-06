let slideScreenRight = document.getElementById('slide-screen-right');
let slideScreenLeft = document.getElementById('slide-screen-left');
let frontPage = document.getElementById('front-page');
let backPage = document.getElementById('back-page');

document.addEventListener('click', (event) => {
    
    //slide screen right
    if(event.target === slideScreenRight) {
        // window.scrollTo(150, 0)
        this.scroll({
            left: 2000,
            top: 0,
            behavior: 'smooth'
        })
    }

    //slide screen left
    if(event.target === slideScreenLeft) {
        this.scroll({
            left: 0,
            top: 0,
            behavior: 'smooth'
        })
    }

});