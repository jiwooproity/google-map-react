import Map from "./Map";

function App() {
  const data = [
    {
      name: "Location",
      location: {
        lat: 37.8,
        lng: -122.447,
      },
    },
    {
      name: "Location 2",
      location: {
        lat: 41.3917,
        lng: 2.1649,
      },
    },
    {
      name: "Location 3",
      location: {
        lat: 41.3773,
        lng: 2.1585,
      },
    },
    {
      name: "Location 4",
      location: {
        lat: 41.3797,
        lng: 2.1682,
      },
    },
    {
      name: "Location 5",
      location: {
        lat: 41.4055,
        lng: 2.1915,
      },
    },
  ];

  return (
    <div className="container">
      <div className="map-wrapper">
        <Map data={data} center={{ lat: 37.75, lng: -122.447 }} zoom={13} />
      </div>
    </div>
  );
}

export default App;
