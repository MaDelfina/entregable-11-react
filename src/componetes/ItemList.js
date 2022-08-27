import Item from "./Item";

const ItemList = ({ListProducts}) => {

  return (
    <section class="row row-cols-1 row-cols-md-5 g-4 justify-content-center">
        {ListProducts.map(product => <Item key={product.id} product={product} />)}
    </section>
  ) 
}
export default ItemList