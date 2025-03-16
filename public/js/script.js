(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })();

  let taxSwitch = document.getElementById("flexSwitchCheckDefault");
  taxSwitch.addEventListener("click", () => {
      let taxInfo = document.getElementsByClassName('tax-info');
      for(info of taxInfo) {
          if(info.style.display != "inline"){
              info.style.display="inline";
          }else{
              info.style.display="none";
          }
      }
  });


  document.addEventListener("DOMContentLoaded", function () {
    const leftBtn = document.querySelector(".left-btn");
    const rightBtn = document.querySelector(".right-btn");
    const filtersContainer = document.querySelector(".filtersMain"); // Corrected selector

    if (!leftBtn || !rightBtn || !filtersContainer) return;

    const filter = document.querySelector(".filter");
    if (!filter) return;

    const filterWidth = filter.offsetWidth + 32; // Adjust based on actual margin/padding

    leftBtn.addEventListener("click", function () {
        filtersContainer.scrollBy({ left: -filterWidth, behavior: "smooth" });
    });

    rightBtn.addEventListener("click", function () {
        filtersContainer.scrollBy({ left: filterWidth, behavior: "smooth" });
    });

    // Touch Scrolling
    let startX, scrollLeft;

    filtersContainer.addEventListener("touchstart", (e) => {
        startX = e.touches[0].pageX;
        scrollLeft = filtersContainer.scrollLeft;
    });

    filtersContainer.addEventListener("touchmove", (e) => {
        const x = e.touches[0].pageX;
        const walk = startX - x;
        filtersContainer.scrollLeft = scrollLeft + walk;
    });
});
