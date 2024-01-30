import { useState, useRef } from 'react';
import jsQR from 'jsqr';
import { css } from '../../../styled-system/css';

const QrCodeReader = () => {

    return (
        <div>
            <video id="video"></video>
            <canvas id="camera-canvas"></canvas>
        </div>
    );
};

export default QrCodeReader;
