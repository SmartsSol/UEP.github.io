function toggleMenu() {
    var sidebar = document.getElementById('sidebar');
    var header = document.getElementById('header');
    var mainContent = document.getElementById('main-content');
    var footer = document.getElementById('footer');
    sidebar.classList.toggle('hidden');
    header.classList.toggle('shifted');
    mainContent.classList.toggle('shifted');
    footer.classList.toggle('shifted');
}
