// src/components/LocationWidget.jsx
import { useEffect, useState } from "react";

const LocationWidget = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setLocation({
            lat: pos.coords.latitude.toFixed(4),
            lon: pos.coords.longitude.toFixed(4)
          });
        },
        (err) => {
          setLocation({ error: "Location permission denied." });
        }
      );
    } else {
      setLocation({ error: "Geolocation not supported." });
    }
  }, []);

  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Your Location</h3>
      {location ? (
        location.error ? (
          <p className="text-red-600">{location.error}</p>
        ) : (
          <p className="text-gray-700">
            Lat: {location.lat}, Lon: {location.lon}
          </p>
        )
      ) : (
        <p className="text-gray-500">Fetching location...</p>
      )}
    </div>
  );
};

export default LocationWidget;
