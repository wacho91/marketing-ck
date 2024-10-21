import Banner from "./components/Banner/Banner"
import Banner2 from "./components/Banner/Banner2"
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
      <Banner2 />
    </main>
  )
}

export default App
