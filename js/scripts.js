mapboxgl.accessToken = 'pk.eyJ1IjoicHNwYXVzdGVyIiwiYSI6ImNsZ2JxN3p4djAyZDkzZ3BmOGR1ZTVhcWQifQ.499a8nIbNZgnjPf0qIGx8g';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v12',
    center: [-74.5, 40],
    zoom: 2
});

map.addControl(new mapboxgl.NavigationControl());

//async await? - check this out

