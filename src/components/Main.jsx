import React, { useState, useEffect } from "react";
import Generate from "./Generate.jsx";

export default function Main() {

    const [link, setLink] = useState("");

    const changeHandler = (e) => {
        setLink(e);
    };

    return (
        <div>
            <h1>QR Reader</h1>
            <input onChange={(e) => changeHandler(e.target.value)}></input>
            <Generate link={link}/>
        </div>
    );
};