import React from "react";
import PlacesListContainer from "./PlacesListContainer";
import SearchBar from "./SearchBar";
import type { coffeePlaceType, funcfetchPlacesDataType } from "../../appTypes";

type PlacesContainerPropType = {
  places: coffeePlaceType;
  fetchPlacesData: funcfetchPlacesDataType;
};
function PlacesContainer(props: PlacesContainerPropType) {
  const { places, fetchPlacesData } = props;
  console.log("places", places);
  return (
    <div className="min-w-full max-h-max  bg-white  flex flex-col justify-start items-center p-2">
      <SearchBar fetchPlacesData={fetchPlacesData} />

      <PlacesListContainer places={places} />
    </div>
  );
}

export default PlacesContainer;
