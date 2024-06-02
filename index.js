const projectSectionImageChange = () => {
    let elems = document.querySelectorAll('#projectContainer .project')
    const image = document.querySelector('#projectSection .container .img img')

    elems.forEach(function (e) {
        e.addEventListener('mouseenter', function () {
            let img = e.getAttribute('data-img')
            image.src = img
        })
    })
}

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

const heroSectionAnimation = () => {
    gsap.from(' #heroSection .leftSection h3', {
        opacity: 0,
        delay: 0.5,
        duration: 1
    })
    gsap.from(' #heroSection .leftSection h2', {
        opacity: 0,
        delay: 0.6,
        duration: 1
    })
    gsap.from(' #heroSection .leftSection p', {
        opacity: 0,
        delay: 0.7,
        duration: 1
    })
    gsap.from(' #heroSection .leftSection button', {
        opacity: 0,
        delay: 0.8,
        duration: 1
    })
    gsap.from(' #heroSection .rightSection', {
        opacity: 0,
        delay: 0.9,
        duration: 1
    })
}

const serviceSectionAnimation = () => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '#serviceSection',
            start: 'top 80%',
            toggleActions: 'play none none none',
            // markers: true
        }
    });
    
    tl.from("#serviceSection .serviceHead .leftSection h2", {
        opacity: 0,
        y: 20,
        duration: .8
    })
        .from("#serviceSection .serviceHead .leftSection h3", {
            opacity: 0,
            y: 20,
            duration: .8
        }, "-=0.5")
        .from("#serviceSection .serviceHead .rightSection", {
            opacity: 0,
            y: 20,
            duration: .8
        }, "-=0.4");
    
    const slides = document.querySelectorAll('.swiper .swiper-wrapper .swiper-slide');
    
    slides.forEach(function (slide) {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '#serviceSection',
                start: 'top 50%',
                toggleActions: 'play none none none',
                // markers: true
            }
        });
        tl.from(slide, {
            opacity: 0,
            y: 20,
            duration: .8
        })
    })

}

const featuredSectionAnimation = () => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '#featuredSection',
            start: 'top 80%',
            toggleActions: 'play none none none',
            // markers: true
        }
    });
    
    tl.from("#featuredSection .heading h2", {
        opacity: 0,
        y: 20,
        duration: .8
    })
        .from("#featuredSection .heading h3", {
            opacity: 0,
            y: 20,
            duration: .8
        }, "-=0.5")
        
        const cards = document.querySelectorAll('#featuredSection .cardContainer .card');
        
        cards.forEach(function (card) {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: '#featuredSection',
                    start: 'top 70%',
                    toggleActions: 'play none none none',
                    // markers: true
                }
            });
            tl.from(card, {
                opacity: 0,
                y: 30,
                duration: 2
            })
        })
}

const projectSectionAnimation = () => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '#projectSection',
            start: 'top 80%',
            toggleActions: 'play none none none',
            // markers: true
        }
    });
    
    tl.from("#projectSection .heading h2", {
        opacity: 0,
        y: 20,
        duration: .8
    })
        .from("#projectSection .heading h3", {
            opacity: 0,
            y: 20,
            duration: .8
        }, "-=0.5")

        .from("#projectSection .container", {
            opacity: 0,
            y: 20,
            duration: .8
        })
}

const companySectionAnimation = () => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '#companySection',
            start: 'top 80%',
            toggleActions: 'play none none none',
            // markers: true
        }
    });
    
    tl.from("#companySection .heading h2", {
        opacity: 0,
        y: 20,
        duration: .8
    })
        .from("#companySection .heading h3", {
            opacity: 0,
            y: 20,
            duration: .8
        }, "-=0.5")  
}

const feedbackSectionAnimation = () => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '#feedbackSection',
            start: 'top 80%',
            toggleActions: 'play none none none',
            // markers: true
        }
    });
    
    tl.from("#feedbackSection .heading h2", {
        opacity: 0,
        y: 20,
        duration: .8
    })
        .from("#feedbackSection .heading h3", {
            opacity: 0,
            y: 20,
            duration: .8
        }, "-=0.5")

        .from("#feedbackSection .container", {
            opacity: 0,
            y: 20,
            duration: .8
        })
}

projectSectionImageChange()
swipperJs()
popUpForm()
heroSectionAnimation()
serviceSectionAnimation()
featuredSectionAnimation()
projectSectionAnimation()
companySectionAnimation()
feedbackSectionAnimation()