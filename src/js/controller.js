import * as model from "./model.js";
import LayerView from "./layerView.js";
import SurfaceView from "./surfaceView.js";

// Managing surface inputs
const controlSurfaceDetonate = function () {
  const kilotons = SurfaceView.kilotonsInput.value;

  model.calculateFireballSurface(kilotons);

  model.calculateThreeDBSurface(kilotons);

  model.calculateLightBlastDamageSurface(kilotons);

  model.calculateMediumBlastDamageSurface(kilotons);

  model.calculateRadiationDamageSurface(kilotons);

  model.calculateHeavyBlastDamageSurface(kilotons);

  SurfaceView.displaySurfaceContent(model.modelData);
};

// Managing airburst inputs
const controlAirDetonate = function () {
  const kilotons = SurfaceView.kilotonsInput.value;

  model.calculateFireballAirburst(kilotons);

  model.calculateThreeDBAir(kilotons);

  model.calculateLightBlastDamageAir(kilotons);

  model.calculateModerateBlastDamageAir(kilotons);

  model.calculateHeavyBlastDamageAir(kilotons);

  model.calculateRadiationAir(kilotons);

  SurfaceView.displayAirContent(model.airData);
};

const mapMarker = async function () {
  try {
    // Sending marker, map info
    const marker = model.markerFunc();

    SurfaceView.setMarker(marker);

    SurfaceView.setMap(model.map);

    LayerView.initMap(model.map, marker);

    // Sending warhead data
    const warheadInfo = await model.warheadInfo();
    SurfaceView.warheadsData(warheadInfo);

    // Sending locations
    const locationsInfo = await model.locationsInfo();
    SurfaceView.locationData(locationsInfo);
  } catch (err) {
    SurfaceView.renderError(`${err}`);
  }
};
mapMarker();

const initialization = function () {
  SurfaceView.detonateButton(controlSurfaceDetonate, controlAirDetonate);
  SurfaceView.newDetonation(controlSurfaceDetonate, controlAirDetonate);
};
initialization();
