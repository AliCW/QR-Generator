import React, { useState } from "react";
import QRCode from "qrcode";

export default function Generate({ link }){
    const [open, setOpen] = useState(false);
    const [image, setImage] = useState();

    const generateQR = () => {
        return QRCode.toDataURL(link).then((url) => {
            setImage(url);
            setOpen(true);
        }).catch((error) => [
            console.log(error)
        ]);
    };


    return (
        <div>
            <p>{link}</p>
            <button onClick={() => generateQR()}>Generate</button>
            {
                open && 
                    <div>
                        <img src={image} style={{"width": "50%"}}></img>
                    </div>
            }
        </div>
    );
};