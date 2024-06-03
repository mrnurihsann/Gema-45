window.addEventListener('scroll', function(){
    const parallax = document.querySelector('.parallax');
    let positionScroll = window.pageXOffset;
    parallax.style.transform = 'translateY(' + positionScroll * 1.5 + 'px)';
});