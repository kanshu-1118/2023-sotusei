// import Image from 'next/image'
// import styles from './page.module.css'

import css from "styled-jsx/css"

export default function Home() {
  return (
    <main>
      <button type="button" className={css({
        backgroundColor: "red",
        borderRadius: "9999px",
        fontSize: "13px",
        padding: "10px 15px",
      })}></button>
    </main>
  )
}
