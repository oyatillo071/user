document.addEventListener('DOMContentLoaded', () => {
    const mediaFiles = document.querySelectorAll('img');
    let i = 0;

    mediaFiles.forEach((file) => {
        if (file.complete) { 
            incrementCounter(); 
        } else {
            file.onload = incrementCounter;
        }
    });

    function incrementCounter() {
        i++;
        percents.innerHTML = ((i * 100) / mediaFiles.length).toFixed();
        if (i === mediaFiles.length) {
            preloader.classList.add('preloader--hide');
            percents.innerHTML = 100;
        }
    }
});



  window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.hidden');
    const windowHeight = window.innerHeight;

    elements.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;

      if (elementTop < windowHeight - 100) { 
        el.classList.add('visible');
      }
    });
  });



  

document.getElementById('showTextButton').addEventListener('click', function() {
    document.getElementById('alertBox').style.display = 'block';
    document.getElementById('email').value = ''; 
});

document.getElementById('closeAlert').addEventListener('click', function() {
    document.getElementById('alertBox').style.display = 'none';
});



document.getElementById('price__1').addEventListener('click', function() {
    document.getElementById('price__container').style.display = 'block';
});
document.getElementById('price__2').addEventListener('click', function() {
    document.getElementById('price__container').style.display = 'block';
});
document.getElementById('price__3').addEventListener('click', function() {
    document.getElementById('price__container').style.display = 'block';
});



document.getElementById('closePrice--cont').addEventListener('click', function() {
    document.getElementById('price__container').style.display = 'none';
});


document.getElementById('payAfter--close').addEventListener('click', function() {
    document.getElementById('pay__after').style.display = 'block';
    document.getElementById('price__container').style.display = 'none';

});

document.getElementById('closePayAfter').addEventListener('click', function() {
    document.getElementById('pay__after').style.display = 'none';
});



function scrollToSection() {
    document.getElementById('demo-section').scrollIntoView({
        behavior: 'smooth'
    });
}



