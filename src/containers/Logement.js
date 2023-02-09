import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Logement = () => {
    const [data, setData] = useState([])

    useEffect (() => { 
        axios.get("https://dragiinus.github.io/Projet-7-Openclassroom/src/assets/api/logement.json")
        .then((res) => setData(res.data))
    }, [])

    return (
        <div>
            <h1>Logement</h1>
        </div>
    );
};

export default Logement;