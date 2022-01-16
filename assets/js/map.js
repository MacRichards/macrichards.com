function initMap() {
    const myLatLng = { lat: 47.6614, lng: -122.2684 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 9,
        center: myLatLng,
        disableDefaultUI: true,
    });

    new google.maps.Marker({
        position: myLatLng,
        map,
        title: "Hello World!",
    });
}
