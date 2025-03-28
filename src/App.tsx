import Carrossel from './components/Carrossel'
import Carta from './components/Carta'
import Footer from './components/Footer'
import HeartBackground from './components/HeartBackground'
import MusicPlayer from './components/MusicPlayer'

function App() {
  return(
    <div className="app-container">
      <HeartBackground />
      <Carrossel />
      <Carta />
      <MusicPlayer />
      <Footer />
    </div>
  )
}

export default App
