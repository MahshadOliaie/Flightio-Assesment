import { useState } from "react"
import HomePage from "./components/HomePage/HomePage"
import Starter from "./components/Starter/Starter"


function App() {
  const [isFirstTime, setIsFirstTime] = useState(localStorage.getItem("isFirstTime") || "true")

  function isFirstTimeSetter(){
    localStorage.setItem("isFirstTime" , "false")
    setIsFirstTime(localStorage.getItem("isFirstTime"))
  }

  return (
    <>
      {
        (isFirstTime == "true") ? <Starter onClick={isFirstTimeSetter} /> : <HomePage />
      }

    </>
  )
}

export default App
