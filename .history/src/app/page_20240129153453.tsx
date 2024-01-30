"use client";
// import Image from 'next/image'
// import styles from './page.module.css'

import { useState } from "react"
import { css } from "../../styled-system/css"
import { flex } from "../../styled-system/patterns"
import ReadyRide from "./components/readyRide"

export default function Home() {
  const [modal, setModal] = useState(false);

  const openModal = () => setModal(true);

  const closeModal = () => setModal(false);

  const stopPropagation = (e:any) => e.stopPropagation();
  return (
    <main>
      <button type="button" className={css({
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
        top:"51px",
        right:"0px",
        left:"0px",
        margin:"auto"
      })}>
        <p>ボタン</p>
      </button>
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


      {/* <button className={button({ size: "small", type: "default" })}></button> */}
    </main>
  )
}
