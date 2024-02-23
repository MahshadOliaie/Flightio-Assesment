import CSS from './product.module.css'

function Product(){
    return(
        <>
        <div className={CSS.product}>
            <div className={CSS.image}><img src="./candle.png" alt="" /></div>
            <div className={CSS.about}>
                <h3 className={CSS.title}>Flower lamp</h3>
                <p className={CSS.desc}>eco friendly Diwali lamp</p>
                <p className={CSS.price}>50.00$</p>
            </div>
        </div>
        </>
    )
}

export default Product