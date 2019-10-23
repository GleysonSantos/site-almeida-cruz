// Initialize and add the map
function initMap() {
    // The location of Uluru
    var mundial = { lat: -23.420651, lng: -51.938860 };
    var shopcell = { lat: -23.419232, lng: -51.940028 };
    var smart03 = { lat: -23.418983, lng: -51.938715 };
    var smart02 = { lat: -23.421036, lng: -51.936676 };
    var smart01 = { lat: -23.420322, lng: -51.932960 };
    var ibcatacadista = { lat: -23.417043, lng: -51.941984 };
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), { zoom: 16, center: smart02 });

    var styles = {
        default: null,
        hide: [{
                featureType: 'poi.business',
                stylers: [{ visibility: 'off' }]
            },
            {
                featureType: 'transit',
                elementType: 'labels.icon',
                stylers: [{ visibility: 'off' }]
            }
        ]
    };
    map.setOptions({ styles: styles['hide'] });

    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({ position: smart01, map: map });
    var marker = new google.maps.Marker({ position: smart02, map: map });
    var marker = new google.maps.Marker({ position: smart03, map: map });
    var marker = new google.maps.Marker({ position: shopcell, map: map });
    var marker = new google.maps.Marker({ position: mundial, map: map });
    var marker = new google.maps.Marker({ position: ibcatacadista, map: map });
}