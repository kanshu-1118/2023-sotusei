import { useState, useRef } from 'react';
import jsQR from 'jsqr';

function QrCodeReader() {
    const [scanResult, setScanResult] = useState('');
    const videoRef = useRef();
    const canvasRef = useRef();

    const startScan = () => {
        navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } })
            .then(function(stream) {
                videoRef.current.srcObject = stream;
                videoRef.current.play();
                scanQRCode();
            }).catch(function(err) {
                console.error("Error accessing video stream: ", err);
            });
    };

    const scanQRCode = () => {
        const canvasElement = canvasRef.current;
        const videoElement = videoRef.current;
        const context = canvasElement.getContext('2d');
        (function scan() {
            if (videoElement.readyState === videoElement.HAVE_ENOUGH_DATA) {
                canvasElement.height = videoElement.videoHeight;
                canvasElement.width = videoElement.videoWidth;
                context.drawImage(videoElement, 0, 0, canvasElement.width, canvasElement.height);
                var imageData = context.getImageData(0, 0, canvasElement.width, canvasElement.height);
                var code = jsQR(imageData.data, imageData.width, imageData.height, {
                    inversionAttempts: "dontInvert",
                });
                if (code) {
                    setScanResult(code.data);
                    videoElement.srcObject.getTracks().forEach(track => track.stop());
                } else {
                    requestAnimationFrame(scan);
                }
            } else {
                requestAnimationFrame(scan);
            }
        })();
    };

    return (
        <div>
            <button onClick={startScan}>Start QR Code Scan</button>
            <video ref={videoRef} style={{ display: 'none' }}></video>
            <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
            {scanResult && <p>Scan result: {scanResult}</p>}
        </div>
    );
}

export default QrCodeReader;