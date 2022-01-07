import React from "react";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
const Map = ({ issCoords }) => {
    return (
        <MapContainer
            style={{ height: "100vh", width: "100vw" }}
            center={issCoords}
            zoom={3}
            minZoom={2}
            maxZoom={10}
            scrollWheelZoom={true}
            dragging={false}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={issCoords}>
                <Popup>
                    ISS is currently @ {issCoords[1]}, {issCoords[0]}
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export default Map;
