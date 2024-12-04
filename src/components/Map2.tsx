import React, { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  GeoJSON,
  useMap,
} from "react-leaflet";
import { LatLngTuple } from "leaflet";
import "leaflet/dist/leaflet.css";
import "./App.css";

type Province = {
  center: LatLngTuple;
  zoom: number;
};

const provinces: { [key: string]: Province } = {
  Pichincha: { center: [-0.2299, -78.5249], zoom: 10 },
  Guayas: { center: [-2.1962, -79.8862], zoom: 10 },
  Manabí: { center: [-1.0568, -80.4525], zoom: 10 },
  Azuay: { center: [-2.9006, -79.0045], zoom: 11 },
};

const initialView: { center: LatLngTuple; zoom: number } = {
  center: [-1.8312, -78.1834],
  zoom: 6,
};

const ChangeMapView = ({
  center,
  zoom,
}: {
  center: LatLngTuple;
  zoom: number;
}) => {
  const map = useMap();
  map.setView(center, zoom);
  return null;
};

const Map: React.FC = () => {
  const [selectedProvince, setSelectedProvince] = useState<string | null>(null);
  const [geoData, setGeoData] = useState<any>(null);

  const handleProvinceChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedProvince(event.target.value);
  };

  // Cargar el archivo GeoJSON dinámicamente desde la carpeta public
  useEffect(() => {
    fetch("/ecuador.geojson")
      .then((response) => response.json())
      .then((data) => setGeoData(data))
      .catch((error) => console.error("Error cargando GeoJSON:", error));
  }, []);

  const style = {
    color: "black",
    weight: 2,
    opacity: 1,
    fillOpacity: 0,
  };

  return (
    <div style={{ display: "flex" }}>
      {/* Selector de Provincias */}
      <div style={{ marginRight: "20px", padding: "10px" }}>
        <h3>Seleccione una provincia:</h3>
        <select onChange={handleProvinceChange} value={selectedProvince || ""}>
          <option value="">Ver todo Ecuador</option>
          {Object.keys(provinces).map((province) => (
            <option key={province} value={province}>
              {province}
            </option>
          ))}
        </select>
      </div>

      {/* Mapa */}
      <MapContainer
        center={initialView.center}
        zoom={initialView.zoom}
        className="leaflet-container mx-5"
        style={{ width: "87vw", height: "100vh" }}
        zoomControl={true}
      >
        {selectedProvince && (
          <ChangeMapView
            center={provinces[selectedProvince].center}
            zoom={provinces[selectedProvince].zoom}
          />
        )}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href='https://osm.org/copyright'>OpenStreetMap</a> contributors"
        />
        {selectedProvince && (
          <Marker position={provinces[selectedProvince].center}>
            <Popup>{selectedProvince}</Popup>
          </Marker>
        )}
        {/* Renderizar el GeoJSON después de cargarlo */}
        {geoData && (
          <GeoJSON
            data={geoData}
            style={style}
            onEachFeature={(feature, layer) => {
              // Casting layer como GeoJSON layer
              const geoLayer = layer as L.GeoJSON;

              // Resaltar la provincia seleccionada
              if (
                selectedProvince &&
                feature.properties &&
                feature.properties.DPA_DESPRO === selectedProvince
              ) {
                geoLayer.setStyle({
                  color: "red",
                  weight: 3,
                });
              }
            }}
          />
        )}
      </MapContainer>
    </div>
  );
};

export default Map;
