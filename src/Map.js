import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  LoadScript,
  MarkerF,
  CircleF,
  HeatmapLayerF,
} from "@react-google-maps/api";

const mapStyles = {
  width: "100%",
  height: "100%",
};

const Map = ({ data, zoom, center }) => {
  const [heatMapData, setHeatMapData] = useState([]);
  const [loading, setLoading] = useState(false);

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
            />
          </>
        ))}
        <CircleF
          center={center}
          radius={2000}
          options={{ strokeColor: "red", fillOpacity: 0.1 }}
        />
        {loading && (
          <HeatmapLayerF
            options={{
              radius: 50,
            }}
            data={heatMapData}
          />
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
