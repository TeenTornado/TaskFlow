const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const closeIcon = document.querySelector('.close-icon');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

closeIcon.addEventListener('click', () => {
    navLinks.classList.remove('active');
});

document.addEventListener('click', (event) => {
    if (!navLinks.contains(event.target) && !hamburger.contains(event.target) && !closeIcon.contains(event.target)) {
        navLinks.classList.remove('active');
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const anchors = document.querySelectorAll('a[href^="#"]');
    if (anchors.length > 0) {
        anchors.forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
});

const testimonialSlider = document.querySelector('.testimonial-slider');
if (testimonialSlider) {
    const testimonials = testimonialSlider.querySelectorAll('.testimonial');
    let currentTestimonial = 0;

    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.style.display = i === index ? 'block' : 'none';
        });
    }

    function nextTestimonial() {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    }

    if (testimonials.length > 0) {
        setInterval(nextTestimonial, 5000);
        showTestimonial(currentTestimonial);
    }
}


const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = contactForm.querySelector('input[name="name"]')?.value;
        const email = contactForm.querySelector('input[name="email"]')?.value;
        const message = contactForm.querySelector('textarea[name="message"]')?.value;

        if (name && email && message) {
            // Here you would typically send the form data to a server
            alert('Thank you for your message. We will get back to you soon!');
            contactForm.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });
}

const modal = document.getElementById('video-modal');
const videoBtn = document.getElementById('video-btn');
const closeBtn = modal?.querySelector('.close');

if (videoBtn && modal) {
    videoBtn.onclick = function () {
        modal.style.display = 'block';
    }
}

if (closeBtn) {
    closeBtn.onclick = function () {
        if (modal) modal.style.display = 'none';
    }
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

function initMap() {
    const location = { lat: 40.7128, lng: -74.0060 }; // Replace with your center's coordinates
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: location
    });
    const marker = new google.maps.Marker({
        position: location,
        map: map
    });
}

const counters = document.querySelectorAll('.counter');
const speed = 200;

if (counters.length > 0) {
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const inc = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target;
            }
        };

        updateCount();
    });
}

const header = document.querySelector('header');
if (header) {
    window.addEventListener('scroll', function () {
        header.classList.toggle('scrolled', window.scrollY > 0);
    });
}

