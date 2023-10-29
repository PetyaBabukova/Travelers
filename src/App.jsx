import './App.css'
import TopBar from './components/TopBar';
import NavBar from './components/Navbar';
import Hero from './components/Hero';
import Booking from './components/Booking';
import Body from './components/Body';
import Search from './components/Search'
import Details from './components/Details';
import Blog from './components/Blog';
import Footer from './components/Footer';
import destinations from './assets/destinations';

function App() {

  return (
    <>
      <TopBar/>
      <NavBar />
      <Hero />
      <Search />
      <Body destinations={destinations} />
      <Booking />
      <Details />
      <Blog />
      <Footer />
</>

  )
}

export default App
