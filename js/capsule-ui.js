function toggleSidebar(select) {
    let sidebar 
    if(select == 'primary'){
         sidebar = document.querySelector('.sidebar.primary');
    }else{
         sidebar = document.querySelector('.sidebar.secondary');
    }
    if(sidebar.classList.contains('visible')){
        sidebar.classList.remove('visible');
    }else{
        sidebar.classList.add('visible');
    }
}

function startLoading(btn) {
    if(btn.classList.contains('loading')){
        btn.classList.remove('loading');
    }else{
        btn.classList.add('loading');
    }
}
