import { useEffect, useRef } from 'react';
import jsQR from 'jsqr';

function qrCodeReader(){
    const videoRef = useRef(null);
    const canvasRef = useRef(null);

    useEffect(() => {
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
            videoRef.current.srcObject = stream;
            videoRef.current.play();
            const context = canvasRef.current.getContext('2d');
            scanQRCode(context);
        });
        }
    }, []);
    
    }