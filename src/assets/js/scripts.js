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

 // logo slider
var copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector(".logo-slider").appendChild(copy);

// products

document.addEventListener('DOMContentLoaded', function() {
  var brandFilter = document.getElementById('brandFilter');
  var categoryFilter = document.getElementById('categoryFilter');
  var clearFilters = document.getElementById('clearFilters');
  var cards = document.querySelectorAll('.product-card');

  function filterCards() {
    var brand = brandFilter.value;
    var category = categoryFilter.value;
    cards.forEach(function(card) {
      var match = true;
      if (brandFilter.selectedIndex > 0 && card.getAttribute('data-brand') !== brand) match = false;
      if (categoryFilter.selectedIndex > 0 && card.getAttribute('data-category') !== category) match = false;
      card.style.display = match ? '' : 'none';
    });
  }

  brandFilter.addEventListener('change', filterCards);
  categoryFilter.addEventListener('change', filterCards);
  clearFilters.addEventListener('click', function() {
    brandFilter.selectedIndex = 0;
    categoryFilter.selectedIndex = 0;
    cards.forEach(function(card) { card.style.display = ''; });
  });
});


// video player
document.addEventListener('DOMContentLoaded', function() {
  const videoThumbnail = document.querySelector('.video-thumbnail');
  const videoPlayer = document.querySelector('.video-player');
  const video = document.querySelector('video');
  const playButton = document.querySelector('.play-button');

  videoThumbnail.addEventListener('click', function() {
      videoThumbnail.classList.add('d-none');
      videoPlayer.classList.remove('d-none');
      video.play();
  });

  video.addEventListener('pause', function() {
      playButton.innerHTML = '<i class="fas fa-play"></i>';
  });

  video.addEventListener('play', function() {
      playButton.innerHTML = '<i class="fas fa-pause"></i>';
  });
});