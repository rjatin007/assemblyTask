import type { optionsType, fetchedPlaceType } from "./appTypes";

const key = "";
const rootUrl = "";
const headers = {
  method: "GET",
  headers: {
    Accept: "application/json",
    Authorization: key,
  },
};

export const getPlaces = (options: optionsType) => {
  let queryStr = `${rootUrl}/search`;
  if (options) {
    const { query, latLong, radius, near, sort, limit } = options;
    const latLongStr = latLong
      ? `${latLong.latitude},${latLong.longitude}`
      : "";
    queryStr = `${queryStr}?query=${query}&ll=${latLongStr}&radius=${radius}&near=${near}&sort=${sort}&limit=${limit}`;
  }

  return fetch(`${queryStr}`, headers)
    .then((response) => response.json())
    .then((res) => {
      const { results } = res;
      const newResults = results.map(
        (place: any): fetchedPlaceType => ({
          id: place.fsq_id,
          distance: place.distance,
          mainLocation: place.geocodes.main,
          locationAddress: {
            address: place.location.address,
            country: place.location.country,
            locality: place.location.locality,
            postcode: place.location.postcode,
            region: place.location.region,
            formattedAddress: place.location.formatted_address,
          },
          name: place.name,
        })
      );
      return newResults;
    })
    .catch((err) => console.error(err));
};

export const getGeolocation = () => {
  return new Promise((res, rej) => {
    navigator.geolocation.getCurrentPosition(function (position) {
      if (position) {
        res(position);
      } else {
        rej("Permission denied");
      }
    });
  });
};
