const theme = localStorage.getItem('theme');
console.log(theme);
if(theme){
    document.body.style.transition='none';
    document.body.classList.add('dark-theme');
    document.querySelector('.btndark')
            .style.setProperty('--right', 40);
}

function toggleTheme(){
    
    const theme = localStorage.getItem('theme');

    if(theme==='dark-theme'){
        document.body.classList.remove('dark-theme');
        localStorage.setItem('theme', '');
        document.querySelector('.btndark')
            .style.setProperty('--right', 0);
    } else{
        document.body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark-theme');
        document.querySelector('.btndark')
            .style.setProperty('--right', 40);
    }
    
    
}