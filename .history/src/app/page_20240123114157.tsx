// import Image from 'next/image'
// import styles from './page.module.css'

import { css } from "../../styled-system/css"
import { flex } from "../../styled-system/patterns"

export default function Home() {
  return (
    <main>
      {/* <div className={css({
        backgroundColor: "red",
        borderRadius: "9999px",
        fontSize: "13px",
        padding: "10px 15px",
      })}></div> */}
      <div className={css({
        display:"flex",
        width:"120px",
        height:"64px",
        bgColor:"tomato"
      })}>
        <p>ボタン</p>
      </div>
    </main>
  )
}
