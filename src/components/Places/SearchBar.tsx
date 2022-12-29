import React, { useState, useEffect } from "react";
import type {
  funcfetchPlacesDataType,
  queryType,
  optionsType,
  latLongType,
} from "../../appTypes";
import { getGeolocation } from "../../api";
type searchBarPropType = {
  fetchPlacesData: funcfetchPlacesDataType;
};
function SearchBar(props: searchBarPropType) {
  const { fetchPlacesData } = props;
  const [query, setQuery] = useState<queryType>("");

  const searchPlaces = () => {
    let latlong: latLongType = {
      latitude: 0,
      longitude: 0,
    };
    getGeolocation().then((position: any) => {
      latlong = {
        latitude: position.coords.latitude.toFixed(4),
        longitude: position.coords.longitude.toFixed(4),
      };
      console.log(latlong);
      // using some constants for now
      const options: optionsType = {
        query,
        latLong: latlong,
        radius: "",
        near: "",
        sort: "relevance",
        limit: 10,
      };
      fetchPlacesData(options);
    });
  };

  return (
    <div>
      <div className="flex justify-around items-center min-w-full">
        <input
          type="text"
          className="mx-auto my-4 rounded-full min-w-content w-3/4 px-4 py-4 outline-none border-2 border-solid border-purple-500"
          placeholder="Search coffee place.."
          value={query}
          onChange={(evt) => setQuery(evt.target.value)}
        />
        <button
          className="rounded-full  min-w-content w-16 outline-none bg-purple-500 text-white p-4 mx-2"
          onClick={searchPlaces}
        >
          GO{" "}
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
