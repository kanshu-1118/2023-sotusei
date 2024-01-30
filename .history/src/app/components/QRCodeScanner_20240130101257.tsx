import { useState, useRef,useEffect } from 'react';
import jsQR from 'jsqr';
import { css } from '../../../styled-system/css';

const videoWidth  = 500;
const videoHeight = 500;
const videoFrameRate = 30;

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
    
    useEffect(() => {
        if (!isContinue) {
            return;
        }
    
        const decodeQRCode = () => {
            const context = canvasRef?.current?.getContext('2d');
            const video = videoRef?.current;
    
            if (!context || !video) {
                return;
            }
        
            context.beginPath();
            context.fillStyle = 'rgb( 0, 0, 0)';
            context.fillRect(0, 0, 100, 200);
        
            context.drawImage(video, 0, 0, videoWidth, videoHeight);
            const imageData = context.getImageData(0, 0, videoWidth, videoHeight);
            const code = jsQR(imageData.data, videoWidth, videoHeight);

            return code?.data;
        };
    
        const intervalId = window.setInterval(() => {
            const decodedValue = decodeQRCode();

            if (!decodedValue || qrCodeData.includes(decodedValue)) {
            return;
            }

            setQrCodeData([...qrCodeData, decodedValue]);
        }, 1_000 / videoFrameRate);
        intervalRef.current = intervalId;

        return () => {
            clearInterval(intervalRef.current);
        };
        }, [isContinue, qrCodeData]);
        
        const handleStart = () => {
            setIsContinue(true);
        };

        return (
        <div className="App">
            <p>QR Code Scanner</p>
            <div style={{ display: 'grid' }}>
            <div>
                <video autoPlay playsInline={true} ref={videoRef} style={{ width: '100%' }}>
                <canvas width={videoWidth} height={videoHeight} ref={canvasRef} />
                </video>
            </div>
            <div>
                <p>{qrCodeData.join('\n')}</p>
            </div>
            <div>
                <button onClick={handleStart}>Start Scan</button>
            </div>
            </div>
            hello QRCodeScanner
        </div>
        );

    // return (
    //     <div>
    //         <video id="video"></video>
    //         <canvas id="camera-canvas"></canvas>
    //     </div>
    // );
};

export default QrCodeReader;
