const swipperJs = () => {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        freeMode: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
}

const popUpForm = () => {
    document.addEventListener('DOMContentLoaded', function () {
        const contactUsBtn = document.getElementById('contactUsBtn');
        const popupForm = document.getElementById('popupForm');
        const closeBtn = document.getElementById('closeBtn');
        const checkBox = document.getElementById('checkBox');
        const submitBtn = document.querySelector('.submitBtn');

        submitBtn.disabled = !checkBox.checked;

        contactUsBtn.addEventListener('click', function () {
            popupForm.style.display = 'block';
        });

        closeBtn.addEventListener('click', function () {
            popupForm.style.display = 'none';
        });

        window.addEventListener('click', function (event) {
            if (event.target === popupForm) {
                popupForm.style.display = 'none';
            }
        });

        checkBox.addEventListener('change', function () {
            submitBtn.disabled = !this.checked;
        });
    });
}

swipperJs()
popUpForm()