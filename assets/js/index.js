const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const header = document.querySelector('header');
const menuBg = document.querySelector('.menu-bg');
const headerBody = document.querySelector('.header-body');



document.addEventListener('DOMContentLoaded', function () {
    burger.addEventListener("click", function (e) {
        if (menu.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    });
    menuBg.addEventListener("click", function (e) {
        if (menu.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    function openMenu() {
        menu.classList.add('active');
        burger.classList.add('active');
        header.classList.add('active');
        menuBg.classList.add('active');
        headerBody.classList.add('active');


    }

    function closeMenu() {
        menu.classList.remove('active');
        burger.classList.remove('active');
        header.classList.remove('active');
        menuBg.classList.remove('active');
        headerBody.classList.remove('active');

    }


});

window.addEventListener('scroll', function () {
    const headerTop = document.querySelector('header')


    if (window.scrollY > 0) {
        headerTop.classList.add('moved');

    } else {
        headerTop.classList.remove('moved');

    }
});


function toggleActiveState(item) {
    const allItems = document.querySelectorAll('.faq-item');

    allItems.forEach(otherItem => {
        if (otherItem !== item) {
            otherItem.classList.remove('active');
        }
    });

    item.classList.toggle('active');
}

document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => toggleActiveState(item));
    const icon = item.querySelector('.faq-item-icon');
    icon.addEventListener('click', (event) => {
        event.stopPropagation();
        toggleActiveState(item);
    });
});




handleScroll();

function handleScroll() {
    const elements = document.querySelectorAll('.animation');
    elements.forEach(element => {
        const elementRect = element.getBoundingClientRect();
        const isElementVisible = elementRect.top < window.innerHeight && elementRect.bottom >= 0;

        if (isElementVisible) {
            if (!element.classList.contains('active')) {
                element.classList.add('active');
            }
        } else {
            if (element.classList.contains('active')) {
                element.classList.remove('active');
            }
        }
    });
}

window.addEventListener('scroll', handleScroll);

document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".opportunities-tab");
    const contents = document.querySelectorAll(".opportunities-cnt");

    tabs.forEach(tab => {
        tab.addEventListener("click", function () {
            const tabId = this.dataset.id; // Получаем data-id

            // Убираем active у всех табов
            tabs.forEach(t => t.classList.remove("active"));

            // Добавляем active к нажатому табу
            this.classList.add("active");

            // Скрываем весь контент
            contents.forEach(content => content.style.display = "none");

            // Показываем нужный блок
            document.getElementById(tabId).style.display = "flex";
        });
    });

    // Показываем изначально financiers
    contents.forEach(content => content.style.display = "none");
    document.getElementById("financiers").style.display = "flex";
});


document.addEventListener("DOMContentLoaded", function () {
    const leftItems = document.querySelectorAll(".reviews-left-item");
    const reviewItems = document.querySelectorAll(".reviews-item");

    leftItems.forEach((item, index) => {
        if (index !== 0) {
            item.style.display = "none";
        }
    });

    reviewItems.forEach(item => {
        item.addEventListener("click", function () {
            const targetId = this.getAttribute("data-id");

            leftItems.forEach(leftItem => {
                if (leftItem.getAttribute("data-id") === targetId) {
                    leftItem.style.display = "block";
                } else {
                    leftItem.style.display = "none";
                }
            });
        });
    });
});




document.querySelectorAll('.menu-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});


document.querySelectorAll('.footer-menu-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

