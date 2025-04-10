import Carrossel from './components/Carrossel'
import Carta from './components/Carta'
import Footer from './components/Footer'
import HeartBackground from './components/HeartBackground'
import MusicPlayer from './components/MusicPlayer'
import TogetherTimer from './components/TogetherTimer'
import MensagemRomantica from './components/MensagemRomantica'

function App() {
  return (
    <div className="app-container">
      <HeartBackground />
      <TogetherTimer />
      <Carrossel />
      <Carta />
      <MusicPlayer />
      <MensagemRomantica />
      <Footer />
    </div>
  )
}

export default App
