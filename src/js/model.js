export const warheadInfo = async function () {
  try {
    const response = await fetch("warheads.json");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const result = await response.json();
    return result;
  } catch (err) {
    console.log(err);
  }
};

export const locationsInfo = async function () {
  try {
    const response = await fetch("locations.json");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const result = await response.json();
    return result;
  } catch (err) {
    console.log(err);
  }
};

export const map = L.map("map").setView([44.787197, 20.457273], 13);

export const markerFunc = async function () {
  try {
    const iconOptions = {
      iconUrl: "IMG/nuke-marker.png",
      iconSize: [30, 50],
      iconAnchor: [15, 50],
    };

    const customIcon = L.icon(iconOptions);
    const markerOptions = {
      icon: customIcon,
      draggable: true,
    };

    let marker = L.marker([44.787197, 20.457273], markerOptions).addTo(map);

    return marker;
  } catch (err) {
    console.log(err);
  }
};

export const modelData = {
  fireballSurface: {},
  threeDbSurface: {},
};

export const calculateFireballSurface = function (kilotons) {
  const pi = Math.PI;
  const y = Number(kilotons);
  const fireball = Math.pow(y, 0.4) * 145 * 0.3048;
  const fireballConvertKm = fireball / 1000;
  const fireballArea =
    (fireball <= 50
      ? Math.pow(fireball, 2) * pi
      : Math.pow(fireballConvertKm, 2)) * pi;

  modelData.fireballSurface = {
    fireballM: fireball,
    fireballRadius:
      fireball <= 1000 ? fireball.toFixed(2) : fireballConvertKm.toFixed(2),
    unitFire: fireball <= 1000 ? "m" : "km",
    fireballArea: fireballArea.toFixed(2),
    areaUnitFire: fireball <= 50 ? "m²" : "km²",
  };

  return modelData.fireballSurface;
};

export const calculateThreeDBSurface = function (kilotons) {
  const pi = Math.PI;
  const y = Number(kilotons);
  const threeDB = Math.pow(y, 0.4) * 0.67;
  const threeDBConvertM = threeDB * 1000;
  const threeDBArea =
    (threeDBConvertM <= 50
      ? Math.pow(threeDBConvertM, 2) * pi
      : Math.pow(threeDB, 2)) * pi;

  modelData.threeDbSurface = {
    threeDBM: threeDBConvertM,
    threeDBRadius:
      threeDBConvertM <= 1000 ? threeDBConvertM.toFixed(2) : threeDB.toFixed(2),
    unitThreeDB: threeDBConvertM <= 1000 ? "m" : "km",
    threeDBArea: threeDBArea.toFixed(2),
    areaUnitThreeDB: threeDBConvertM <= 50 ? "m²" : "km²",
  };

  return modelData.threeDbSurface;
};

export const calculateFireballAirburst = function (kilotons) {
  const pi = Math.PI;
  const y = Number(kilotons);
  const fireballAir = Math.pow(y, 0.4) * 110 * 0.3048;
  const fireballConvertKmAir = fireballAir / 1000;
  const fireballAreaAir =
    (fireballAir <= 50
      ? Math.pow(fireballAir, 2) * pi
      : Math.pow(fireballConvertKmAir, 2)) * pi;

  return {
    fireballMAir: fireballAir,
    fireballRadiusAir:
      fireballAir <= 1000
        ? fireballAir.toFixed(2)
        : fireballConvertKmAir.toFixed(2),
    unitAir: fireballAir <= 1000 ? "m" : "km",
    fireballAreaAir: fireballAreaAir.toFixed(2),
    areaUnitAir: fireballAir <= 50 ? "m²" : "km²",
  };
};
