import AirburstView from "./airburstView.js";

class LayerView extends AirburstView {
  initMap(map, marker) {
    this.map = map;
    this.marker = marker;

    // Default map
    const defaultMap = L.tileLayer(
      "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
      {
        minZoom: 3,
        maxZoom: 19,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }
    ).addTo(this.map);

    // Dark layer
    const Jawg_Dark = L.tileLayer(
      "https://tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token={accessToken}",
      {
        attribution:
          '<a href="https://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        minZoom: 3,
        maxZoom: 19,
        accessToken:
          "zmq1MRBFeCvASyKl64kSW9JCNT81HinGwcvhjB4xT570NSCVAbH3gfRp7AJUHSmg",
      }
    );

    // satelite layer
    const mapLink = '<a href="http://www.esri.com/">Esri</a>';
    const wholink =
      "i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community";
    const satelite = L.tileLayer(
      "http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
      {
        attribution: "&copy; " + mapLink + ", " + wholink,
        minZoom: 3,
        maxZoom: 19,
      }
    );
    // Layer control
    const baseMaps = {
      Normal: defaultMap,
      Dark: Jawg_Dark,
      Satelite: satelite,
    };
    L.control.layers(baseMaps).addTo(this.map);

    // Scalling
    L.control.scale().addTo(this.map);

    // Search
    L.Control.geocoder({
      placeholder: "Type in the name of a city",
      collapsed: false,
      defaultMarkGeocode: false,
    })
      .on("markgeocode", (e) => {
        const latlng = e.geocode.center;
        this.marker.setLatLng(latlng).update();
        this.map.fitBounds(e.geocode.bbox);
      })
      .addTo(this.map);
  }
}

export default new LayerView();
