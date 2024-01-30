import { useState, useRef,useEffect } from 'react';
import jsQR from 'jsqr';
import { css } from '../../../styled-system/css';
import { log } from 'console';

const videoWidth  = 500;
const videoHeight = 500;
const videoFrameRate = 30;

const constraints: MediaStreamConstraints = {
    audio: false,
    video:{
        width:{ideal: 333},
        height:{ideal: 1000},
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

    useEffect(() => {
        const openCamera = async () => {
            const video = videoRef.current;
            if (video) {
            video.addEventListener('play', (event) => { console.log(event); console.log("(w,h)=(", video.videoWidth, ", " + video.videoHeight, ")") })
            const stream = await navigator.mediaDevices.getUserMedia(constraints);
            video.srcObject = stream;
            video.onloadedmetadata = () => {
                video.play();
                setIsContinue(true);
                // window.location.href = "https://lp.acom.co.jp/6adbe8b2/index.html?p1=prsc000009&gclid=CjwKCAiAtt2tBhBDEiwALZuhANBKk159C6PBTEbahXEKjGtKH2LeU0-PpkJS6E7SY5tjgj8vL9jSnhoCJYEQAvD_BwE"
            };
            }
        };
        openCamera();
    }, [])
    
    useEffect(() => {
        if (!videoRef.current) {
            return;
        }

        const decodeQRCode = () => {
            const context = canvasRef.current?.getContext('2d');
            const video = videoRef.current;

            if (!context || !video) {
                return;
            }

            context.drawImage(video, 0, 0, videoWidth, videoHeight);
            const imageData = context.getImageData(0, 0, videoWidth, videoHeight);
            const code = jsQR(imageData.data, videoWidth, videoHeight);

            if (code) {
                console.log("成功");
                // window.location.href = "https://lp.acom.co.jp/6adbe8b2/index.html?p1=prsc000009&gclid=CjwKCAiAtt2tBhBDEiwALZuhANBKk159C6PBTEbahXEKjGtKH2LeU0-PpkJS6E7SY5tjgj8vL9jSnhoCJYEQAvD_BwE"
            }
        };


        const intervalId = setInterval(decodeQRCode, 1000 / videoFrameRate);

        return () => {
            clearInterval(intervalId);
        };
    }, []);
        // if (!isContinue) {
        //     return;
        // }
    
        // const decodeQRCode = () => {
        //     const context = canvasRef?.current?.getContext('2d');
        //     const video = videoRef?.current;
    
        //     if (!context || !video) {
        //         return;
        //     }
        
        //     context.beginPath();
        //     context.fillStyle = 'rgb( 0, 0, 0)';
        //     context.fillRect(0, 0, 100, 200);
        
        //     context.drawImage(video, 0, 0, videoWidth, videoHeight);
        //     const imageData = context.getImageData(0, 0, videoWidth, videoHeight);
        //     const code = jsQR(imageData.data, videoWidth, videoHeight);
            

        //     return code?.data;
        // };
    
        // const intervalId = window.setInterval(() => {
        //     const decodedValue = decodeQRCode();

        //     if (!decodedValue || qrCodeData.includes(decodedValue)) {
        //     return;
        //     }

        //     setQrCodeData([...qrCodeData, decodedValue]);
        // }, 1_000 / videoFrameRate);
        // intervalRef.current = intervalId;

        // return () => {
        //     clearInterval(intervalRef.current);
        // };
        // }, [isContinue, qrCodeData]);
        
        // const handleStart = () => {
        //     setIsContinue(true);
        // };

        return (
        <div>
            <div>
                <div>
                    <video autoPlay playsInline={true} ref={videoRef} style={{ width: '100%' }}>
                    <canvas width={videoWidth} height={videoHeight} ref={canvasRef} />
                    </video>
                </div>
            </div>
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
