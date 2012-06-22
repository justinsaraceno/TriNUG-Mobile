function loadEventData() {
    var apiKey = "2e6fa4e481d2ee585c356558d21";
    $.getJSON('https://api.meetup.com/2/events?key=' + apiKey + '&sign=true&group_urlname=TriNUG&page=20&callback=?', function (data) {
        var list = $('#main').find('#list');
        //list.html('');
        if (data.results.length > 0) {
            $.each(data, function () {
                $.each(this, function (k, v) {
                    if (v.time > 0) {
                        var eventDate = new Date(v.time);
                        var eventTitle = '<h1>' + $.format.date(eventDate, "MMM dd, yyyy h:mm a") + '</h1><p>' + v.name + '</p>';
                        $('<a>')
                            .data('event', v)
                            .bind('click', function () { showEventDetails($(this).data('event')); })
                            .html(eventTitle)
                            .appendTo($('<li>').appendTo(list));
                    }
                });
            });
        } else {
            list.html('<li>Sorry, no meetings are currently scheduled.</li>');
        }
        list.listview("destroy").listview();
    });
}

function showEventDetails(event) {
    var eventDate = new Date(event.time);
    $('#detailsTitle.details').text(event.name);
    $('#detailsDate.details').html('<b>' + $.format.date(eventDate, "MMM dd, yyyy h:mm a") + '</b>');
    $('#detailsDescription.details').html(event.description);
    formatEventLocation(event.venue);
    $.mobile.changePage($('#eventDetails'), {
        transition: 'none'
    });
}

function formatEventLocation(venue) {
    var location = $('#detailsLocation.details');
    location.html('');
    $('<span>')
                .html('<b>' + venue.name + '</b><br/>')
                .appendTo(location);
    if (venue.address_1) {
        $('<span>')
                .html(venue.address_1 + '<br/>')
                .appendTo(location);
    }
    if (venue.address_2) {
        $('<span>')
                .html(venue.address_2 + '<br/>')
                .appendTo(location);
    }
    if (venue.address_3) {
        $('<span>')
                .html(venue.address_3 + '<br/>')
                .appendTo(location);
    }
    if (venue.city) {
        $('<span>')
                .text(venue.city + ', ' + venue.state + '  ' + venue.zip)
                .appendTo(location);
    }
}

