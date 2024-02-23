import Header from '../Header/Header'
import SearchBar from '../SearchBar/SearchBar'
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
        </>
    )
}

export default HomePage