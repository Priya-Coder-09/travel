
const menubtn = document.getElementById('menu-btn');
const sidebar = document.getElementById('sidebar');
const closebtn = document.getElementById('close-btn');
const overlay = document.getElementById('overlay');

menubtn.addEventListener('click', () => {
    sidebar.classList.remove('hidden');
    sidebar.classList.add('active');
    overlay.classList.remove('hidden');
});

closebtn.addEventListener('click', closeSidebar);
overlay.addEventListener('click', closeSidebar);

function closeSidebar() {
    sidebar.classList.remove('active');
    sidebar.classList.add('hidden');
    overlay.classList.add('hidden');
}