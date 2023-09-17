import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const mapStyles = {
  width: "100%",
  height: "100%",
};

const Map = ({ data, zoom, center }) => {
  return (
    <LoadScript googleMapsApiKey={process.env.REACt_APP_GOOGLE_MAP_KEY}>
      <GoogleMap mapContainerStyle={mapStyles} zoom={zoom} center={center}>
        {data.map((item) => (
          <Marker key={item.name} position={item.location} />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
