class SurfaceView {
  detonate = document.querySelector(".detonate_button");
  kilotonsInput = document.querySelector(".input_kilotons");
  DisplayEffects = document.querySelector(".all_effects");
  clear = document.querySelector(".button_clear");
  alert = document.querySelector(".alert");
  warheadValues = document.querySelector(".warhead_switch");
  locations = document.querySelector(".warheads");
  surfaceData = {};

  // Displaying informations about detonation
  displaySurfaceFireball(modelData) {
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

    this.DisplayEffects.insertAdjacentHTML("afterbegin", fireballDisplay);
    this.DisplayEffects.insertAdjacentHTML("afterbegin", threeDBDisplay);

    this.surfaceData.fireballM = modelData.fireballSurface.fireballM;
    this.surfaceData.threeDBM = modelData.threeDbSurface.threeDBM;
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
    console.log(data);
    data.map((element) => {
      // console.log(element);
      this.locations.addEventListener("click", () => {
        if (this.locations.value === element.name) {
          this.map.setView([element.lat, element.lng], element.zoom);
          this.marker.setLatLng([element.lat, element.lng]).update();
        }
      });
    });
  }

  // Detonate button
  detonateButton(handler) {
    this.detonate.addEventListener("click", (e) => {
      this.DisplayEffects.innerHTML = "";
      e.preventDefault();
      this.alert.innerHTML = "";
      if (!this.checkingInputs()) {
        return;
      }
      this.removeCircles();
      handler();
      this.displayCircle();
      this.zooming();
      this.removeAll();
    });
  }

  // Rendering circle on a map based of the kilotons input
  displayCircle() {
    L.circle([this.marker.getLatLng().lat, this.marker.getLatLng().lng], {
      color: "#ffff00",
      radius: this.surfaceData.fireballM,
      fillOpacity: 0.6,
      fillColor: "rgba(255, 165, 0, 0.3)",
    }).addTo(this.map);

    L.circle([this.marker.getLatLng().lat, this.marker.getLatLng().lng], {
      color: "#FFA500",
      radius: this.surfaceData.threeDBM,
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
