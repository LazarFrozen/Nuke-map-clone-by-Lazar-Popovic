import AirburstView from "./airburstView.js";

class SurfaceView extends AirburstView {
  detonate = document.querySelector(".detonate_button");
  kilotonsInput = document.querySelector(".input_kilotons");
  DisplayEffects = document.querySelector(".all_effects");
  clear = document.querySelector(".button_clear");
  alert = document.querySelector(".alert");
  warheadValues = document.querySelector(".warhead_switch");
  locations = document.querySelector(".warheads");
  radioSurface = document.querySelector(".surface_radio");
  radioAirburst = document.querySelector(".airburst_radio");
  addNewDetonation = document.querySelector(".button_add");
  mapEl = document.querySelector("#map");
  surfaceData = {};

  // Displaying informations about detonation
  displaySurfaceContent(modelData) {
    const fireballDisplay = `<div class="container_effects"><div class="all_effects">
    <div class="effect_title">
      <div class="title_image" style="display: block;"></div>
      <div class="main_title">FireBall Radius: ${modelData.fireballSurface.fireballRadius} ${modelData.fireballSurface.unitFire} (${modelData.fireballSurface.fireballArea} ${modelData.fireballSurface.areaUnitFire})</div>
    </div>
    <div class="effect_text">
      Maximum size of the nuclear fireball; relevance to damage on the ground depends on the height of detonation. If it touches the ground, the amount of radioactive fallout is significantly increased. Anything inside the fireball is effectively vaporized.
    </div>
  </div>
  </div>`;

    const threeDBDisplay = `<div class="container_effects"><div class="all_effects">
  <div class="effect_title">
    <div class="title_image2" style="display: block;"></div>
    <div class="main_title">Thermal radiation radius (3rd degree burns): ${modelData.threeDbSurface.threeDBRadius} ${modelData.threeDbSurface.unitThreeDB} (${modelData.threeDbSurface.threeDBArea} ${modelData.threeDbSurface.areaUnitThreeDB})</div>
  </div>
  <div class="effect_text">
    Third degree burns extend throughout the layers of skin, and are often painless because they destroy the pain nerves. 
    They can cause severe scarring or disablement, and can require amputation.
  </div>
</div>
</div>`;

    const lightBlastDisplay = `<div class="container_effects"><div class="all_effects">
<div class="effect_title">
  <div class="title_image3" style="display: block;"></div>
  <div class="main_title">Light blast damage radius (1 psi): ${modelData.lightBlastSurface.radiusLight} ${modelData.lightBlastSurface.unitLight} (${modelData.lightBlastSurface.areaLight} ${modelData.lightBlastSurface.areaUnitLight})</div>
</div>
<div class="effect_text">
  At around 1 psi overpressure, glass windows can be expected to break. This can cause many injuries in a surrounding 
  population who comes to a window after seeing the flash of a nuclear explosion 
  (which travels faster than the pressure wave). Often used as a benchmark for light damage in cities.
</div>
</div>
</div>`;

    const mediumBlastDisplay = `<div class="container_effects"><div class="all_effects">
<div class="effect_title">
  <div class="title_image4" style="display: block;"></div>
  <div class="main_title">Moderate blast damage radius (5 psi): ${modelData.mediumBlastSurface.radiusMedium} ${modelData.mediumBlastSurface.unitMedium} (${modelData.mediumBlastSurface.areaMedium} ${modelData.mediumBlastSurface.areaUnitMedium})</div>
</div>
<div class="effect_text">
  At 5 psi overpressure, most residential buildings collapse, injuries are universal, fatalities are widespread. 
  The chances of a fire starting in commercial and residential damage are high, and buildings so damaged are at high risk of spreading fire.
  Often used as a benchmark for moderate damage in cities.
</div>
</div>
</div>`;

    const radiationDisplay = `<div class="container_effects">
<div class="all_effects">
  <div class="effect_title">
    <div class="title_image6" style="display: block;"></div>
    <div class="main_title">Radiation radius (500 rem):  ${modelData.radiationDamageSurface.radiusRadiation} ${modelData.radiationDamageSurface.unitRadiation} (${modelData.radiationDamageSurface.areaRadiation} ${modelData.radiationDamageSurface.areaUnitRadiation})</div>
  </div>
  <div class="effect_text">
    500 rem ionizing radiation dose; likely fatal, in about 1 month; 15% of survivors will eventually die of cancer as a result of exposure.
  </div>
</div>
</div>`;

    const heavyBlastDisplay = `<div class="container_effects">
<div class="all_effects">
  <div class="effect_title">
    <div class="title_image5" style="display: block;"></div>
    <div class="main_title">Heavy blast damage radius (20 psi): ${modelData.heavyBlastSurface.radiusHeavy} ${modelData.heavyBlastSurface.unitHeavy} (${modelData.heavyBlastSurface.areaHeavy} ${modelData.heavyBlastSurface.areaUnitHeavy})</div>
  </div>
  <div class="effect_text">
    At 20 psi overpressure, heavily built concrete buildings are severely damaged or demolished; 
    fatalities approach 100%. Often used as a benchmark for heavy damage in cities.
  </div>
</div>
</div>`;

    const titleDisplay = `<div class="container_effects">Effect distances for a ${this.kilotonsInput.value} kilotons surface burst:<div>`;

    this.DisplayEffects.insertAdjacentHTML("afterbegin", threeDBDisplay);
    this.DisplayEffects.insertAdjacentHTML("afterbegin", lightBlastDisplay);
    this.DisplayEffects.insertAdjacentHTML("afterbegin", mediumBlastDisplay);
    this.DisplayEffects.insertAdjacentHTML("afterbegin", heavyBlastDisplay);
    this.DisplayEffects.insertAdjacentHTML("afterbegin", radiationDisplay);
    this.DisplayEffects.insertAdjacentHTML("afterbegin", fireballDisplay);
    this.DisplayEffects.insertAdjacentHTML("afterbegin", titleDisplay);

    this.surfaceData.fireballM = modelData.fireballSurface.fireballM;
    this.surfaceData.threeDBM = modelData.threeDbSurface.threeDBM;
    this.surfaceData.lightBlastM = modelData.lightBlastSurface.lightBlastM;
    this.surfaceData.mediumBlastM = modelData.mediumBlastSurface.mediumBlastM;
    this.surfaceData.radiationM = modelData.radiationDamageSurface.radiationM;
    this.surfaceData.heavyBlastM = modelData.heavyBlastSurface.heavyBlastM;
  }

