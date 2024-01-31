"use client"

import Image from 'next/image'
import styles from './page.module.css'
import { css } from '../../styled-system/css'
import { center } from '../../styled-system/patterns'
import { GoogleMap, LoadScript , Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100vh",
};

const mapCenter = {
  lat: 34.7293466708865,
  lng: 135.49939605607292,
};

const positionNakazaki = {
  lat: 34.706434,
  lng: 135.503237,
}

const zoom = 16;

export default function Home() {
  return (
    <div className={center({h:"100vh"})}>
      <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={mapCenter}
          zoom={zoom}
          options={{ mapId: '4380a0bce8aefe5a' }}
        >
          <Marker position={positionNakazaki} label={"専門学校"}  />
        </GoogleMap>
      </LoadScript>
    </div>
  )
}
