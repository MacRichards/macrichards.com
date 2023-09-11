mapboxgl.accessToken = 'pk.eyJ1IjoibWFjcmljaDUwMCIsImEiOiJja3lwM2gzM3MwNjdjMm5qajk1eDBzeXJmIn0.3jlV57PZfY55TULGIaRDzw';
var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v12',
        animate: true,
        center: [-122.1743, 47.4996],
        zoom: 11
});