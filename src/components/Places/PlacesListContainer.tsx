import React from "react";
import type { coffeePlaceType, fetchedPlaceType } from "../../appTypes";
// const PlacesList = () => <div></div>;

type PlacePropType = {
  place: fetchedPlaceType;
};
const Place = (props: PlacePropType) => {
  const { place } = props;
  const { id, distance, mainLocation, locationAddress, name } = place;
  const { formattedAddress, locality, region, address } = locationAddress;
  return (
    <div className="min-w-content min-h-content mx-auto my-4 w-64 h-max   rounded-lg text-center shadow-gray-300 shadow-md border-2 border-purple-500 bg-white text-purple-600 m-4 p-2">
      {" "}
      <p className="font-semibold h-1/3">{name}</p>
      <p className="font-light h-1/3">{address}</p>
      <div className="flex justify-between items-center min-w-full min-h-content h-1/3">
        <p className="min-w-content min-h-contenty p-2 mx-auto  rounded-full font-light border-2 border-purple-500  hover:bg-purple-600 hover:text-white cursor-pointer">
          {locality}
        </p>
        <p className="min-w-content min-h-contenty p-2 mx-auto  rounded-full font-light border-2 border-purple-500  hover:bg-purple-600 hover:text-white cursor-pointer">
          {region}
        </p>
      </div>
    </div>
  );
};
type PlacesListContainerPropType = {
  places: coffeePlaceType;
};
const PlacesListContainer = (props: PlacesListContainerPropType) => {
  const { places } = props;
  return (
    <div className="mx-auto my-auto py-4 w-full min-w-content max-h-content  h-content flex justify-around content-around flex-wrap rounded-lg overflow-y-scroll">
      {places &&
        places.map((place: fetchedPlaceType) => <Place place={place} />)}
    </div>
  );
};

export default PlacesListContainer;
