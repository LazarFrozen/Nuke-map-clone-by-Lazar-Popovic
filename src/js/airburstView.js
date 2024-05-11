export default class AirburstView {
  airburstData = {};

  // Displaying informations about airburst detonation
  displayAirContent(airData) {
    const fireballDisplayAir = `<div class="container_effects"><div class="all_effects">
    <div class="effect_title">
      <div class="title_image" style="display: block;"></div>
      <div class="main_title">FireBall Radius: ${airData.fireballBlastAir.fireballRadiusAir} ${airData.fireballBlastAir.unitAir} (${airData.fireballBlastAir.fireballAreaAir} ${airData.fireballBlastAir.areaUnitAir})</div>
    </div>
    <div class="effect_text">
    Maximum size of the nuclear fireball; relevance to damage on the
    ground depends on the height of detonation. If it touches the ground,
    the amount of radioactive fallout is significantly increased.
    Anything inside the fireball is effectively vaporized.
    </div>
  </div>
  </div>`;

    const threeDBDisplayAir = `<div class="container_effects"><div class="all_effects">
    <div class="effect_title">
      <div class="title_image2" style="display: block;"></div>
      <div class="main_title">Thermal radiation radius (3rd degree burns): ${airData.threeDBBlastAir.threeDBRadiusAir} ${airData.threeDBBlastAir.unitAirThreeDB} (${airData.threeDBBlastAir.threeDBAreaAir} ${airData.threeDBBlastAir.areaUnitAirThreeDB})</div>
    </div>
    <div class="effect_text">
      Third degree burns extend throughout the layers of skin, and are often painless because they destroy the pain nerves. 
      They can cause severe scarring or disablement, and can require amputation.
    </div>
  </div>
  </div>`;

    const lightDisplayAir = `<div class="container_effects"><div class="all_effects">
    <div class="effect_title">
      <div class="title_image3" style="display: block;"></div>
      <div class="main_title">Light blast damage radius (1 psi): ${airData.lightBlastAir.lightRadiusAir} ${airData.lightBlastAir.unitAirLight} (${airData.lightBlastAir.lightAreaAir} ${airData.lightBlastAir.areaUnitAirLight})</div>
    </div>
    <div class="effect_text">
      At around 1 psi overpressure, glass windows can be expected to break. This can cause many injuries in a surrounding 
      population who comes to a window after seeing the flash of a nuclear explosion 
      (which travels faster than the pressure wave). Often used as a benchmark for light damage in cities.
    </div>
  </div>
  </div>`;

    const mediumDisplayAir = `<div class="container_effects"><div class="all_effects">
    <div class="effect_title">
      <div class="title_image4" style="display: block;"></div>
      <div class="main_title">Moderate blast damage radius (5 psi): ${airData.mediumBlastAir.mediumRadiusAir} ${airData.mediumBlastAir.unitAirMedium} (${airData.mediumBlastAir.mediumAreaAir} ${airData.mediumBlastAir.areaUnitAirMedium})</div>
    </div>
    <div class="effect_text">
      At 5 psi overpressure, most residential buildings collapse, injuries are universal, fatalities are widespread. 
      The chances of a fire starting in commercial and residential damage are high, and buildings so damaged are at high risk of spreading fire.
      Often used as a benchmark for moderate damage in cities.
    </div>
  </div>
  </div>`;

    const heavyDisplayAir = `<div class="container_effects">
  <div class="all_effects">
    <div class="effect_title">
      <div class="title_image5" style="display: block;"></div>
      <div class="main_title">Heavy blast damage radius (20 psi): ${airData.heavyBlastAir.heavyRadiusAir} ${airData.heavyBlastAir.unitAirHeavy} (${airData.heavyBlastAir.heavyAreaAir} ${airData.heavyBlastAir.areaUnitAirHeavy})</div>
    </div>
    <div class="effect_text">
      At 20 psi overpressure, heavily built concrete buildings are severely damaged or demolished; 
      fatalities approach 100%. Often used as a benchmark for heavy damage in cities.
    </div>
  </div>
</div>`;

    const radiationDisplayAir = `<div class="container_effects">
    <div class="all_effects">
      <div class="effect_title">
        <div class="title_image6" style="display: block;"></div>
        <div class="main_title">Radiation radius (500 rem):  ${airData.radiationAir.radiationRadiusAir} ${airData.radiationAir.unitAirRadiation} (${airData.radiationAir.radiationAreaAir} ${airData.radiationAir.areaUnitAirRadiation})</div>
      </div>
      <div class="effect_text">
        500 rem ionizing radiation dose; likely fatal, in about 1 month; 15% of survivors will eventually die of cancer as a result of exposure.
      </div>
    </div>
  </div>`;

    const titleDisplay = `<div class="container_effects">Effect distances for a ${this.kilotonsInput.value} kilotons airburst:<div>`;

    this.DisplayEffects.insertAdjacentHTML("afterbegin", threeDBDisplayAir);
    this.DisplayEffects.insertAdjacentHTML("afterbegin", lightDisplayAir);
    this.DisplayEffects.insertAdjacentHTML("afterbegin", mediumDisplayAir);
    this.DisplayEffects.insertAdjacentHTML("afterbegin", heavyDisplayAir);
    this.DisplayEffects.insertAdjacentHTML("afterbegin", radiationDisplayAir);
    this.DisplayEffects.insertAdjacentHTML("afterbegin", fireballDisplayAir);
    this.DisplayEffects.insertAdjacentHTML("afterbegin", titleDisplay);

    this.airburstData.fireballMAir = airData.fireballBlastAir.fireballMAir;
    this.airburstData.threeDBMAir = airData.threeDBBlastAir.threeDBMAir;
    this.airburstData.lightMAir = airData.lightBlastAir.lightMAir;
    this.airburstData.mediumMAir = airData.mediumBlastAir.mediumMAir;
    this.airburstData.heavyMAir = airData.heavyBlastAir.heavyMAir;
    this.airburstData.radiationMAir = airData.radiationAir.radiationMAir;
  }

  // Rendering circle on a map based of the kilotons input for airburst
  displayCircleAir() {
    L.circle([this.marker.getLatLng().lat, this.marker.getLatLng().lng], {
      color: "#FFA500",
      radius: this.airburstData.threeDBMAir,
      fillOpacity: 0.6,
      fillColor: "rgba(255, 165, 0, 0.3)",
    }).addTo(this.map);

    L.circle([this.marker.getLatLng().lat, this.marker.getLatLng().lng], {
      color: "#808080",
      radius: this.airburstData.lightMAir,
      fillOpacity: 0.6,
      fillColor: "rgba(128,128,128,0.3)",
    }).addTo(this.map);

    L.circle([this.marker.getLatLng().lat, this.marker.getLatLng().lng], {
      color: "#808080",
      radius: this.airburstData.mediumMAir,
      fillOpacity: 0.6,
      fillColor: "rgba(128, 128, 128, 0.3)",
    }).addTo(this.map);

    L.circle([this.marker.getLatLng().lat, this.marker.getLatLng().lng], {
      color: "#df2020",
      radius: this.airburstData.heavyMAir,
      fillOpacity: 0.6,
      fillColor: "rgba(223, 32, 32, 0.3)",
    }).addTo(this.map);

    L.circle([this.marker.getLatLng().lat, this.marker.getLatLng().lng], {
      color: "#00FF00",
      radius: this.airburstData.radiationMAir,
      fillOpacity: 0.6,
      fillColor: "rgba(0, 255, 0, 0.3)",
    }).addTo(this.map);

    L.circle([this.marker.getLatLng().lat, this.marker.getLatLng().lng], {
      color: "#ffff00",
      radius: this.airburstData.fireballMAir,
      fillOpacity: 0.6,
      fillColor: "rgba(255, 165, 0, 0.3)",
    }).addTo(this.map);
  }
}