  setMarker(marker) {
    this.marker = marker;
  }

  setMap(map) {
    this.map = map;
  }

  // Selecting preset for a warheads
  warheadsData(data) {
    data.map((element) => {
      this.warheadValues.addEventListener("click", () => {
        if (this.warheadValues.value === element.name) {
          this.kilotonsInput.value = element.kilotons;
        }
      });
    });
  }

  // Selecting preset for a location
  locationData(data) {
    data.map((element) => {
      this.locations.addEventListener("click", () => {
        if (this.locations.value === element.name) {
          this.map.setView([element.lat, element.lng], element.zoom);
          this.marker.setLatLng([element.lat, element.lng]).update();
        }
      });
    });
  }

  renderError(message) {
    const error = `
    <div class="error">
      <div>
        <img src="img/error.png" alt="Error sign" class="error-img" />
      </div>
      <p class="error-text">${message}</p>
    </div>
    `;
    this.removeAll();
    this.mapEl.insertAdjacentHTML("afterbegin", error);
  }

  // Detonate button
  detonateButton(handlerSurface, handlerAir) {
    this.detonate.addEventListener("click", (e) => {
      if (this.radioSurface.checked) {
        this.DisplayEffects.innerHTML = "";
        e.preventDefault();
        this.alert.innerHTML = "";
        if (!this.checkingInputs()) {
          return;
        }
        this.removeCircles();
        handlerSurface();
        this.displayCircle();
        this.zooming();
        this.removeAll();
      }
      if (this.radioAirburst.checked) {
        this.DisplayEffects.innerHTML = "";
        e.preventDefault();
        this.alert.innerHTML = "";
        if (!this.checkingInputs()) {
          return;
        }
        this.removeCircles();
        handlerAir();
        this.displayCircleAir();
        this.zooming();
        this.removeAll();
      }
    });
  }

  newDetonation(handlerSurface, handlerAir) {
    this.addNewDetonation.addEventListener("click", (e) => {
      if (this.radioSurface.checked) {
        this.DisplayEffects.innerHTML = "";
        e.preventDefault();
        this.alert.innerHTML = "";
        if (!this.checkingInputs()) {
          return;
        }
        handlerSurface();
        this.displayCircle();
        this.zooming();
        this.removeAll();
      }
      if (this.radioAirburst.checked) {
        this.DisplayEffects.innerHTML = "";
        e.preventDefault();
        this.alert.innerHTML = "";
        if (!this.checkingInputs()) {
          return;
        }
        handlerAir();
        this.displayCircleAir();
        this.zooming();
        this.removeAll();
      }
    });
  }

