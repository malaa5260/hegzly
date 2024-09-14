$(document).ready(function() {
    //scroll

    window.onscroll = function() {
        if (window.scrollY >= 1000) {
            document.getElementById('scroll-top').style.visibility = "visible"
        } else {
            document.getElementById('scroll-top').style.visibility = "hidden";
        }
    };
    $('.pro').owlCarousel({
        loop: false,
        margin: 30,
        rtl: true,
        items: 0,
        nav: true,
        dots: true,
        center: false,
        responsiveClass: true,
        navText: ['<span class="fa-stack  main-color ml-2"><i class= "fa fa-square fa-stack-2x" ></i><i class="fa fa-chevron-right fa-stack-1x fa-inverse"></i></span>',
            '<span class="fa-stack  main-color ml-2"><i class= "fa fa-square fa-stack-2x" ></i><i class="fa fa-chevron-left fa-stack-1x fa-inverse"></i></span>'
        ],
        responsive: {
            0: { items: 1 },
            480: { items: 2 },
            768: { items: 3 },
            991: { items: 2 },
            1200: { items: 2 }
        }

    });
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 500) {
            $("nav").addClass("scroll");
        } else {
            $("nav").removeClass("scroll");
        }
    });
    $('.proo').owlCarousel({
        loop: false,
        margin: 30,
        rtl: true,
        items: 0,
        nav: true,
        dots: true,
        center: false,
        responsiveClass: true,
        navText: ['<span class="fa-stack   main-color ml-2"><i class= "fa fa-square-o fa-stack-2x" ></i><i class="fa fa-chevron-right fa-stack-1x fa-inverse main-color"></i></span>',
            '<span class="fa-stack   main-color ml-2"><i class= "fa fa-square-o fa-stack-2x" ></i><i class="fa fa-chevron-left fa-stack-1x fa-inverse main-color"></i></span>'
        ],
        responsive: {
            0: { items: 1 },
            480: { items: 2 },
            768: { items: 3 },
            991: { items: 4 },
            1200: { items: 4 }
        }

    });
    $('.prooo').owlCarousel({
        loop: false,
        margin: 30,
        rtl: true,
        items: 0,
        nav: true,
        dots: true,
        center: false,
        responsiveClass: true,
        navText: ['<span class="fa-stack   main-color ml-2"><i class= "fa fa-square-o fa-stack-2x" ></i><i class="fa fa-chevron-right fa-stack-1x fa-inverse main-color"></i></span>',
            '<span class="fa-stack   main-color ml-2"><i class= "fa fa-square-o fa-stack-2x" ></i><i class="fa fa-chevron-left fa-stack-1x fa-inverse main-color"></i></span>'
        ],
        responsive: {
            0: { items: 1 },
            480: { items: 2 },
            768: { items: 3 },
            991: { items: 4 },
            1200: { items: 4 }
        }

    });
    $('.proooo').owlCarousel({
        loop: false,
        margin: 30,
        rtl: true,
        items: 0,
        nav: true,
        dots: true,
        center: false,
        responsiveClass: true,
        navText: ['<span class="fa-stack   main-color ml-2"><i class= "fa fa-square-o fa-stack-2x" ></i><i class="fa fa-chevron-right fa-stack-1x fa-inverse main-color"></i></span>',
            '<span class="fa-stack   main-color ml-2"><i class= "fa fa-square-o fa-stack-2x" ></i><i class="fa fa-chevron-left fa-stack-1x fa-inverse main-color"></i></span>'
        ],
        responsive: {
            0: { items: 1 },
            480: { items: 2 },
            768: { items: 2 },
            991: { items: 3 },
            1200: { items: 3 }
        }

    });
});
window.onload = function() {
    $(".lds-facebook").fadeOut("5000", function() {
        $("body").css("overflow-y", "auto");
        $(".over").fadeOut("3000");
    });
};
if ($('.wheel-map').length) {
    $('.wheel-map').each(function() {
        initialize(this);
    });
}

