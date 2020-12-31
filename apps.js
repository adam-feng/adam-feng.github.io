const navSlide = () => {
    const burger = document.querySelector('.burger');
    const buttons = document.querySelector('.link-button');

    burger.addEventListener("click",()=> {
        buttons.classList.toggle('nav-active');
    });
}

navSlide();