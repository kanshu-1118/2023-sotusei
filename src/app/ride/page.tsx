"use client"

import Image from 'next/image'
import styles from './page.module.css'
import { useEffect, useState } from "react"
import { css } from '../../../styled-system/css'
import { center } from '../../../styled-system/patterns'
import { GoogleMap, LoadScript , MarkerF } from "@react-google-maps/api";
import ReadyRide from ".././components/readyRide"
import QRCodeScanner from ".././components/QRCodeScanner";
import Link from 'next/link'
import { db } from "@/lib/firebase/index";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import RideMeter from '../components/RideMeter'
import ReturnBike from '../components/ReturnBike'

const containerStyle = {
  width: "100%",
  height: "100vh",
};

const mapCenter = {
  lat: 34.706434,
  lng: 135.503237,
};

const positionNakazaki = {
  lat: 34.706434,
  lng: 135.503237,
}

const zoom = 16;

type dataType = {
  name: string;
};

export default function Home() {

  const [modal, setModal] = useState(false);

  const openModal = () => setModal(true);

  const closeModal = () => setModal(false);

  const stopPropagation = (e:any) => e.stopPropagation();

  const [modal2, setModal2] = useState(false);

  const openModal2 = () => setModal2(true);

  const closeModal2 = () => setModal2(false);

  const stopPropagation2 = (e:any) => e.stopPropagation();

  const [data, setData] = useState<dataType[]>();
  const [modalName,setModalName] = useState("")
  const [modalSmall,setModalSmall] = useState(0)
  const [modalMiddle,setModalMiddle] = useState(0)
  const [modalFalseTotal,setModalFalseTotal] = useState(0)
  const [qr,setQr] = useState("none")
  const [show,setShow] = useState(false)
  const [bike,setBike] = useState(true)

  useEffect(() => {
    const firebase = async () => {
      try {
        const col = collection(db, "nirin");
        const querySnapshot = await getDocs(col);
        const ret: any = [];
        querySnapshot.forEach((doc) => {
          ret.push(doc.data());
        });
        setData(ret);
      } catch (error) {
        console.log('error');
      }
    };
    firebase();
    
  },[])

  // const docRef = doc(db, "cities", "SF");
  // const docSnap = await getDoc(docRef);

  return (
    <>
      <div className={center({h:"100vh"})}>
        <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={mapCenter}
            zoom={zoom}
            options={{ mapId: '4380a0bce8aefe5a' }}
          >
            {data !== undefined && (
              <>
                {data.map((item: any, i: number) => (
                  <MarkerF key={i} position={item.position} label={""} onClick={() => {
                    openModal()
                    setModalName(item.name)
                    setModalSmall(item.small.true)
                    setModalMiddle(item.middle.true)
                    setModalFalseTotal(item.small.false + item.middle.false)
                  }} icon={require("../../images/mapPin.png")} />
                ))}
              </>
            )}
            {modal2 && 
                <ReturnBike closeModal={closeModal2} modal2={modal2} />
            }
          </GoogleMap>
        </LoadScript>
      </div>
      <RideMeter />
      <button type="button"
        // onClick={() => {
        //   setShow(true)
        // }}
        className={css({
        display:"flex",
        width:"60px",
        height:"48px",
        bgColor:"rgba(0 ,0, 0, 0.7)",
        alignItems:"center",
        justifyContent:"center",
        color:"white",
        borderRadius:"0 24px 24px 0",
        cursor:"pointer",
        position:"fixed",
        top:"80px",
        left:"0px",
        margin:"auto"
      })}>
        <p></p>
        </button>
      {/* <Link href={"/qrleader"}> */}
        <button type="button"
        onClick={() => {
            openModal2()
        }}
        className={css({
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
        <p>ライドを修了する</p>
        </button>
        {/* <QRCodeScanner /> */}
      {/* </Link> */}
      {/* <button type="button" onClick={openModal} className={css({
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
      <p>ライドを開始する</p>
      </button> */}
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
            <ReadyRide name={modalName} small={modalSmall} middle={modalMiddle} falseTotal={modalFalseTotal} />
          </div>
        </div>
      )}
    </>
  )
}
