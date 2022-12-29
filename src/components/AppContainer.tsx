import React, { useState } from "react";
import PlacesContainer from "./Places/PlacesContainer";
// import MapsContainer from "./Maps/MapsContainer";
import { getPlaces } from "../api";
import type { coffeePlaceType, optionsType } from "../appTypes";
import Spinner from "./Spinner/Spinner";
function AppContainer() {
  //   let coffeePlacesRef = useRef<coffeePlaceType>(null);
  const [places, setPlaces] = useState<coffeePlaceType>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const fetchPlacesData = (options: optionsType): void => {
    setIsLoading(true);
    getPlaces(options)
      .then((res) => {
        setPlaces(res);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
      });
  };

  return (
    <>
      {isLoading ? <Spinner /> : null}
      <div className="max-w-screen min-h-screen flex justify-start content-center">
        <PlacesContainer places={places} fetchPlacesData={fetchPlacesData} />
        {/* <MapsContainer /> */}
      </div>
    </>
  );
}

export default AppContainer;
