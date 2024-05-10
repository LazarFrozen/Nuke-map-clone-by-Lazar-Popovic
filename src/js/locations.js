// Locations in dropdown menu
const places = document.querySelector(".warheads");
places.addEventListener("click", function () {
  if (places.value === "washington") {
    map.setView([38.889805, -77.009056], 13);
    marker.setLatLng([38.889805, -77.009056]).update();
  } else if (places.value === "new_york") {
    map.setView([40.73061, -73.935242], 13);
    marker.setLatLng([40.73061, -73.935242]).update();
  } else if (places.value === "boston") {
    map.setView([42.361145, -71.057083], 13);
    marker.setLatLng([42.361145, -71.057083]).update();
  } else if (places.value === "los_angeles") {
    map.setView([34.052235, -118.243683], 13);
    marker.setLatLng([34.052235, -118.243683]).update();
  } else if (places.value === "chicago") {
    map.setView([41.881832, -87.623177], 13);
    marker.setLatLng([41.881832, -87.623177]).update();
  } else if (places.value === "philadelphia") {
    map.setView([39.952583, -75.165222], 13);
    marker.setLatLng([39.952583, -75.165222]).update();
  } else if (places.value === "honolulu") {
    map.setView([21.315603, -157.858093], 13);
    marker.setLatLng([21.315603, -157.858093]).update();
  } else if (places.value === "moscow") {
    map.setView([55.75222, 37.61556], 13);
    marker.setLatLng([55.75222, 37.61556]).update();
  } else if (places.value === "london") {
    map.setView([51.509865, -0.118092], 13);
    marker.setLatLng([51.509865, -0.118092]).update();
  } else if (places.value === "paris") {
    map.setView([48.864716, 2.349014], 13);
    marker.setLatLng([48.864716, 2.349014]).update();
  } else if (places.value === "berlin") {
    map.setView([52.520008, 13.404954], 13);
    marker.setLatLng([52.520008, 13.404954]).update();
  } else if (places.value === "beijing") {
    map.setView([39.935539, 116.40564], 13);
    marker.setLatLng([39.935539, 116.40564]).update();
  } else if (places.value === "new_delhi") {
    map.setView([28.6448, 77.216721], 13);
    marker.setLatLng([28.6448, 77.216721]).update();
  } else if (places.value === "islamabad") {
    map.setView([33.738045, 73.084488], 13);
    marker.setLatLng([33.738045, 73.084488]).update();
  } else if (places.value === "tokyo") {
    map.setView([35.652832, 139.839478], 13);
    marker.setLatLng([35.652832, 139.839478]).update();
  } else if (places.value === "pyongyang") {
    map.setView([39.019444, 125.738052], 13);
    marker.setLatLng([39.019444, 125.738052]).update();
  } else if (places.value === "seoul") {
    map.setView([37.5326, 127.024612], 13);
    marker.setLatLng([37.5326, 127.024612]).update();
  } else if (places.value === "teheran") {
    map.setView([35.715298, 51.404343], 13);
    marker.setLatLng([35.715298, 51.404343]).update();
  } else if (places.value === "tel_aviv") {
    map.setView([32.109333, 34.855499], 13);
    marker.setLatLng([32.109333, 34.855499]).update();
  } else if (places.value === "trinity") {
    map.setView([33.6773, -106.4754], 13);
    marker.setLatLng([33.6773, -106.4754]).update();
  } else if (places.value === "hiroshima") {
    map.setView([34.383331, 132.449997], 13);
    marker.setLatLng([34.383331, 132.449997]).update();
  } else if (places.value === "nagasaki") {
    map.setView([32.764233, 129.872696], 13);
    marker.setLatLng([32.764233, 129.872696]).update();
  } else if (places.value === "elugelab") {
    map.setView([11.666664, 162.185499258], 13);
    marker.setLatLng([11.666664, 162.185499258]).update();
  } else if (places.value === "namu") {
    map.setView([8.19416, 167.97637], 13);
    marker.setLatLng([8.19416, 167.97637]).update();
  } else if (places.value === "sedan") {
    map.setView([37.176833, -116.046561], 13);
    marker.setLatLng([37.176833, -116.046561]).update();
  } else if (places.value === "tsar") {
    map.setView([74.892097, 56.650174], 13);
    marker.setLatLng([74.892097, 56.650174]).update();
  }
});

// Search locations manually
L.Control.geocoder({
  placeholder: "Type in the name of a city",
  collapsed: false,
  defaultMarkGeocode: false,
})
  .on("markgeocode", function (e) {
    const latlng = e.geocode.center;
    marker.setLatLng(latlng).update();
    map.fitBounds(e.geocode.bbox);
    console.log(latlng);
  })
  .addTo(map);
