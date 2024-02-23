import Product from '../Product/Product'
import CSS from './productsContainer.module.css'

function ProductsContainer(){
    return(
        <>
        <div className={CSS.productsContainer}>
            <Product />
            <Product />
            <Product />
            <Product />
        </div>
        </>
    )
}

export default ProductsContainer