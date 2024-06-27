document.querySelectorAll('.nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1); 
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});


function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();

    // Check for partial visibility: Any part of the element is visible
    return (
        rect.top <= window.innerHeight &&
        rect.bottom >= 0
    );
}

// Function to handle scroll event
function handleScroll() {
    var elements = document.querySelectorAll('.div-to-scroll');
    elements.forEach(function(el) {
        if (isElementInViewport(el)) {
            el.classList.add('visible');
        } else {
            el.classList.remove('visible');
        }
    });
}

// Initial check on page load
document.addEventListener('DOMContentLoaded', handleScroll);
// Check on scroll
document.addEventListener('scroll', handleScroll);

function toggleSemester(semesterId) {
    var content = document.getElementById(semesterId);
    if (content.style.maxHeight) {
        content.style.maxHeight = null;
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
    }
}