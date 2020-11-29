let slideScreen = document.getElementById('slide-screen');
let frontPage = document.getElementById('front-page');

document.addEventListener('click', (event) => {
    if(event.target === slideScreen ) {
        console.log(frontPage)
        // window.scrollTo(150, 0)
        this.scroll({
            left: 2000,
            top: 0,
            behavior: 'smooth'
        })
    }
});