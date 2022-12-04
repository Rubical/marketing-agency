const btnDarkMode = document.querySelector('.dark-mode-btn');

btnDarkMode.onclick = function () {
    btnDarkMode.classList.toggle('dark-mode-btn--active');
    document.body.classList.toggle('dark');
}

function scrollNav() {
    $('.nav a').click(function(){
      $(".active").removeClass("active");     
      $(this).addClass("active");
      
      $('html, body').stop().animate({
        scrollTop: $($(this).attr('href')).offset().top - 160
      }, 300);
      return false;
    });
  }
  scrollNav();