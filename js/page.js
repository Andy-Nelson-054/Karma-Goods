document.addEventListener('click', (event) => {
    let slideScreen = document.getElementById('slide-screen');
    if(event.target === slideScreen ) {
        console.log(event.target);
    }
})