function initialize(_this) {

    var stylesArray = {
        //style 1
        'style-1': [{ "featureType": "landscape", "stylers": [{ "hue": "#FFBB00" }, { "saturation": 43.400000000000006 }, { "lightness": 37.599999999999994 }, { "gamma": 1 }] }, { "featureType": "road.highway", "stylers": [{ "hue": "#FFC200" }, { "saturation": -61.8 }, { "lightness": 45.599999999999994 }, { "gamma": 1 }] }, { "featureType": "road.arterial", "stylers": [{ "hue": "#FF0300" }, { "saturation": -100 }, { "lightness": 51.19999999999999 }, { "gamma": 1 }] }, { "featureType": "road.local", "stylers": [{ "hue": "#FF0300" }, { "saturation": -100 }, { "lightness": 52 }, { "gamma": 1 }] }, { "featureType": "water", "stylers": [{ "hue": "#0078FF" }, { "saturation": -13.200000000000003 }, { "lightness": 2.4000000000000057 }, { "gamma": 1 }] }, { "featureType": "poi", "stylers": [{ "hue": "#00FF6A" }, { "saturation": -1.0989010989011234 }, { "lightness": 11.200000000000017 }, { "gamma": 1 }] }]
    };

    var styles, map, marker, infowindow,
        lat = $(_this).attr("data-lat"),
        lng = $(_this).attr("data-lng"),
        contentString = $(_this).attr("data-string"),
        image = $(_this).attr("data-marker"),
        styles_attr = $(_this).attr("data-style"),
        zoomLevel = parseInt($(_this).attr("data-zoom"), 10),
        myLatlng = new google.maps.LatLng(lat, lng);


    // style_1
    if (styles_attr == 'style-1') {
        styles = stylesArray[styles_attr];
    }
    // custom
    if (typeof hawa_style_map != 'undefined' && styles_attr == 'custom') {
        styles = hawa_style_map;
    }
    // or default style

    var styledMap = new google.maps.StyledMapType(styles, { name: "Styled Map" });

    var mapOptions = {
        zoom: zoomLevel,
        disableDefaultUI: true,
        center: myLatlng,
        scrollwheel: false,
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
        }
    };

    map = new google.maps.Map(_this, mapOptions);

    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');

    infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        icon: image
    });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map, marker);
    });

}
// $('.toggle-chat').click(function() {
//     $('.chat-box').toggleClass('closed');

// });



$('.image').on('mousemove', function(event) {
    // This gives you the position of the image on the page
    var bbox = event.target.getBoundingClientRect();

    // Then we measure how far into the image the mouse is in both x and y directions
    var mouseX = event.clientX - bbox.left;
    var mouseY = event.clientY - bbox.top;

    // Then work out how far through the image as a percentage the mouse is
    var xPercent = (mouseX / bbox.width) * 100;
    var yPercent = (mouseY / bbox.height) * 100;

    // Then we change the `transform-origin` css property on the image to center the zoom effect on the mouse position
    //event.target.style.transformOrigin = xPercent + '% ' + yPercent + '%';
    // It's a bit clearer in jQuery:
    $(this).css('transform-origin', (xPercent + '% ' + yPercent + '%'));
    // We add the '%' units to make sure the string looks exactly like the css declaration it becomes.

});
// If you want it to automatically trigger on hover
$('.image').on('mouseenter', function() {
    $(this).addClass('zoom-in');
    $(this).removeClass('normal-zoom');
});

// and stop when not hovering
$('.image').on('mouseleave', function() {
    $(this).addClass('normal-zoom');
    $(this).removeClass('zoom-in');
});

function getVals() {
    // Get slider values
    var parent = this.parentNode;
    var slides = parent.getElementsByTagName("input");
    var slide1 = parseFloat(slides[0].value);
    var slide2 = parseFloat(slides[1].value);
    // Neither slider will clip the other, so make sure we determine which is larger
    if (slide1 > slide2) {
        var tmp = slide2;
        slide2 = slide1;
        slide1 = tmp;
    }
    $('.firstVal').text(slide1 + ' جنيه')
    $('.lastVal').text(slide2 + ' جنيه')

    var displayElement = parent.getElementsByClassName("rangeValues")[0];
    displayElement.innerHTML = slide1 + " - " + slide2;
}

var sliderSections = document.getElementsByClassName("range-slider");
for (var x = 0; x < sliderSections.length; x++) {
    var sliders = sliderSections[x].getElementsByTagName("input");
    for (var y = 0; y < sliders.length; y++) {
        if (sliders[y].type === "range") {
            sliders[y].oninput = getVals;
            // Manually trigger event first time to display values
            sliders[y].oninput();
        }
    }
}