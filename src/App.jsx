import { useState } from 'react'
import './App.css'
import WelcomeScreen from "./assets/WelcomeScreen.jsx";
import CalculationScreen from "./assets/CalculationScreen.jsx";

function App() {

  const [openBoxes, setOpenBoxes] = useState(false)

  function handleOpenBoxes() {
    setOpenBoxes(true)
  }

  return (
    <>
      <h1>Magia Wektorów</h1>
        {!openBoxes && <WelcomeScreen>
        <h4>Instrukcje : Podaj współrzędne dwóch dwu-wymiarowych wektorów a program wskaże zwrot iloczynu wektorowego</h4>
            <button onClick={handleOpenBoxes}>Rozpocznij</button>
        </WelcomeScreen>}
        {openBoxes && <CalculationScreen/>}
    </>
  )
}

export default App
