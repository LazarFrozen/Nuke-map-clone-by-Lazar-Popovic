import * as model from "./model.js";
import LayerView from "./layerView.js";
import SurfaceView from "./surfaceView.js";
import AirburstView from "./airburstView.js";

const controlDetonate = async function () {
  try {
    const kilotons = SurfaceView.kilotonsInput.value;

    const fireball = model.calculateFireballSurface(kilotons);
    // SurfaceView.displaySurfaceFireball(fireball);

    const threeDBsurface = model.calculateThreeDBSurface(kilotons);
    SurfaceView.displaySurfaceFireball(model.modelData);

    const fireballAir = model.calculateFireballAirburst(kilotons);
    AirburstView.displayAirFireball(fireballAir);
  } catch (err) {
    console.log(err);
  }
};

const controlAirBurst = async function () {
  try {
    const kilotons = AirburstView.kilotonsInput.value;
  } catch (err) {
    console.log(err);
  }
};

const MapMarker = async function () {
  try {
    // Sending marker, map info
    const marker = await model.markerFunc();
    SurfaceView.setMarker(marker);
    SurfaceView.setMap(model.map);

    // Sending warhead data
    const warheadInfo = await model.warheadInfo();
    SurfaceView.warheadsData(warheadInfo);

    // Sending locations
    const locationsInfo = await model.locationsInfo();
    SurfaceView.locationData(locationsInfo);
  } catch (err) {
    console.log(err);
  }
};
MapMarker();

const initialization = function () {
  LayerView.initMap(model.map);
  SurfaceView.detonateButton(controlDetonate);
};
initialization();
