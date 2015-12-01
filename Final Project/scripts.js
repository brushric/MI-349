function popup() {
  alert("Hello World")
}

$('.smooth').on('click', function() {
    $.smoothScroll({
        scrollElement: $('body'),
        scrollTarget: '#' + this.id
    });

    return false;
});

//Found code online to highlight navbar section
//From http://stackoverflow.com/questions/23206101/navigation-bar-that-tells-where-you-are

function onScreen() {
    // Check if the top of the page collides with each section
    $('.contentPage').each(function() {
        var windowScroll = $(document).scrollTop();
        var navHeight = $('.nav ul').height();

        // Complex line checks if windowScroll (top of page) + nav bar hits Section Top / Bottom
        if( windowScroll + navHeight >= $(this).offset().top && windowScroll + navHeight <= $(this).offset().top + $(this).height()) {
            // This section is active! Add Highlight
            $('.nav ul a#nav-' + $(this).attr('id')).addClass('highlight');
        } else {
            // No - Remove highlight class
            $('.nav ul a#nav-' + $(this).attr('id')).removeClass('highlight');
        }
    });
}

$(window).on('scroll resize', function () {
    onScreen();
});
