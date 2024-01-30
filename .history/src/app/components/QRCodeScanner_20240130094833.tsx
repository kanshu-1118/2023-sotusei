import { useState, useRef,useEffect } from 'react';
import jsQR from 'jsqr';
import { css } from '../../../styled-system/css';

const videoWidth  = 500;
const videoHeight = 500;
const videoFrameRate = 5;

const constraints: MediaStreamConstraints = {
    audio: false,
    video:{
        width:{min: 1280, ideal: 1920, max: 2560},
        height:{min: 720 , ideal: 1080, max: 1440},
        frameRate:{
            max: videoFrameRate,
        }
    }
}

const QrCodeReader = () => {

    const videoRef    = useRef<HTMLVideoElement>(null);
    const intervalRef = useRef<number>();
    const canvasRef   = useRef<HTMLCanvasElement>(null);
    const [isContinue, setIsContinue] = useState(false);
    const [qrCodeData, setQrCodeData] = useState<string[]>([]);

    useEffect(() => {
        const openCamera = async () => {
            const video = videoRef.current;
            if (video) {
            video.addEventListener('play', (event) => { console.log(event); console.log("(w,h)=(", video.videoWidth, ", " + video.videoHeight, ")") })
            const stream = await navigator.mediaDevices.getUserMedia(constraints);
            video.srcObject = stream;
        }
        };
        openCamera();
    }, [])
    

    return (
        <div>
            <video id="video"></video>
            <canvas id="camera-canvas"></canvas>
        </div>
    );
};

export default QrCodeReader;
