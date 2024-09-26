const menuIcon = document.getElementById('menu-icon');
const navList = document.getElementById('menu');

menuIcon.addEventListener('click', () => {
    navList.classList.toggle('hidden');
});

