"use client"

import Image from 'next/image'
import styles from './page.module.css'
import { useState } from "react"
import { css } from '../../../styled-system/css'
import { center } from '../../../styled-system/patterns'
import { GoogleMap, LoadScript , Marker } from "@react-google-maps/api";
import QRCodeScanner from "../components/QRCodeScanner";

export default function Home() {

    const [modal, setModal] = useState(false);

    const openModal = () => setModal(true);

    const closeModal = () => setModal(false);

    const stopPropagation = (e:any) => e.stopPropagation();

    return (
    <>
        <QRCodeScanner />
    </>
    )
}
