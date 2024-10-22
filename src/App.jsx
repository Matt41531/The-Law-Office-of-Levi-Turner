// import { useState } from 'react'
import './App.css'
import Header from "./components/Header.jsx"
import LandingDisplay from './components/LandingDisplay.jsx'
import Services from './components/Services.jsx'
import ConsultationForm from './components/ConsultationForm.jsx'
import Reviews from './components/Reviews.jsx'
import LocationContacts from './components/LocationContacts.jsx'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <LandingDisplay />
    <Services />
    <ConsultationForm />
    <Reviews />
    <LocationContacts />
    </>
  )
}

export default App
