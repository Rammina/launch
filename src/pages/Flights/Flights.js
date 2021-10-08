// package imports
import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

// non- package imports
import FlightItem from "components/FlightItem/FlightItem";
import Spinner from "components/Spinner/Spinner";
import { actionShowLoader, getFlightList, ActionTypes } from "redux/actions";
import "./Flights.scss";

const Flights = () => {
  const flights = useSelector((state) => state.flights);
  const showLoader = useSelector((state) => state.loader.showFlightsLoader);

  const retrievedAllFlights = useSelector(
    (state) => state.calls.retrievedAllFlights
  );
  const dispatch = useDispatch();
  const location = useLocation();
  const flightsContainerRef = useRef(null);
  const FLIGHTS_PER_PAGE = 10;
  // this counts how many times a call was made to the API
  let retrievalCount = 0;

  const getFlightListHandler = () => {
    // If all flights were already retrieved, do not make an API call
    if (retrievedAllFlights) return null;

    dispatch(actionShowLoader("flights", true));
    const limit = FLIGHTS_PER_PAGE * (retrievalCount + 1);
    dispatch(getFlightList({ limit }));
    retrievalCount++;
  };

  // handle loading more flight data items upon scrolling to the bottom
  const handleScroll = () => {
    // Check if user scrolled to the bottom of the window, then load if yes
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      getFlightListHandler();
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    getFlightListHandler();
    return () => {
      // cleanup
      document.removeEventListener("scroll", handleScroll);
      dispatch({ type: ActionTypes.CLEAR_FLIGHTS });
    };
  }, []);

  const renderBottomItem = () => (
    <div className="flights__div--bottom">
      {retrievedAllFlights ? (
        <p>End of list.</p>
      ) : // If not all flights have been retrieved yet, show a loader when performing async action
      showLoader ? (
        <Spinner />
      ) : null}
    </div>
  );
  return (
    <main className="flights container" ref={flightsContainerRef}>
      <section className="flights__section">
        {flights.map((flight, index) => (
          <FlightItem flight={flight} key={index} />
        ))}
        {renderBottomItem()}
      </section>
    </main>
  );
};

export default Flights;
