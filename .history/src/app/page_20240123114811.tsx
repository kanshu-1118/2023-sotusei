// import Image from 'next/image'
// import styles from './page.module.css'

import { css } from "../../styled-system/css"
import { flex } from "../../styled-system/patterns"

export default function Home() {
  return (
    <main className={css({
      paddingTop:"16px"
    })}>
      {/* <div className={css({
        backgroundColor: "red",
        borderRadius: "9999px",
        fontSize: "13px",
        padding: "10px 15px",
      })}></div> */}
      <button type="button" className={css({
        display:"flex",
        width:"144px",
        height:"64px",
        bgColor:"tomato",
        alignItems:"center",
        justifyContent:"center",
        margin:"0 auto",
        color:"white",
        borderRadius:"5px"
      })}>
        <p>ボタン</p>
      </button>
    </main>
  )
}