  // Rendering circle on a map based of the kilotons input
  displayCircle() {
    L.circle([this.marker.getLatLng().lat, this.marker.getLatLng().lng], {
      color: "#FFA500",
      radius: this.surfaceData.threeDBM,
      fillOpacity: 0.6,
      fillColor: "rgba(255, 165, 0, 0.3)",
    }).addTo(this.map);

    L.circle([this.marker.getLatLng().lat, this.marker.getLatLng().lng], {
      color: "#808080",
      radius: this.surfaceData.lightBlastM,
      fillOpacity: 0.6,
      fillColor: "rgba(128,128,128,0.3)",
    }).addTo(this.map);

    L.circle([this.marker.getLatLng().lat, this.marker.getLatLng().lng], {
      color: "#808080",
      radius: this.surfaceData.mediumBlastM,
      fillOpacity: 0.6,
      fillColor: "rgba(128, 128, 128, 0.3)",
    }).addTo(this.map);

    L.circle([this.marker.getLatLng().lat, this.marker.getLatLng().lng], {
      color: "#df2020",
      radius: this.surfaceData.heavyBlastM,
      fillOpacity: 0.6,
      fillColor: "rgba(223, 32, 32, 0.3)",
    }).addTo(this.map);

    L.circle([this.marker.getLatLng().lat, this.marker.getLatLng().lng], {
      color: "#00FF00",
      radius: this.surfaceData.radiationM,
      fillOpacity: 0.6,
      fillColor: "rgba(0, 255, 0, 0.3)",
    }).addTo(this.map);

    L.circle([this.marker.getLatLng().lat, this.marker.getLatLng().lng], {
      color: "#ffff00",
      radius: this.surfaceData.fireballM,
      fillOpacity: 0.6,
      fillColor: "rgba(255, 165, 0, 0.3)",
    }).addTo(this.map);
  }

  // Removes previous circle when you detonate next time
  removeCircles() {
    this.map.eachLayer((layer) => {
      if (layer instanceof L.Circle) {
        this.map.removeLayer(layer);
      }
    });
  }

  // Reseting all informations on the map
  removeAll() {
    this.clear.addEventListener("click", () => {
      this.map.eachLayer((layer) => {
        if (layer instanceof L.Circle) {
          this.map.removeLayer(layer);
        }
      });
      this.DisplayEffects.innerHTML = "";
    });
  }

  // Setting zoom levels based on time kilotions input
  zooming() {
    if (
      this.kilotonsInput.value <= 100000 &&
      this.kilotonsInput.value >= 30000
    ) {
      this.map.setView(
        [this.marker.getLatLng().lat, this.marker.getLatLng().lng],
        9
      );
    } else if (
      this.kilotonsInput.value <= 30000 &&
      this.kilotonsInput.value >= 4000
    ) {
      this.map.setView(
        [this.marker.getLatLng().lat, this.marker.getLatLng().lng],
        10
      );
    } else if (
      this.kilotonsInput.value <= 4000 &&
      this.kilotonsInput.value >= 500
    ) {
      this.map.setView(
        [this.marker.getLatLng().lat, this.marker.getLatLng().lng],
        11
      );
    } else if (
      this.kilotonsInput.value <= 500 &&
      this.kilotonsInput.value >= 50
    ) {
      this.map.setView(
        [this.marker.getLatLng().lat, this.marker.getLatLng().lng],
        12
      );
    } else if (
      this.kilotonsInput.value <= 50 &&
      this.kilotonsInput.value >= 5
    ) {
      this.map.setView(
        [this.marker.getLatLng().lat, this.marker.getLatLng().lng],
        13
      );
    } else if (
      this.kilotonsInput.value <= 5 &&
      this.kilotonsInput.value >= 0.5
    ) {
      this.map.setView(
        [this.marker.getLatLng().lat, this.marker.getLatLng().lng],
        14
      );
    } else if (
      this.kilotonsInput.value <= 0.5 &&
      this.kilotonsInput.value >= 0.05
    ) {
      this.map.setView(
        [this.marker.getLatLng().lat, this.marker.getLatLng().lng],
        15
      );
    } else if (
      this.kilotonsInput.value <= 0.05 &&
      this.kilotonsInput.value >= 0.005
    ) {
      this.map.setView(
        [this.marker.getLatLng().lat, this.marker.getLatLng().lng],
        16
      );
    } else if (
      this.kilotonsInput.value <= 0.005 &&
      this.kilotonsInput.value >= 0.001
    ) {
      this.map.setView(
        [this.marker.getLatLng().lat, this.marker.getLatLng().lng],
        17
      );
    }
  }

  // Checking if inputs are correct
  checkingInputs() {
    if (this.kilotonsInput.value === "") {
      const displayEmptyAlert = `<div class="alert">Please specify a yield above.</div>`;
      this.alert.insertAdjacentHTML("afterbegin", displayEmptyAlert);
      return false;
    }
    if (this.kilotonsInput.value > 100000) {
      // legacy
      window.alert(
        "The NUKEMAP clone cannot accurately model yields more than 100,000 kilotons (100 megatons)."
      );
      return false;
    }
    if (isNaN(this.kilotonsInput.value)) {
      const enterNumber = `<div class="alert">Enter a number!</div>`;
      this.alert.insertAdjacentHTML("afterbegin", enterNumber);
      return false;
    }
    if (this.kilotonsInput.value < 0.001) {
      this.kilotonsInput.value = 0.001;
      const inputLower = `<div class="alert">Can't be lower then 0.001 kilotons (1 ton).</div>`;
      this.alert.insertAdjacentHTML("afterbegin", inputLower);
      return false;
    }
    return true;
  }
}

export default new SurfaceView();
