import { useEffect, useRef } from "react";
import { Sidebar } from "./components/Sidebar";
import { map, MapProvider, useMapContext } from "./Map";

function App() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const { createMap } = useMapContext();
  useEffect(() => {
    if (mapContainer.current) {
      createMap(mapContainer.current);
    }
  }, []);

  return (
    <MapProvider value={map}>
      <div className="container">
        <Sidebar />
        <div ref={mapContainer} id="pokemap" />
      </div>
    </MapProvider>
  );
}

export default App;
