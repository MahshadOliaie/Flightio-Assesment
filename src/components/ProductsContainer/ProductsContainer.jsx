import { useContext } from 'react'
// import useFetch from '../../hooks/useFetch/useFetch'
import Product from '../Product/Product'
import CSS from './productsContainer.module.css'
import Products from '../context/products/Products'

function ProductsContainer() {
    const {products} = useContext(Products)

    return (
        <>
            <div className={CSS.productsContainer}>
                {
                    products.map((item) => {
                        return <Product key={item.id} data={item} />
                    })
                }
            </div>
        </>
    )
}

export default ProductsContainer