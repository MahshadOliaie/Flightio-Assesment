import { useParams } from "react-router-dom"
import useFetch from "../../hooks/useFetch/useFetch"
import CSS from './index.module.css'


function ProductDetail() {
    const { id } = useParams()
    const product = useFetch(`https://fakestoreapi.com/products/${id}`)

    return (
        <>
            <div className={CSS.detail}>
                <div className={CSS.image}>
                    <img src={product.image} alt="" />
                </div>
                <div className={CSS.about}>
                    <h2>{product.title}</h2>
                    <p className={CSS.category}><span>Category: </span>{product.category}</p>
                    <p >{product.description}</p>
                    <p className={CSS.price}>{product.price}$</p>
                </div>
                <div className={CSS.add}>
                    <p className={CSS.addBtn}>ADD TO BAG</p>
                </div>
            </div>
        </>
    )
}

export default ProductDetail