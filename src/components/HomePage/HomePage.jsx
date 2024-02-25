import { useEffect, useState } from 'react'
import FilterBar from '../FilterBar/FilterBar'
import Header from '../Header/Header'
import ProductsContainer from '../ProductsContainer/ProductsContainer'
import SearchBar from '../SearchBar/SearchBar'
import ToolBar from '../ToolBar/ToolBar'
import CSS from './homePage.module.css'
import Products from '../context/products/Products'
import useFetch from '../../hooks/useFetch/useFetch'

function HomePage() {
    const [products, setProducts] = useState([])
    const data = useFetch('https://fakestoreapi.com/products')
    
    useEffect(() => {
        setProducts(data)
    }, [data])

    return (
        <>

            <Products.Provider value={{
                products,
            }}>
                <Header />
                <div className={CSS.heading}>
                    <p className={CSS.welcome}>Welcome, Flightio</p>
                    <h1 className={CSS.title}>Bring Designer Lamps This Diwali</h1>
                </div>

                <SearchBar />
                <FilterBar />
                <ProductsContainer />
                <ToolBar />
            </Products.Provider>
        </>
    )
}

export default HomePage