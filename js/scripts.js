// where I've lived in NYC
const myHomes =
    [
        {
            "address": "75 3rd Avenue",
            "longitude": -73.98778923,
            "latitude": 40.73359852,
            "type": "NYU dorm"
        },
        {
            "address": "25 Union Square West",
            "longitude": -73.99116117,
            "latitude": 40.73644499,
            "type": "NYU dorm"
        },
        {
            "address": "334 East 6th Street",
            "longitude": -73.98702816,
            "latitude": 40.72665411,
            "type": "apartment"
        },
        {
            "address": "36 St Marks Place",
            "latitude": -73.98800124, 
            "longitude": 40.72927807,
            "type": "apartment"
        },
        {
            "address": "25 Cornelia Street",
            "longitude": -74.00233294,
            "latitude": 40.73172217,
            "type": "apartment"
        },
        {
            "address": "152 Manhattan Avenue",
            "longitude": -73.94494496,
            "latitude": 40.70830417,
            "type": "apartment"
        }
    ]
mapboxgl.accessToken = 'pk.eyJ1IjoiY2ptNjQ2IiwiYSI6ImNsZ2NnaWJtdDAzNmszZXBqaXhvYm1kbGMifQ.UfIj1yrGdrirmbsObrvpPw';
const NYC_COORDINATES = [-74.00214, 40.71882]

const map = new mapboxgl.Map({
    container: 'map', // container ID
    // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
    style: 'mapbox://styles/mapbox/light-v11', // style URL
    center: NYC_COORDINATES, // starting position [lng, lat]
    zoom: 14, // starting zoom
    bearing: 0,
    pitch: 0
});

myHomes.forEach(function (homesRecord) {
    // create the popup
    const popup = new mapboxgl.Popup({ offset: 25 }).setText(
        `${homesRecord['address']} is an ${homesRecord['type']}`
        );
 

    // by default, use gray
    let color = '#ccc'

    if (homesRecord['type'] === 'apartment') {
        color = '#62237d'
    }

    if (homesRecord['type'] === 'NYU dorm') {
        color = '#2f6e36'
    }


    // map center point
    new mapboxgl.Marker({
        color: color
    })
        .setLngLat([homesRecord.longitude, homesRecord.latitude])
        .setPopup(popup)
        .addTo(map);
})

//fly to

$('#fly-to-eastvillage').on('click', function () {
    map.flyTo({
        center: [-73.98016222864219, 40.7311392361342]
    })
})

$('#fly-to-alphabetcity').on('click', function () {
    map.flyTo({
        center: [-73.97755665111436, 40.726087217628]
    })
})


$('#fly-to-unionsquare').on('click', function () {
    map.flyTo({
        center: [-73.99094796008531, 40.737323941646174]
    })
})

$('#fly-to-eastwilliamsburg').on('click', function () {
    map.flyTo({
        center: [-73.93191465617709, 40.71722969563234]
    })
})

$('#fly-to-westvillage').on('click', function () {
    map.flyTo({
        center: [-74.00484181750839, 40.73747319710665]
    })
})









