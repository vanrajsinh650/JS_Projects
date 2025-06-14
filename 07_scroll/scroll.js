const progress = document.querySelector('.progress');

window.addEventListener('scroll', () => {
    const scrollTop = window.scroll;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;

    progress.style.width = scrollPercent + '%';
    
})