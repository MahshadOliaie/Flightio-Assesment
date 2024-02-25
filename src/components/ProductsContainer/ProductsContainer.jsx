import useFetch from '../../hooks/useFetch/useFetch'
import Product from '../Product/Product'
import CSS from './productsContainer.module.css'

function ProductsContainer() {
    const data = useFetch('https://fakestoreapi.com/products')

    return (
        <>
            <div className={CSS.productsContainer}>
                {
                    data.map((item) => {
                        return <Product key={item.id} data={item} />
                    })
                }
            </div>
        </>
    )
}

export default ProductsContainer