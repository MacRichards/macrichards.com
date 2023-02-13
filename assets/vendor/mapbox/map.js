mapboxgl.accessToken = 'pk.eyJ1IjoibWFjcmljaDUwMCIsImEiOiJja3lwM2gzM3MwNjdjMm5qajk1eDBzeXJmIn0.3jlV57PZfY55TULGIaRDzw';
var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        animate: true,
        center: [-122.2684, 47.6614],
        zoom: 10
});