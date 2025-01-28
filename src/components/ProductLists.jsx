
import { PRODUCTS_LIST } from '../products.jsx';
import ProductList from './ProductList.jsx';


export default function ProductLists(){
    return (
        <section id="productslist">
            <h2>Products List</h2>
            <ul>
                {PRODUCTS_LIST.map((productlist) => (
                <ProductList key={productlist.name} {...productlist}/>
                ))}
            </ul>
        </section>
    )
}