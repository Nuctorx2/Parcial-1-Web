function initMap() {
    // Ubicación inicial (coordenadas centradas en una ubicación general)
    var centerLocation = {lat: 4.6097, lng: -74.0817}; // Bogotá, Colombia

    // Crear el mapa centrado en una ubicación
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: centerLocation
    });

    // Añadir 4 marcadores con sus respectivas direcciones
    var locations = [
        {lat: 4.710989, lng: -74.072090, name: 'Sede 1 - Calle 1, Bogotá'},
        {lat: 4.624335, lng: -74.063644, name: 'Sede 2 - Carrera 7, Bogotá'},
        {lat: 4.658391, lng: -74.093029, name: 'Sede 3 - Calle 72, Bogotá'},
        {lat: 4.676300, lng: -74.048970, name: 'Sede 4 - Autopista Norte, Bogotá'}
    ];

    // Agregar los marcadores al mapa
    locations.forEach(function(location) {
        var marker = new google.maps.Marker({
            position: {lat: location.lat, lng: location.lng},
            map: map,
            title: location.name
        });

        // Añadir un info window (ventana de información) a cada marcador
        var infoWindow = new google.maps.InfoWindow({
            content: location.name
        });

        // Mostrar el info window al hacer clic en un marcador
        marker.addListener('click', function() {
            infoWindow.open(map, marker);
        });
    });
}