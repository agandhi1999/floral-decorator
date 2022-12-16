// Zoom Functionality of Images
const zoomClasses = ['.gallery-images', '.floral-design']
zoomClasses.map((item) => {
  window.addEventListener('load', function(){
    scpopLoad(item);
  });
})
