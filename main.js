document.addEventListener("DOMContentLoaded", function () {
  const dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach((dropdown, index) => {
    const dropdownContent = document.getElementById(`dropdown-content${index + 1}`);
    const dropdownContainer = document.getElementById(`dropdown-container${index + 1}`);
    const dropdownIcon = dropdown.querySelector('.dropdown-icon');

    dropdownIcon.addEventListener('click', function (event) {
      event.stopPropagation(); // Prevents the click event from propagating to the document

      dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';

      // Toggle visibility of the container
      dropdownContainer.style.display = dropdownContent.style.display;
    });

    // Close the dropdown content and container if clicked outside
    document.addEventListener('click', function () {
      dropdownContent.style.display = 'none';
      dropdownContainer.style.display = 'none';
    });

    dropdownContainer.addEventListener('click', function (event) {
      event.stopPropagation(); // Prevents the click event from propagating to the document
    });
  });
});
//let currentIndex2 = 0;

  //function showSlide2(index2) {
    //const sliderWrapper = document.querySelector('.slider-wrapper');
    //const itemWidth = document.querySelector('.slider-item').offsetWidth;
    //const newPosition = -index2 * itemWidth;
    //sliderWrapper.style.transform = `translateX(${newPosition}px)`;
    //currentIndex2 = index2;
  //}

  //function prevSlide() {
    //if (currentIndex2 > 0) {
      //showSlide(currentIndex2 - 1);
    //}
  //}

 // function nextSlide() {
    //const totalItems = document.querySelectorAll('.slider-item').length;
    //if (currentIndex2 < totalItems - 2) {
      //showSlide(currentIndex2 + 1);
    //}
 // }

 let currentIndex3 = 0;

  function showSlide3(index) {
    const sliderWrapper3 = document.querySelector('.slider-wrapper-3');
    const itemWidth3 = document.querySelector('.slider-item-3').offsetWidth;
    const newPosition3 = -index * itemWidth3;
    sliderWrapper3.style.transform = `translateX(${newPosition3}px)`;
    currentIndex3 = index;
  }

  function prevSlide3() {
    if (currentIndex3 > 0) {
      showSlide3(currentIndex3 - 1);
    }
  }

  function nextSlide3() {
    const totalItems3 = document.querySelectorAll('.slider-item-3').length;
    if (currentIndex3 < totalItems3 - 2) {
      showSlide3(currentIndex3 + 1);
    }
  }

  
  document.addEventListener('DOMContentLoaded', function() {
    const cities = document.querySelectorAll('.city');
    let currentIndex = 0;
  
    function showCity(index) {
      cities.forEach((city, i) => {
        if (i === index) {
          city.style.display = 'inline';
          setTimeout(() => {
            city.style.opacity = 1;
          }, 50); // Delay to ensure display and opacity transition together
        } else {
          city.style.opacity = 0;
          setTimeout(() => {
            city.style.display = 'none';
          }, 300); // Match the transition duration
        }
      });
  
      currentIndex = (currentIndex + 1) % cities.length;
  
      setTimeout(() => {
        showCity(currentIndex);
      }, 3000); // Next city after 3 seconds
    }
  
    showCity(currentIndex);
  });
  let currentIndex1 = 0;

  function showSlide(index) {
    const slider1 = document.querySelector('.slider1');
     slides1 = document.querySelectorAll('.slides1');
    const dots = document.querySelectorAll('.dot');

    slider1.style.transform = `translateX(${-index * 100}%)`;

    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });

    currentIndex1 = index;
  }

  function prevSlide() {
    currentIndex1 = (currentIndex1 - 1 + 3) % 3;
    showSlide(currentIndex1);
  }

  function nextSlide() {
    currentIndex1 = (currentIndex1 + 1) % 3;
    showSlide(currentIndex1);
  }

  function goToSlide(index) {
    showSlide(index);
  }

  // Autoplay (uncomment the line below if you want autoplay)
  // setInterval(nextSlide, 3000);
