function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const arrow = document.querySelector('.arrow');
    if(sidebar.classList.contains('visible')){
        sidebar.classList.remove('visible');
        arrow.classList.add('animation');
        arrow.classList.toggle('active');
    }else{
        sidebar.classList.add('visible');
    }
}
