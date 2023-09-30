import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  LoadScript,
  MarkerF,
  CircleF,
  HeatmapLayerF,
  PolylineF,
  InfoWindowF,
} from "@react-google-maps/api";

const mapStyles = {
  width: "100%",
  height: "100%",
};

const Map = ({ data, zoom, center }) => {
  const [heatMapData, setHeatMapData] = useState([]);
  const [loading, setLoading] = useState(false);

  const [activeMarker, setActiveMarker] = useState(null);

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  useEffect(() => {
    if (window.google) {
      const heatMapData = [
        new window.google.maps.LatLng(37.782, -122.447),
        new window.google.maps.LatLng(37.782, -122.445),
        new window.google.maps.LatLng(37.782, -122.443),
        new window.google.maps.LatLng(37.782, -122.441),
        new window.google.maps.LatLng(37.782, -122.439),
        new window.google.maps.LatLng(37.782, -122.437),
        new window.google.maps.LatLng(37.782, -122.435),
        new window.google.maps.LatLng(37.785, -122.447),
        new window.google.maps.LatLng(37.785, -122.445),
        new window.google.maps.LatLng(37.785, -122.443),
        new window.google.maps.LatLng(37.785, -122.441),
        new window.google.maps.LatLng(37.785, -122.439),
        new window.google.maps.LatLng(37.785, -122.437),
        new window.google.maps.LatLng(37.785, -122.435),
      ];
      const heatMapArray = new window.google.maps.MVCArray(heatMapData);
      setHeatMapData(heatMapArray);
      setLoading(true);
    }
  }, []);

  return (
    <LoadScript
      libraries={["visualization"]}
      googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_KEY}
    >
      <GoogleMap mapContainerStyle={mapStyles} zoom={zoom} center={center}>
        {data.map((item) => (
          <>
            <MarkerF
              key={item.name}
              position={item.location}
              title={item.name}
              onClick={() => handleActiveMarker(item.name)}
            >
              {activeMarker === item.name ? (
                <InfoWindowF onCloseClick={() => setActiveMarker(null)}>
                  <div>{item.name}</div>
                </InfoWindowF>
              ) : null}
            </MarkerF>
          </>
        ))}
        <MarkerF
          key="start"
          position={center}
          label={{ text: `START`, color: "black" }}
          icon="http://maps.google.com/mapfiles/kml/shapes/arrow.png"
        >
          {activeMarker === "start" ? (
            <InfoWindowF onCloseClick={() => setActiveMarker(null)}>
              <div>Start</div>
            </InfoWindowF>
          ) : null}
        </MarkerF>
        <PolylineF
          path={data.map((item) => ({
            lat: Number(item && item.location.lat, 10),
            lng: Number(item && item.location.lng, 10),
          }))}
          options={{
            strokeColor: "#07966B",
            strokeOpacity: 1,
            strokeWeight: 2,
            icons: [
              {
                icon: "hello",
                offset: "0",
                repeat: "10px",
              },
            ],
          }}
        />
        <CircleF
          center={center}
          radius={2000}
          options={{ strokeColor: "red", fillOpacity: 0.1 }}
        />
        {loading && <HeatmapLayerF options={{}} data={heatMapData} />}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
