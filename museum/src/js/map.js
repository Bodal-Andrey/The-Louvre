mapboxgl.accessToken =
    "pk.eyJ1IjoiYnJvZG96ZXIiLCJhIjoiY2t1NzlmYjluMDY2cDJxbnptZmJ0YnV3aiJ9.RCq-BVqBx9-GedAVEXD0HQ";

const mapLables = [
    {
        coordinates: [2.3364, 48.86091],
        color: "black",
    },
    {
        coordinates: [2.3333, 48.8602],
        color: "grey",
    },
    {
        coordinates: [2.3397, 48.8607],
        color: "grey",
    },
    {
        coordinates: [2.333, 48.8619],
        color: "grey",
    },
    {
        coordinates: [2.3365, 48.8625],
        color: "grey",
    },
];

const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/light-v10",
    center: [2.3364, 48.86091],
    zoom: 16,
});

function getMap() {
    map.addControl(new mapboxgl.NavigationControl());

    mapLables.forEach((label) => {
        new mapboxgl.Marker({
            color: label.color,
        })
            .setLngLat(label.coordinates)
            .addTo(map);
    });
};

export default getMap;
