import { useState, useRef } from 'react';
import jsQR from 'jsqr';

const QrCodeReader = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [qrCode, setQrCode] = useState('');

    const startQrReader = async () => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } });
        if (videoRef.current) {
            videoRef.current.srcObject = stream;
            videoRef.current.play();

            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');

            const checkQrCode = () => {
                if (videoRef.current && context) {
                canvas.width = videoRef.current.videoWidth;
                canvas.height = videoRef.current.videoHeight;
                context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
                const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
                const code = jsQR(imageData.data, imageData.width, imageData.height, {
                    inversionAttempts: "dontInvert",
                });

                if (code) {
                    setQrCode(code.data);
                    stream.getTracks().forEach(track => track.stop());
                    videoRef.current.pause();
                } else {
                    requestAnimationFrame(checkQrCode);
                }
            }
        };
            checkQrCode();
        }
        } catch (error) {
            console.error('Error accessing the camera', error);
        }
    }
};

    return (
        <div>
            <video ref={videoRef} style={{ display: 'none' }}></video>
            {qrCode && <p>QR Code: {qrCode}</p>}
            
        </div>
    );
};

export default QrCodeReader;