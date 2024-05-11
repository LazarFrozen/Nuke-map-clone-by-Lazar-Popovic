// exporting preset warheads data
export const warheadInfo = async function () {
  try {
    const response = await fetch("warheads.json");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const result = await response.json();
    return result;
  } catch (err) {
    throw new Error("Can not load warhead data");
  }
};

// exporting preset location data
export const locationsInfo = async function () {
  try {
    const response = await fetch("locations.json");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const result = await response.json();
    return result;
  } catch (err) {
    throw new Error("Can not load location data");
  }
};

// Displaying map
export const map = L.map("map").setView([44.787197, 20.457273], 13);

// Displaying marker
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
    throw new Error("Can not load marker");
  }
};

// Storing surface data based on kilotons input
export const modelData = {};

// Storing air data based on kilotons input
export const airData = {};

// Returning fireball surface data
export const calculateFireballSurface = function (kilotons) {
  const pi = Math.PI;
  const y = Number(kilotons);
  const fireball = Math.pow(y, 0.4) * 145 * 0.3048;
  const fireballConvertKm = fireball / 1000;
  const fireballArea =
    fireball <= 50
      ? Math.pow(fireball, 2) * pi
      : Math.pow(fireballConvertKm, 2) * pi;

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

// Returning three degree burn surface data
export const calculateThreeDBSurface = function (kilotons) {
  const pi = Math.PI;
  const y = Number(kilotons);
  const threeDB = Math.pow(y, 0.41) * 0.67;
  const threeDBConvertM = threeDB * 1000;
  const threeDBArea =
    threeDBConvertM <= 50
      ? Math.pow(threeDBConvertM, 2) * pi
      : Math.pow(threeDB, 2) * pi;

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

// Returning light blast surface data
export const calculateLightBlastDamageSurface = function (kilotons) {
  const pi = Math.PI;
  const y = Number(kilotons);
  const light = Math.pow(y, 0.33) * 1.42;
  const lightConvertM = light * 1000;
  const lightArea =
    lightConvertM <= 50
      ? Math.pow(lightConvertM, 2) * pi
      : Math.pow(light, 2) * pi;

  modelData.lightBlastSurface = {
    lightBlastM: lightConvertM,
    radiusLight:
      lightConvertM <= 1000 ? lightConvertM.toFixed(2) : light.toFixed(2),
    unitLight: lightConvertM <= 1000 ? "m" : "km",
    areaLight: lightArea.toFixed(2),
    areaUnitLight: lightConvertM <= 50 ? "m²" : "km²",
  };

  return modelData.lightBlastSurface;
};

// Returning medium blast surface data
export const calculateMediumBlastDamageSurface = function (kilotons) {
  const pi = Math.PI;
  const y = Number(kilotons);
  const medium = Math.pow(y, 0.33) * 0.46;
  const mediumConvertM = medium * 1000;
  const mediumArea =
    mediumConvertM <= 50
      ? Math.pow(mediumConvertM, 2) * pi
      : Math.pow(medium, 2) * pi;

  modelData.mediumBlastSurface = {
    mediumBlastM: mediumConvertM,
    radiusMedium:
      mediumConvertM <= 1000 ? mediumConvertM.toFixed(2) : medium.toFixed(2),
    unitMedium: mediumConvertM <= 1000 ? "m" : "km",
    areaMedium: mediumArea.toFixed(2),
    areaUnitMedium: mediumConvertM <= 50 ? "m²" : "km²",
  };

  return modelData.mediumBlastSurface;
};

// Returning radiation surface data
export const calculateRadiationDamageSurface = function (kilotons) {
  const pi = Math.PI;
  const y = Number(kilotons);
  const radiationRem = y * 400;
  const radiation = Math.pow(radiationRem, 0.19) / 4;
  const radiationConvertM = radiation * 1000;
  const radiationArea =
    radiationConvertM <= 50
      ? Math.pow(radiationConvertM, 2) * pi
      : Math.pow(radiation, 2) * pi;

  modelData.radiationDamageSurface = {
    radiationM: radiationConvertM,
    radiusRadiation:
      radiationConvertM <= 1000
        ? radiationConvertM.toFixed(2)
        : radiation.toFixed(2),
    unitRadiation: radiationConvertM <= 1000 ? "m" : "km",
    areaRadiation: radiationArea.toFixed(2),
    areaUnitRadiation: radiationConvertM <= 50 ? "m²" : "km²",
  };

  return modelData.radiationDamageSurface;
};

// Returning heavy blast surface data
export const calculateHeavyBlastDamageSurface = function (kilotons) {
  const pi = Math.PI;
  const y = Number(kilotons);
  const heavy = Math.pow(y, 0.33) * 0.22;
  const heavyConvertM = heavy * 1000;
  const heavyArea =
    heavyConvertM <= 50
      ? Math.pow(heavyConvertM, 2) * pi
      : Math.pow(heavy, 2) * pi;

  modelData.heavyBlastSurface = {
    heavyBlastM: heavyConvertM,
    radiusHeavy:
      heavyConvertM <= 1000 ? heavyConvertM.toFixed(2) : heavy.toFixed(2),
    unitHeavy: heavyConvertM <= 1000 ? "m" : "km",
    areaHeavy: heavyArea.toFixed(2),
    areaUnitHeavy: heavyConvertM <= 50 ? "m²" : "km²",
  };

  return modelData.heavyBlastSurface;
};

// Returning fireball air data
export const calculateFireballAirburst = function (kilotons) {
  const pi = Math.PI;
  const y = Number(kilotons);
  const fireballAir = Math.pow(y, 0.4) * 110 * 0.3048;
  const fireballConvertKmAir = fireballAir / 1000;
  const fireballAreaAir =
    (fireballAir <= 50
      ? Math.pow(fireballAir, 2) * pi
      : Math.pow(fireballConvertKmAir, 2)) * pi;

  airData.fireballBlastAir = {
    fireballMAir: fireballAir,
    fireballRadiusAir:
      fireballAir <= 1000
        ? fireballAir.toFixed(2)
        : fireballConvertKmAir.toFixed(2),
    unitAir: fireballAir <= 1000 ? "m" : "km",
    fireballAreaAir: fireballAreaAir.toFixed(2),
    areaUnitAir: fireballAir <= 50 ? "m²" : "km²",
  };

  return airData.fireballBlastAir;
};

// Returning three degree burn air data
export const calculateThreeDBAir = function (kilotons) {
  const pi = Math.PI;
  const y = Number(kilotons);
  const threeDBAir = Math.pow(y, 0.41) * 0.72;
  const threeDBConvertMAir = threeDBAir * 1000;
  const threeDBFixedAir = threeDBAir.toFixed(2);
  const threeDBAreaAir =
    threeDBConvertMAir <= 50
      ? Math.pow(threeDBConvertMAir, 2) * pi
      : Math.pow(threeDBAir, 2) * pi;

  airData.threeDBBlastAir = {
    threeDBMAir: threeDBConvertMAir,
    threeDBRadiusAir:
      threeDBConvertMAir <= 1000
        ? threeDBConvertMAir.toFixed(2)
        : threeDBFixedAir,
    unitAirThreeDB: threeDBConvertMAir <= 1000 ? "m" : "km",
    threeDBAreaAir: threeDBAreaAir.toFixed(2),
    areaUnitAirThreeDB: threeDBConvertMAir <= 50 ? "m²" : "km²",
  };

  return airData.threeDBBlastAir;
};

// Returning light blast air data
export const calculateLightBlastDamageAir = function (kilotons) {
  const pi = Math.PI;
  const y = Number(kilotons);
  const lightAir = Math.pow(y, 0.33) * 1.66;
  const lightConvertMAir = lightAir * 1000;
  const lightFixedAir = lightAir.toFixed(2);

  const lightAreaAir =
    lightConvertMAir <= 50
      ? Math.pow(lightConvertMAir, 2) * pi
      : Math.pow(lightAir, 2) * pi;

  airData.lightBlastAir = {
    lightMAir: lightConvertMAir,
    lightRadiusAir:
      lightConvertMAir <= 1000 ? lightConvertMAir.toFixed(2) : lightFixedAir,
    unitAirLight: lightConvertMAir <= 1000 ? "m" : "km",
    lightAreaAir: lightAreaAir.toFixed(2),
    areaUnitAirLight: lightConvertMAir <= 50 ? "m²" : "km²",
  };

  return airData.lightBlastAir;
};

// Returning moderate blast air data
export const calculateModerateBlastDamageAir = function (kilotons) {
  const pi = Math.PI;
  const y = Number(kilotons);
  const mediumAir = Math.pow(y, 0.33) * 0.57;
  const mediumConvertMAir = mediumAir * 1000;
  const mediumFixedAir = mediumAir.toFixed(2);

  const mediumAreaAir =
    mediumConvertMAir <= 50
      ? Math.pow(mediumConvertMAir, 2) * pi
      : Math.pow(mediumAir, 2) * pi;

  airData.mediumBlastAir = {
    mediumMAir: mediumConvertMAir,
    mediumRadiusAir:
      mediumConvertMAir <= 1000 ? mediumConvertMAir.toFixed(2) : mediumFixedAir,
    unitAirMedium: mediumConvertMAir <= 1000 ? "m" : "km",
    mediumAreaAir: mediumAreaAir.toFixed(2),
    areaUnitAirMedium: mediumConvertMAir <= 50 ? "m²" : "km²",
  };

  return airData.mediumAreaAir;
};

// Returning heavy blast air data
export const calculateHeavyBlastDamageAir = function (kilotons) {
  const pi = Math.PI;
  const y = Number(kilotons);
  const heavyAir = Math.pow(y, 0.33) * 0.24;
  const heavyConvertMAir = heavyAir * 1000;
  const heavyFixedAir = heavyAir.toFixed(2);

  const heavyAreaAir =
    heavyConvertMAir <= 50
      ? Math.pow(heavyConvertMAir, 2) * pi
      : Math.pow(heavyAir, 2) * pi;

  airData.heavyBlastAir = {
    heavyMAir: heavyConvertMAir,
    heavyRadiusAir:
      heavyConvertMAir <= 1000 ? heavyConvertMAir.toFixed(2) : heavyFixedAir,
    unitAirHeavy: heavyConvertMAir <= 1000 ? "m" : "km",
    heavyAreaAir: heavyAreaAir.toFixed(2),
    areaUnitAirHeavy: heavyConvertMAir <= 50 ? "m²" : "km²",
  };

  return airData.heavyBlastAir;
};

// Returning radiation air data
export const calculateRadiationAir = function (kilotons) {
  const pi = Math.PI;
  const y = Number(kilotons);
  const radiation1Air = y * 400;
  const radiation2Air = Math.pow(radiation1Air, 0.19) / 6.75;
  const radiationConvertMAir = radiation2Air * 1000;
  const radiationFixedAir = radiation2Air.toFixed(2);

  const radiationAreaAir =
    radiationConvertMAir <= 50
      ? Math.pow(radiationConvertMAir, 2) * pi
      : Math.pow(radiation2Air, 2) * pi;

  airData.radiationAir = {
    radiationMAir: radiationConvertMAir,
    radiationRadiusAir:
      radiationConvertMAir <= 1000
        ? radiationConvertMAir.toFixed(2)
        : radiationFixedAir,
    unitAirRadiation: radiationConvertMAir <= 1000 ? "m" : "km",
    radiationAreaAir: radiationAreaAir.toFixed(2),
    areaUnitAirRadiation: radiationConvertMAir <= 50 ? "m²" : "km²",
  };

  return airData.radiationAir;
};
