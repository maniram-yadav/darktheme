const theme = localStorage.getItem('theme');
console.log(theme);
if(theme){
    document.body.style.transition='none';
    document.body.classList.add('dark-theme');
}

function toggleTheme(){
    
    const theme = localStorage.getItem('theme');
    if(theme==='dark-theme'){
        document.body.classList.remove('dark-theme');
        localStorage.setItem('theme', '');
    } else{
        document.body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark-theme');
    }
    
    
}