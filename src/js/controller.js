import * as model from "./model.js";
import LayerView from "./layerView.js";
import SurfaceView from "./surfaceView.js";

// Managing surface inputs
const controlSurfaceDetonate = async function () {
  try {
    const kilotons = SurfaceView.kilotonsInput.value;

    model.calculateFireballSurface(kilotons);

    model.calculateThreeDBSurface(kilotons);

    model.calculateLightBlastDamageSurface(kilotons);

    model.calculateMediumBlastDamageSurface(kilotons);

    model.calculateRadiationDamageSurface(kilotons);

    model.calculateHeavyBlastDamageSurface(kilotons);

    SurfaceView.displaySurfaceContent(model.modelData);
  } catch (err) {
    SurfaceView.renderError(`${err}`);
  }
};

// Managing airburst inputs
const controlAirDetonate = async function () {
  try {
    const kilotons = SurfaceView.kilotonsInput.value;

    model.calculateFireballAirburst(kilotons);

    model.calculateThreeDBAir(kilotons);

    model.calculateLightBlastDamageAir(kilotons);

    model.calculateModerateBlastDamageAir(kilotons);

    model.calculateHeavyBlastDamageAir(kilotons);

    model.calculateRadiationAir(kilotons);

    SurfaceView.displayAirContent(model.airData);
  } catch (err) {
    SurfaceView.renderError(`${err}`);
  }
};

const mapMarker = async function () {
  try {
    // Sending marker, map info
    const marker = await model.markerFunc();
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
