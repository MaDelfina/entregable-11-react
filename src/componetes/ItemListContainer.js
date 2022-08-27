import { useEffect, useState } from "react";
import { customFetch } from "../CustomFetch";
import { productos } from "../productos/productos";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import ItemList from "./ItemList";
import Page from "../componetes/Page";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {

  const [ListProducts, SetListProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const {id} = useParams()

  useEffect(() => {
    const productosCollection = collection(db, "productos")
    const consulta = getDocs(productosCollection)

    consulta
    .then(snapshot =>{
      const productos = snapshot.docs.map(doc=>{
        return {
          ...doc.data(),
          id: doc.id
        }
      });
    })
    .catch(err=>{
      console.log(err);
    })
  },[])

  return (
    <Page>
      <ItemList ListProducts={ListProducts} />
    </Page>
  )
}

export default ItemListContainer