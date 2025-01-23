/* global google */
import React, { useState, useRef, useMemo } from 'react';
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  DirectionsRenderer,
  Autocomplete,
} from '@react-google-maps/api';
import { FaMapMarkerAlt, FaRoute, FaTrashAlt } from 'react-icons/fa';
import Header from '../Header/Header';

const center = { lat: 48.8584, lng: 2.2945 };

const FindHospital = () => {
  const loaderOptions = useMemo(
    () => ({
      googleMapsApiKey: "AIzaSyBqtiPa0XEwOdZebUP6V2wV45PjLEbpXHg",
      libraries: ['places'],
    }),
    []
  );

  const { isLoaded } = useJsApiLoader(loaderOptions);

  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');
  const originRef = useRef();
  const destinationRef = useRef();

  const mapRef = useRef(null);
  const panoramaRef = useRef(null);

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  async function calculateRoute() {
    if (!originRef.current.value || !destinationRef.current.value) return;
    const directionsService = new window.google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: originRef.current.value,
      destination: destinationRef.current.value,
      travelMode: window.google.maps.TravelMode.DRIVING,
    });
    setDirectionsResponse(results);
    setDistance(results.routes[0].legs[0].distance.text);
    setDuration(results.routes[0].legs[0].duration.text);

    // Start Street View along the route
    const routePath = results.routes[0].overview_path;
    showStreetView(routePath);
  }

  function showStreetView(routePath) {
    if (routePath && routePath.length > 0) {
      const streetViewService = new window.google.maps.StreetViewService();
      const panorama = new window.google.maps.StreetViewPanorama(
        document.getElementById('street-view'),
        {
          position: routePath[0],
          pov: {
            heading: 34,
            pitch: 10,
          },
          zoom: 1,
        }
      );
      panoramaRef.current = panorama;

      // Start viewing the route from the beginning
      streetViewService.getPanorama({ location: routePath[0] }, (data, status) => {
        if (status === 'OK') {
          panorama.setPosition(routePath[0]);
          panorama.setPov({ heading: 34, pitch: 10 });
        }
      });

      // Add more functionality here to show a smoother view of the whole route
    }
  }

  function clearRoute() {
    setDirectionsResponse(null);
    setDistance('');
    setDuration('');
    originRef.current.value = '';
    destinationRef.current.value = '';
    if (panoramaRef.current) {
      panoramaRef.current.setPosition(center);
    }
  }

  const handleMapLoad = (map) => {
    mapRef.current = map;
    map.setMapTypeId(window.google.maps.MapTypeId.SATELLITE);
  };

  return (
    <>
      <Header />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '150vh',
          width: '100vw',
          padding: '1rem',
          background:
            'radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, rgba(245, 245, 245, 1) 100%), url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'40\' height=\'40\' fill=\'none\'><circle cx=\'20\' cy=\'20\' r=\'2\' fill=\'%23d1e3f8\'/></svg>")',
          backgroundSize: '40px 40px, cover',
        }}
      >
        <div
          style={{
            width: '100%',
            maxWidth: '1200px',
            borderRadius: '10px',
            overflow: 'hidden',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
          }}
        >
          <GoogleMap
            center={center}
            zoom={15}
            mapContainerStyle={{ width: '100%', height: '80vh' }}
            options={{
              zoomControl: true,
              streetViewControl: true,
              mapTypeControl: true,
              fullscreenControl: true,
            }}
            onLoad={handleMapLoad}
          >
            <Marker position={center} />
            {directionsResponse && <DirectionsRenderer directions={directionsResponse} />}
          </GoogleMap>
        </div>

        <div
          style={{
            marginTop: '1rem',
            padding: '1rem',
            backgroundColor: 'white',
            borderRadius: '10px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
            textAlign: 'center',
            width: '100%',
            maxWidth: '600px',
          }}
        >
          <h2 style={{ marginBottom: '2rem', fontSize: '1.5rem', fontWeight: 'bold', color: '#007bff' }}>
            <FaMapMarkerAlt style={{ marginRight: '0.5rem', color: '#007bff' }} />
            Find Hospital
          </h2>
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
            <Autocomplete
              options={{
                types: ['geocode'],
              }}
            >
              <input
                type="text"
                placeholder="Enter Origin"
                ref={originRef}
                style={{
                  flex: 1,
                  padding: '0.5rem',
                  borderRadius: '5px',
                  border: '1px solid #ccc',
                  fontSize: '1rem',
                  marginLeft: '5rem',
                }}
              />
            </Autocomplete>
            <Autocomplete
              options={{
                types: ['hospital'],
              }}
            >
              <input
                type="text"
                placeholder="Enter Destination"
                ref={destinationRef}
                style={{
                  flex: 1,
                  padding: '0.5rem',
                  borderRadius: '5px',
                  border: '1px solid #ccc',
                  fontSize: '1rem',
                }}
              />
            </Autocomplete>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <button
              onClick={calculateRoute}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.5rem 1rem',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                fontSize: '1rem',
                cursor: 'pointer',
              }}
            >
              <FaRoute /> Calculate Route
            </button>
            <button
              onClick={clearRoute}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.5rem 1rem',
                backgroundColor: '#dc3545',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                fontSize: '1rem',
                cursor: 'pointer',
              }}
            >
              <FaTrashAlt /> Clear
            </button>
          </div>
          <div>
            <p style={{ fontSize: '1.1rem', fontWeight: 'bold', margin: '0.5rem 0' }}>
              Distance: <span style={{ color: '#007bff' }}>{distance || 'N/A'}</span>
            </p>
            <p style={{ fontSize: '1.1rem', fontWeight: 'bold', margin: '0.5rem 0' }}>
              Duration: <span style={{ color: '#007bff' }}>{duration || 'N/A'}</span>
            </p>
          </div>
          <div
            id="street-view"
            style={{ height: '300px', marginTop: '20px', width: '100%' }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default FindHospital;
