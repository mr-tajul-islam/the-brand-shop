// Handle carousel image modal
document.addEventListener('DOMContentLoaded', function() {
    const carouselImages = document.querySelectorAll('.carousel-image');
    const modalImage = document.getElementById('modalImage');
    
    carouselImages.forEach(image => {
        image.addEventListener('click', function() {
            const imageSrc = this.getAttribute('data-image');
            modalImage.src = imageSrc;
        });
    });
 });