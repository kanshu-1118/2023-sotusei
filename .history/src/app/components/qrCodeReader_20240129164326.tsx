import { useState, useRef } from 'react';
import jsQR from 'jsqr';
import { css } from '../../../styled-system/css';

const QrCodeReader = () => {

    return (
        <div>
            <video id="video"></video>
        </div>
    );
};

export default QrCodeReader;
