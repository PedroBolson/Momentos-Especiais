import { useState, useRef, useEffect } from 'react';
import '../css/MusicPlayer.css';

const MusicPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [showPrompt, setShowPrompt] = useState(true);
    const audioRef = useRef<HTMLAudioElement>(null);

    // Tenta iniciar música com volume mudo (alguns navegadores permitem)
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = 0; // Inicialmente mudo
            const promise = audioRef.current.play();

            if (promise !== undefined) {
                promise.then(() => {
                    // Auto-play permitido, mas mudo
                    setIsPlaying(true);
                    // Mantenha o prompt visível para o usuário ativar o som
                }).catch(() => {
                    // Auto-play bloqueado mesmo mudo
                    setIsPlaying(false);
                });
            }
        }

        // Esconde o prompt após 7 segundos
        const timer = setTimeout(() => {
            setShowPrompt(false);
        }, 7000);

        return () => clearTimeout(timer);
    }, []);

    const startMusic = () => {
        if (audioRef.current) {
            audioRef.current.volume = 1.0; // Restaura o volume
            audioRef.current.play()
                .then(() => {
                    setIsPlaying(true);
                    setShowPrompt(false);
                })
                .catch(error => {
                    console.error("Erro ao reproduzir áudio:", error);
                });
        }
    };

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
                setIsPlaying(false);
            } else {
                audioRef.current.volume = 1.0; // Garante volume normal
                audioRef.current.play()
                    .then(() => setIsPlaying(true))
                    .catch(error => console.error("Erro ao reproduzir áudio:", error));
            }
        }
    };

    return (
        <>
            {showPrompt && (
                <div className="music-prompt" onClick={startMusic}>
                    <span>💕 Clique para adicionar música ao momento 🎵</span>
                </div>
            )}

            <div className="music-player">
                <button className={`music-toggle ${isPlaying ? 'playing' : ''}`} onClick={togglePlay}>
                    {isPlaying ? '🔊' : '🔈'}
                </button>
                <div className="music-info">
                    {isPlaying ? <span>♫ Tocando nossa música</span> : <span>Clique para ouvir</span>}
                </div>
                <audio ref={audioRef} loop>
                    <source src={`${import.meta.env.BASE_URL}music/Glass Animals - Heat Waves.mp3`} type="audio/mpeg" />
                    Seu navegador não suporta áudio HTML5.
                </audio>
            </div>
        </>
    );
};

export default MusicPlayer;