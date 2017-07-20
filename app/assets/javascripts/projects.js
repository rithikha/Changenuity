// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://coffeescript.org/

// Sets up all bindings related to the Projects views

$(document).on('turbolinks:load', function() {

  ////////////////////////////////////////////////
  // BEGIN - Code related to the project cards  //
  ////////////////////////////////////////////////

  var clickOnFavButton = function() {
    if( $(this).hasClass('active') ) {
      $(this).siblings('.fav-count').html(function(){
        return parseInt($(this).html()) - 1;
      });
    } else {
      $(this).siblings('.fav-count').html(function(){
        return parseInt($(this).html()) + 1;
      });
    }
    $(this).toggleClass('active');
  }


  var dispatch = function(element) {
    if( $(element).hasClass('btn-fav') ) {
      clickOnFavButton.call(element);
    }
  }

  // Adds bindings for when user clicks on a pcard (aka Project cards)
  $('.pcard').on('click', function(){
    window.location.href = $(this).attr('data-project-url');
  }).find('a, button, .btn, .btn-fav').on('click', function(e){
    e.stopPropagation();
    dispatch(e.target);
  });

  ////////////////////////////////////////////////
  // END - Code related to the project cards    //
  ////////////////////////////////////////////////


  ////////////////////////////////////////////////
  // BEGIN - Code related to the project show   //
  ////////////////////////////////////////////////

  // The following is some magic to get the scrollbar to disappear
  // from the project tags, courtesy of Stack Overflow
  var project_tags = $('#projects-show-main .project-tags')[0];
  if( project_tags ) {
    $(project_tags).css('bottom', '-' + (project_tags.offsetHeight - project_tags.clientHeight) + 'px' );
  }

  ////////////////////////////////////////////////
  // END - Code related to the project show     //
  ////////////////////////////////////////////////
});
