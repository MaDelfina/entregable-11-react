import { useEffect, useState } from "react";
import { productos } from "../productos/productos";
import { customFetch } from "../CustomFetch";
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {

    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    const { id } = useParams()

    useEffect(() => {
        customFetch(productos)
            .then(data => {
                console.log(id);
                setProduct(data.find(item => item.id == id))
                setLoading(false)
            })
    }, [id])

    return (
        <>
            {
                loading
                    ?
                    <div className="cargando">Cargando...</div>
                    :
                    <ItemDetail product={product} />
            }
        </>
    )
}

export default ItemDetailContainer