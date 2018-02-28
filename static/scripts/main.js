var $loader = $('#loader');

$(document).ready(function() {

    if ($("[data-animation-effect]").length > 0) {
        $("[data-animation-effect]").each(function() {
            if(Modernizr.csstransitions) {
                var waypoints = $(this).waypoint(function(direction) {
                    animatedObject = $(this.element);
                    animatedObject.addClass('animated object-visible ' + animatedObject.attr("data-animation-effect"));
                    this.destroy();
                },{
                    offset: '90%'
                });
            } else {
                $(this).addClass('object-visible');
            }
        });
    };
});

$('footer > div > a').on('click', function(e) {
    var currentPos = $(window).scrollTop();
    var target = $(e.currentTarget).attr('href');
    var space =  Math.abs(currentPos - $(target).offset().top);

    var speed = 1.0;
    
    $('html, body').animate({
        scrollTop: $(target).offset().top
    }, space / speed);
});