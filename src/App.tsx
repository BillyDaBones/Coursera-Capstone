import './App.css'
import { Header } from './sections/Header.tsx'
import { Nav } from './sections/Nav.tsx'
import { Main } from './sections/Main.tsx'
import { Footer } from './sections/Footer.tsx'

import Logo from './assets/logos/Logo.svg'

function App() {

  return (
    <>
      <meta name="description" content="A family restaurant based in Chicago. Local, fresh, always cooked right."/>
      <meta name="og:title" content="Little Lemon"/>
      <meta name="og:description" content="A family restaurant based in Chicago. Local, fresh, always cooked right."/>
      <meta name="og:image" content={Logo}/>
      <Nav/>
      <Header/>
      <Main/>
      <Footer/>
    </>
  )
}

export default App
