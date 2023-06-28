import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = () => {
    const mapStyles = {
        height: '400px',
        width: '100%'
    };

    const defaultCenter = {
        lat: -26.831087612702838,
        lng: -65.19722157564975,
    };

    return (
        <LoadScript googleMapsApiKey="YOUR_API_KEY">
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={13}
                center={defaultCenter}
            >
                <Marker position={defaultCenter} />
            </GoogleMap>
        </LoadScript>
    );
}


