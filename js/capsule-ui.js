function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const arrow = document.querySelector('.arrow');
    if(sidebar.classList.contains('visible')){
        sidebar.classList.remove('visible');
    }else{
        sidebar.classList.add('visible');
    }
}
