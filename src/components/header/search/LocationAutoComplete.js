import React, { memo, useContext, useCallback, useState } from "react";
import "../../../styles/styles.css";

import { locationContext } from "../../../App";

import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import PlacesAutocomplete from "react-places-autocomplete";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const API_KEY = "AIzaSyDEoiDfpQW73648IFxcQUNIupKCOJKf6IQ";

const LocationAutoComplete = () => {
  // local state management
  const [addressPlaceholder, setAddressPlaceholder] = useState(
    "Enter location"
  );

  // using imported context
  const { address, lat, long, location, setLocation } = useContext(
    locationContext
  );

  // Log error status and clear dropdown when Google Maps API returns an error.
  const onError = useCallback((status, clearSuggestions) => {
    handleToast(
      "Google Maps API returned error with status: " + status,
      "error"
    );
    clearSuggestions();
  }, []);

  // limit the results to below constraints only
  const searchOptions = {
    types: ["address"],
    componentRestrictions: {
      country: ["in"],
    },
  };

  // handleChange
  const handleChange = useCallback(
    (add) => {
      setLocation(() => {
        return {
          ...location,
          address: add,
        };
      });
    },
    [location, setLocation]
  );

  // handleSelect
  const handleSelect = useCallback(
    (add) => {
      localStorage.setItem("address", add);
      geocodeByAddress(add)
        .then((results) => getLatLng(results[0]))
        .then((latLng) => {
          localStorage.setItem("lat", latLng.lat);
          localStorage.setItem("long", latLng.lng);
          setLocation(() => {
            return {
              address: add,
              lat: latLng.lat,
              long: latLng.lng,
            };
          });
        })
        .catch((error) => console.log("Address selection error: ", error));
    },
    [setLocation]
  );

  // --------------------------------------------------
  // ---------LOCATION SEARCH BLOCK STARTS HERE--------
  const getLocation = () => {
    if (navigator.geolocation) {
      setAddressPlaceholder(() => {
        return "Locating...";
      });
      navigator.geolocation.getCurrentPosition(showPosition, handleError, {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 0,
      });
    } else {
      alert(
        "This feature isn't supported. Try manually searching the address..."
      );
    }
  };

  const showPosition = (position) => {
    let posX = position.coords.latitude;
    let posY = position.coords.longitude;

    localStorage.setItem("lat", posX);
    localStorage.setItem("long", posY);

    setLocation(() => {
      return {
        ...location,
        lat: posX,
        long: posY,
      };
    });

    let currentLocation = "";

    let locAPI =
      "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
      posX +
      "," +
      posY +
      "&key=" +
      API_KEY;

    axios
      .get(locAPI)
      .then((response) => {
        currentLocation = response.data.results[0].formatted_address;
        // setting location box status to locating
        localStorage.setItem("address", currentLocation);
        setLocation(() => {
          return {
            ...location,
            address: currentLocation,
          };
        });
        handleToast(currentLocation, "dark");
      })
      .catch((error) => {
        handleToast(error, "error");
      })
      .finally();
  };

  const handleError = (error) => {
    let errMsg = "";
    switch (error.code) {
      case error.PERMISSION_DENIED:
        errMsg =
          "PERMISSION_DENIED. Allow website to use location in site settings...";
        break;
      case error.POSITION_UNAVAILABLE:
        errMsg =
          "POSITION_UNAVAILABLE. Your current position is unavailable, please enter your location manually...";
        break;
      case error.TIMEOUT:
        errMsg = "Server timed out. Make sure Location service is turned on...";
        break;
      case error.UNKNOWN_ERROR:
        errMsg = "UNKNOWN_ERROR. Error code: 0";
        break;

      default:
        errMsg =
          "Something unexpected happened. We couldn't process your request...";
        break;
    }
    // setting location box status to locating
    setAddressPlaceholder(() => {
      return "Couldn't locate...";
    });
    handleToast(errMsg, "error");
  };

  const handleToast = (message, toastType) => {
    if (toastType === "dark") {
      toast.dark(message, {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    } else if (toastType === "error") {
      toast.error(message, {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    } else {
      toast(message);
    }
  };

  // ----------LOCATION SEARCH BLOCK ENDS HERE---------
  // --------------------------------------------------

  return (
    <div>
      <PlacesAutocomplete
        value={address}
        onChange={handleChange}
        onSelect={handleSelect}
        onError={onError}
        searchOptions={searchOptions}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div className="autocomplete_places_main_outer_div">
            <input
              {...getInputProps({
                placeholder: addressPlaceholder,
                className: "location_search_input",
                autoFocus: false,
                required: true,
              })}
            />
            <div className="autocomplete_dropdown_container">
              {loading && (
                <div className="loading_location_div">
                  Loading... <i className="fas fa-circle-notch fa-spin"></i>
                </div>
              )}
              {suggestions.map((suggestion) => {
                const className = "suggestion_item";
                return (
                  <div
                    key={suggestion.id}
                    {...getSuggestionItemProps(suggestion, {
                      className,
                    })}
                  >
                    <div className="suggestion_desc">
                      {suggestion.description}
                    </div>
                    <div className="up_left_arrow">
                      <i className="fas fa-arrow-left"></i>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
      {/* location utility btn */}
      <div className="searchbar_utility_btn_location" onClick={getLocation}>
        <i className="fas fa-crosshairs"></i>
      </div>
      <ToastContainer />
    </div>
  );
};

export default memo(LocationAutoComplete);
