import { useContext } from 'react'
import CSS from './index.module.css'
import FavoriteItems from '../../context/favoriteItem/FavoriteItem'
import Product from '../Product/Product'
import Header from '../Header/Header'
import ToolBar from '../ToolBar/ToolBar'

function FavoritePage() {
    const { favoriteItems } = useContext(FavoriteItems)
    return (
        <>
            <Header />
            <h1 className={CSS.heading}>Favorite Products</h1>
            <div className={CSS.favoriteContainer}>
                {(favoriteItems.length > 0) ?
                    favoriteItems.map(item => {
                        return <Product key={item.id} data={item} />
                    }) :
                    <p>there is no favorite item</p>
                }
            </div>

            <ToolBar />
        </>

    )
}

export default FavoritePage