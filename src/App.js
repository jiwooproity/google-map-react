import Map from "./Map";

const data = [
  {
    name: "Location 1",
    location: {
      lat: 41.3954,
      lng: 2.162,
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

function App() {
  return (
    <div className="container">
      <div className="map-wrapper">
        <Map data={data} center={{ lat: 41.3851, lng: 2.1734 }} zoom={13} />
      </div>
    </div>
  );
}

export default App;
