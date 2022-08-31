import { useEffect, useState } from "react";

export function useCurrentLocation(location) {
  const [coords, setCoords] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => setCoords(`${position.coords.latitude},${position.coords.longitude}`),
      (err) => console.error(err)
    );
  }, []);

  return coords;
}
