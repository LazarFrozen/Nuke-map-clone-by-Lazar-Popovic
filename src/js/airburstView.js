class airburstView {
  kilotonsInput = document.querySelector(".input_kilotons");
  DisplayEffects = document.querySelector(".all_effects");
  detonate = document.querySelector(".detonate_button");
  airburstData = {};

  displayAirFireball({
    fireballMAir,
    fireballRadiusAir,
    unitAir,
    fireballAreaAir,
    areaUnitAir,
  }) {
    const fireballDisplayAir = `<div class="container_effects"><div class="all_effects">
  <div class="effect_title">
    <div class="title_image" style="display: block;"></div>
    <div class="main_title">FireBall Radius: ${fireballRadiusAir} ${unitAir} (${fireballAreaAir} ${areaUnitAir})</div>
  </div>
  <div class="effect_text">
  Maximum size of the nuclear fireball; relevance to damage on the 
  ground depends on the height of detonation. If it touches the ground,
  the amount of radioactive fallout is significantly increased. 
  Anything inside the fireball is effectively vaporized. 
  </div>
</div>
</div>`;

    this.DisplayEffects.insertAdjacentHTML("afterbegin", fireballDisplayAir);

    this.airburstData.fireballAirm = fireballMAir;
  }

  displayCircleAir(map, marker) {
    this.map = map;
    this.marker = marker;
    console.log(this.map);
    console.log(this.marker);

    L.circle([this.marker.getLatLng().lat, this.marker.getLatLng().lng], {
      color: "#ffff00",
      radius: this.airburstData.fireballAirm,
      fillOpacity: 0.6,
      fillColor: "rgba(255, 165, 0, 0.3)",
    }).addTo(this.map);
  }
}

export default new airburstView();
