export type latLongType = {
  latitude: number;
  longitude: number;
} | null | void;
export type sortType = "relevance" | "rating" | "distance";
export type radiusType = number | "" | void;
export type nearType = string | void | "";
export type queryType = string;
export type limitType = number | void;
export type optionsType = {
  query: queryType;
  latLong: latLongType | null | void;
  radius: radiusType;
  near: nearType;
  sort: sortType;
  limit: limitType;
} | void;
export type locationAddressType = {
  address: string;
  country: string;
  locality: string;
  postcode: string;
  region: string;
  formattedAddress: string;
};
export type fetchedPlaceType = {
  id: string;
  distance: number;
  mainLocation: latLongType;
  locationAddress: locationAddressType;
  name: string;
};

export type funcfetchPlacesDataType = (options: optionsType) => void;
export type coffeePlaceType = fetchedPlaceType[] | null;
