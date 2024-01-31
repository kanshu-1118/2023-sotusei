"use client"

import Image from 'next/image'
import styles from './page.module.css'
import { useState } from "react"
import { css } from '../../styled-system/css'
import { center,flex } from '../../styled-system/patterns'
import { GoogleMap, LoadScript , Marker } from "@react-google-maps/api";
import ReadyRide from "./components/readyRide"
import QRCodeScanner from "./components/QRCodeScanner";

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

  const [modal, setModal] = useState(false);

  const openModal = () => setModal(true);

  const closeModal = () => setModal(false);

  const stopPropagation = (e:any) => e.stopPropagation();

  return (
    // <div className={center({h:"100vh"})}>
    //   <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
    //     <GoogleMap
    //       mapContainerStyle={containerStyle}
    //       center={mapCenter}
    //       zoom={zoom}
    //       options={{ mapId: '4380a0bce8aefe5a' }}
    //     >
    //       <Marker position={positionNakazaki} label={"専門学校"}  />
    //     </GoogleMap>
    //   </LoadScript>
    // </div>
    
    <>
      <QRCodeScanner />
      <button type="button" onClick={openModal} className={css({
        display:"flex",
        width:"326px",
        height:"48px",
        bgColor:"tomato",
        alignItems:"center",
        justifyContent:"center",
        color:"white",
        borderRadius:"24px",
        cursor:"pointer",
        position:"fixed",
        bottom:"51px",
        right:"0px",
        left:"0px",
        margin:"auto"
      })}>
        <p>ボタン</p>
      </button>
      {modal && (
        <div onClick={closeModal} className={css({
          width:"100vw",
          height:"100vh",
          bgColor:"rgba(0,0,0,0.7)",
          position:"fixed",
          top:"0px",
          right:"0px",
          bottom:"0px",
          left:"0px",
          zIndex:"10",
          animation:"fadeIn"
        })}>
          <div onClick={stopPropagation}>
            <ReadyRide />
          </div>
        </div>
      )}
    </>
  )
}
