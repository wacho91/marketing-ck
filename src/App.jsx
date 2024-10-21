import Banner from "./components/Banner/Banner"
import Card from "./components/Card/Card"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Services from "./components/Services/Services"


function App() {
  

  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Banner />
      <Card />
    </main>
  )
}

export default App
