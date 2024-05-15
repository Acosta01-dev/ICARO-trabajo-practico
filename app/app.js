let toggleButton  = document.querySelector('.toggle');
let toggleIcon  = document.querySelector('.toggle i');

let aside = toggleButton .parentElement;

toggleButton.addEventListener('click' , function(){
    aside.classList.toggle('aside_active');
    toggleButton.classList.toggle('toggle_active');

    const currentContent = toggleIcon.textContent;
    if (currentContent === '<') {
        toggleIcon.textContent = '>'; 
    } else {
        toggleIcon.textContent = '<'; 
    }
})