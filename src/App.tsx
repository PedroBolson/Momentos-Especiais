import Carrossel from './components/Carrossel'
import Carta from './components/Carta'
import Footer from './components/Footer'
import HeartBackground from './components/HeartBackground'
import MusicPlayer from './components/MusicPlayer'
import TogetherTimer from './components/TogetherTimer'
import MensagemRomantica from './components/MensagemRomantica'
import Timeline from './components/Timeline'
import { Sparkles, Heart } from 'lucide-react'
import { useState, useRef } from 'react';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPrompt, setShowPrompt] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleMusicStart = () => {
    if (audioRef.current) {
      audioRef.current.volume = 0.8;
      audioRef.current.currentTime = 0;

      const playPromise = audioRef.current.play();

      if (playPromise !== undefined) {
        playPromise
        playPromise
          .then(() => {
            setIsPlaying(true);
            setShowPrompt(false);
          })
          .catch(error => {
            console.error("Erro ao reproduzir áudio:", error);
            setTimeout(() => {
              if (audioRef.current) {
                audioRef.current.play()
                  .then(() => {
                    setIsPlaying(true);
                    setShowPrompt(false);
                  })
                  .catch(err => console.error("Erro persistente:", err));
              }
            }, 100);
          });
      }
    }
  };

  const toggleMusicFromPlayer = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.volume = 0.8;
        const playPromise = audioRef.current.play();

        if (playPromise !== undefined) {
          playPromise
            .then(() => setIsPlaying(true))
            .catch(error => {
              console.error("Erro ao reproduzir áudio:", error);
              setTimeout(() => {
                if (audioRef.current) {
                  audioRef.current.play()
                    .then(() => setIsPlaying(true))
                    .catch(err => console.error("Erro persistente:", err));
                }
              }, 100);
            });
        }
      }
    }
  };

  return (
    <div className="app-container">
      <HeartBackground />

      {/* Áudio global compartilhado */}
      <audio ref={audioRef} loop preload="auto">
        <source src={`${import.meta.env.BASE_URL}music/Glass Animals - Heat Waves.mp3`} type="audio/mpeg" />
        <source src={`${import.meta.env.BASE_URL}music/Glass Animals - Heat Waves.ogg`} type="audio/ogg" />
        <source src={`${import.meta.env.BASE_URL}music/Glass Animals - Heat Waves.wav`} type="audio/wav" />
        Seu navegador não suporta áudio HTML5.
      </audio>

      {/* Main content container */}
      <div className="max-w-6xl mx-auto px-4 py-16 space-y-24 relative z-10">

        {/* Hero Section */}
        <section className="hero-section">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-dancing text-6xl md:text-8xl gradient-text-love mb-6">
              Momentos Especiais
            </h1>

            <p className="font-inter text-xl text-gray-700 max-w-2xl mx-auto animate-fadeInUp flex items-center justify-center gap-2">
              Nossa história de amor em cada detalhe
              <Sparkles className="w-6 h-6 text-amber-500 animate-pulse" />
              <Heart className="w-6 h-6 text-pink-500 animate-pulse" />
            </p>
          </div>
        </section>

        {showPrompt && (
          <div className="mb-8">
            <div
              className="bg-gradient-to-r from-pink-400 via-purple-500 to-pink-400 text-white px-4 md:px-8 py-2 md:py-4 rounded-full cursor-pointer shadow-xl transition-all duration-300 hover:scale-105 animate-bounce mx-auto w-fit"
              onClick={handleMusicStart}
            >
              <span className="font-medium flex items-center gap-1 md:gap-2 text-xs md:text-base whitespace-nowrap">
                <svg className="w-3 h-3 md:w-5 md:h-5 animate-pulse flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
                </svg>
                <span className="hidden sm:inline">💕 Clique para adicionar música ao momento</span>
                <span className="sm:hidden">💕 Adicionar música</span>
                <svg className="w-3 h-3 md:w-5 md:h-5 animate-pulse flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
                </svg>
              </span>
            </div>
          </div>
        )}

        {/* Timeline Section */}
        <section className="animate-slideInLeft">
          <Timeline />
        </section>

        {/* Timer Section */}
        <section className="animate-fadeInUp">
          <TogetherTimer />
        </section>

        {/* Carousel Section */}
        <section className="animate-slideInRight">
          <Carrossel />
        </section>

        {/* Letter Section */}
        <section className="animate-fadeInUp">
          <Carta />
        </section>

        {/* Music Section */}
        <section id="music" className="py-20">
          <div className="container mx-auto px-4">
            <MusicPlayer
              isGloballyPlaying={isPlaying}
              onTogglePlay={toggleMusicFromPlayer}
            />
          </div>
        </section>

        {/* Romantic Message Section */}
        <section className="animate-slideInRight">
          <MensagemRomantica />
        </section>

      </div>

      <Footer />
    </div>
  )
}

export default App
