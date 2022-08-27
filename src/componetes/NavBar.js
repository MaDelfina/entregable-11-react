import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Buttons from './Buttons'

const NavBar = () => {

    const [navLinks, setNavLinks] = useState([])

    useEffect(() => {
        fetch("../src/productos/prosuctos.js")
            .then(respuesta => respuesta.json())
            .then(parsedArray => parsedArray.map(x => x.category))
            .then(uniqueArray => setNavLinks([...new Set(uniqueArray)]))
    }, [])

    return (
        <header id="header">
            <Link to="/">
                <img src="./logo.bt2.png" alt="" />
            </Link>
            <Buttons type="NavBar" />
        </header>
    )
}

export default NavBar;