// import Image from 'next/image'
// import styles from './page.module.css'

import { useState } from "react"
import { css } from "../../styled-system/css"
import { flex } from "../../styled-system/patterns"
import ReadyRide from "./components/readyRide"

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
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
        bottom:"51px",
        right:"0px",
        left:"0px",
        margin:"auto"
      })}>
        <p>ボタン</p>
      </button>

      <ReadyRide />
    </main>
  )
}
