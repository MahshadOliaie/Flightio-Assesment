import FilterBar from '../FilterBar/FilterBar'
import Header from '../Header/Header'
import ProductsContainer from '../ProductsContainer/ProductsContainer'
import SearchBar from '../SearchBar/SearchBar'
import ToolBar from '../ToolBar/ToolBar'
import CSS from './homePage.module.css'

function HomePage() {
    return (
        <>
            <Header />
            <div className={CSS.heading}>
                <p className={CSS.welcome}>Welcome, Flightio</p>
                <h1 className={CSS.title}>Bring Designer Lamps This Diwali</h1>
            </div>

            <SearchBar />
            <FilterBar />
            <ProductsContainer />
            <ToolBar />
        </>
    )
}

export default HomePage