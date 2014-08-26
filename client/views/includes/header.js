/*
// Sidr integration
Template.header.rendered = function () {

  $('.btn-navbar').sidr({
     name: 'respNav',
     source: '.navbar-collapse',
  });

  //this code is close sidr menu if clicked outside  {optional}
  $(document).bind("click", function () {
      $.sidr('close', 'respNav');
  });
};
*/

Template.header.rendered = function () {
  $(document).ready(function () {
      $('.slideout-menu-toggle').on('click', function(event){
        //event.preventDefault();
        // create menu variables
        var slideoutMenu = $('.slideout-menu');
        var slideoutMenuWidth = $('.slideout-menu').width();
        
        // toggle open class
        slideoutMenu.toggleClass("open");
        
        // slide menu
        if (slideoutMenu.hasClass("open")) {
          slideoutMenu.animate({
            left: "0px"
          }); 
        } else {
          slideoutMenu.animate({
            left: -slideoutMenuWidth
          }, 250);  
        }
      });
  });
};