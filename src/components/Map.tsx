import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { LatLngTuple } from "leaflet";
import "leaflet/dist/leaflet.css";
import "../CSS_styles/Map.css";

type Province = {
  center: LatLngTuple;
  zoom: number;
};

const provinces: { [key: string]: Province } = {
  Azuay: { center: [-2.90055, -79.00453], zoom: 10 },
  Bolivar: { center: [-1.59263, -79.00098], zoom: 10 },
  Cañar: { center: [-2.73969, -78.8486], zoom: 10 },
  Carchi: { center: [0.81187, -77.71727], zoom: 10 },
  Chimborazo: { center: [-1.67098, -78.64712], zoom: 10 },
  Cotopaxi: { center: [-0.93521, -78.61554], zoom: 10 },
  El_Oro: { center: [-0.93521, -78.61554], zoom: 10 },
  Esmeraldas: { center: [0.9592, -79.65397], zoom: 10 },
  Galapagos: { center: [-0.901513, -89.610036], zoom: 10 },
  Guayas: { center: [-2.20584, -79.90795], zoom: 10 },
  Imbabura: { center: [0.35171, -78.12233], zoom: 10 },
  Loja: { center: [-3.99313, -79.20422], zoom: 10 },
  Los_Rios: { center: [-1.80217, -79.53443], zoom: 10 },
  Manabi: { center: [-1.05458, -80.45445], zoom: 10 },
  Morona_Santiago: { center: [-2.30868, -78.11135], zoom: 10 },
  Napo: { center: [-0.9938, -77.81286], zoom: 10 },
  Orellana: { center: [-0.93333, -75.66666], zoom: 10 },
  Pastaza: { center: [-1.48369, -78.00257], zoom: 10 },
  Pichincha: { center: [-0.22985, -78.52495], zoom: 10 },
  Santa_Elena: { center: [-2.22622, -80.85873], zoom: 10 },
  Santo_Domingo_de_los_Tsachilas: { center: [-0.25305, -79.17536], zoom: 10 },
  Sucumbios: { center: [-0.08333, -76.88333], zoom: 10 },
  Tungurahua: { center: [-1.24908, -78.61675], zoom: 10 },
  Zamora_Chinchipe: { center: [-4.0692, -78.9561], zoom: 10 },
};

const initialView: { center: LatLngTuple; zoom: number } = {
  center: [-1.8312, -78.1834], // Centro aproximado de Ecuador
  zoom: 7, // Zoom para abarcar todo el país
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

  const handleProvinceChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedProvince(event.target.value || null);
  };

  return (
    <div className="map-container">
      {/* Selector de Provincias */}
      <div className="province-selector">
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
        className="leaflet-container"
        zoomControl={true}
      >
        {/* Cambia la vista del mapa si se selecciona una provincia */}
        {selectedProvince ? (
          <ChangeMapView
            center={provinces[selectedProvince].center}
            zoom={provinces[selectedProvince].zoom}
          />
        ) : (
          <ChangeMapView center={initialView.center} zoom={initialView.zoom} />
        )}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href='https://osm.org/copyright'>OpenStreetMap</a> contributors"
        />
        {/* Coloca un marcador en el centro de la provincia seleccionada */}
        {selectedProvince && (
          <Marker position={provinces[selectedProvince].center}>
            <Popup>{selectedProvince}</Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
};

export default Map;
