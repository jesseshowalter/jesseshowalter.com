jQuery(function ($) {
  var target = $('#target');

  $('.toggle-loading').click(function () {
    if (target.hasClass('loading')) {
      target.loadingOverlay('remove');
    } else {
      target.loadingOverlay();
    };
  });
});

$(document).ready(function(){
        $(".slidingDiv").hide();
        $(".show_hide").show();
 
    $('.show_hide').click(function(){
    $(".slidingDiv").slideToggle();
    });
});


jQuery(function($){
        $(".tweet").tweet({
            username: "jesseatomic",
            join_text: "auto",
            avatar_size: 22,
            count: 1,
            auto_join_text_default: "",
            auto_join_text_ed: "",
            auto_join_text_ing: "",
            auto_join_text_reply: "",
            auto_join_text_url: "",
            loading_text: "loading tweets..."
        });
    });

// Can also be used with $(document).ready()
    $(window).load(function() {
      $('.flexslider').flexslider({
        animation: "slide"
      });
    });


// For the Back to top button
$(document).ready(function(){

    // hide #back-top first
    $("#back-top").hide();
    
    // fade in #back-top
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 400) {
                $('#back-top').fadeIn();
            } else {
                $('#back-top').fadeOut();
            }
        });

        // scroll body to 0px on click
        $('#back-top a').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });

});

// For the tags content drawer
$(document).ready(function(){
    $('.content-drawer').hide();

    $('.tab').click(function() {
        var $this = $(this);
        var target = $(this.rel);
        $this.closest('li').addClass('active focus');
        // Add the classes to the closest li of the clicked anchor
        $('.tab').not($this).closest('li').removeClass('active focus');
        // Remove the classes for the non-clicked items
        $('.content-drawer').not(target).slideUp();
        // Slideup the other contents
        target.delay(200).slideToggle();
        // Toggle the current content
        if (target.is(':visible')) {
            // Only if the target is visible remove the active class
            $this.closest('li').removeClass('active');
        } 
        return false;
    });
});


// for instagram feed at the bottom of info page

var feed = new Instafeed({
    get: 'user',
    userId: 2263372,
    accessToken: '2263372.467ede5.50119ae985e14564bd6fc65d9c602114',
    clientId: 'dfc86c302c0b485f81c1680c97e3233f',
    resolution: 'standard_resolution',
    template: '<li><a target="_blank" href="{{link}}"><img src="{{image}}" alt="{{caption}}"/></a></li>',
    limit: '10',
    sortBy: 'most-recent'
    });
    feed.run();


// for the reading time in the blog posts
$(function() {
            
    $('article').readingTime({
        readingTimeTarget: $(this).find('.eta')
    });
    
});


var navigation = responsiveNav(".nav-collapse", {
    animate: true,                   // Boolean: Use CSS3 transitions, true or false
    transition: 284,                  // Integer: Speed of the transition, in milliseconds
    label: "",                    // String: Label for the navigation toggle
    insert: "after",                 // String: Insert the toggle before or after the navigation
    customToggle: "",                 // Selector: Specify the ID of a custom toggle
    closeOnNavClick: false,           // Boolean: Close the navigation when one of the links are clicked
    openPos: "relative",              // String: Position of the opened nav, relative or static
    navClass: "nav-collapse",         // String: Default CSS class. If changed, you need to edit the CSS too!
    navActiveClass: "js-nav-active",  // String: Class that is added to <html> element when nav is active
    jsClass: "js",                    // String: 'JS enabled' class which is added to <html> element
    init: function(){},               // Function: Init callback
    open: function(){},               // Function: Open callback
    close: function(){}               // Function: Close callback
});


