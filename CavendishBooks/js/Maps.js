function initMap() {
    var uluru = {lat: 51.529989, lng: -0.127669};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: uluru
    });

    /*var request = {
        location:uluru,
        radius: '100',
        query:'The British Library'
    };*/

    /*var service = new.google.maps.places.PlacesService(map);
    service.textSearch(request, callback);*/

    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });

    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({
    'latLng': uluru
        }, function(results) {
            if (results[0]) {
              document.getElementById('address').innerHTML = (results[0].formatted_address);
            }
        });
    }

    /*function callback(results, status){
        if(status == google.maps.places.PlacesServiceStatus.OK){
            var marker = new google.maps.Marker({
                map:map,
                place: {
                    placeId: results[0].place_id,
                    location: results[0].geometry.location
                }
            })
        }
    }*/