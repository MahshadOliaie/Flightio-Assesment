import { useState } from "react"
import HomePage from "./components/HomePage/HomePage"
import Starter from "./components/Starter/Starter"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import FavoritePage from "./components/FavoritePage/FavoritePage"
import FavoriteItems from "./context/favoriteItem/FavoriteItem"


function App() {
  const [isFirstTime, setIsFirstTime] = useState(localStorage.getItem("isFirstTime") || "true")
  const [favoriteItems , setFavoriteItems] = useState([])

  function isFirstTimeSetter() {
    localStorage.setItem("isFirstTime", "false")
    setIsFirstTime(localStorage.getItem("isFirstTime"))
  }

  return (
    <>
      {
        (isFirstTime == "true") ? <Starter onClick={isFirstTimeSetter} /> :
          <FavoriteItems.Provider value={{
            favoriteItems,
            setFavoriteItems
          }}>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/favorite" element={<FavoritePage />} />
              </Routes>
            </BrowserRouter>
          </FavoriteItems.Provider>

      }

    </>
  )
}

export default App
