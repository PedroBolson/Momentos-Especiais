import { useEffect, useState, useRef } from 'react';
import '../css/Carrossel.css';

// Caminho para a pasta assets
const images = Object.values(import.meta.glob('../assets/*.{png,jpg,jpeg,svg}', { eager: true })).map(
    (module: any) => module.default
);

function Carrossel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const intervalRef = useRef<number | null>(null);

    // Função para limpar e reiniciar o temporizador
    const resetTimer = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        
        intervalRef.current = window.setInterval(() => {
            nextSlide();
        }, 5000);
    };

    // Função para avançar para a próxima imagem com transição suave
    const nextSlide = () => {
        if (isTransitioning) return; // Evita múltiplas transições simultâneas

        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
            setTimeout(() => setIsTransitioning(false), 50);
        }, 500); // Tempo para fade out
    };

    // Função para voltar para a imagem anterior com transição suave
    const prevSlide = () => {
        if (isTransitioning) return;

        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
            setTimeout(() => setIsTransitioning(false), 50);
        }, 500); // Tempo para fade out
    };

    // Funções de navegação que também reiniciam o temporizador
    const handleNextSlide = () => {
        nextSlide();
        resetTimer(); // Reinicia o temporizador após navegação manual
    };

    const handlePrevSlide = () => {
        prevSlide();
        resetTimer(); // Reinicia o temporizador após navegação manual
    };

    // Função para lidar com clique nos indicadores
    const handleIndicatorClick = (index: number) => {
        if (isTransitioning) return;
        
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentIndex(index);
            setTimeout(() => setIsTransitioning(false), 50);
        }, 500);
        
        resetTimer(); // Reinicia o temporizador após navegação manual
    };

    // Inicia o temporizador quando o componente é montado
    useEffect(() => {
        resetTimer();
        
        // Limpa o temporizador quando o componente é desmontado
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, []);

    if (images.length === 0) {
        return <p>Nenhuma imagem encontrada na pasta assets</p>;
    }

    return (
        <div className="app-container">
            <h1>Many moments have passed, and I'm already looking forward to spending the next ones with you.</h1>

            <div className="carousel-container">
                <div className="carousel-navigation">
                    <button 
                        className="nav-button prev-button" 
                        onClick={handlePrevSlide} 
                        disabled={isTransitioning}
                    >
                        &lt; Anterior
                    </button>
                    <button 
                        className="nav-button next-button" 
                        onClick={handleNextSlide} 
                        disabled={isTransitioning}
                    >
                        Próxima &gt;
                    </button>
                </div>

                <div className="carousel">
                    <div className="carousel-track">
                        <div className={`carousel-slide ${isTransitioning ? 'fade-out' : 'fade-in'}`}>
                            <img
                                src={images[currentIndex]}
                                alt={`Slide ${currentIndex}`}
                                className="carousel-image"
                            />
                        </div>
                    </div>
                </div>

                <div className="carousel-indicators">
                    {images.map((_, index) => (
                        <span
                            key={index}
                            className={`indicator ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => handleIndicatorClick(index)}
                        ></span>
                    ))}
                </div>
            </div>
            <div className="mensagem-especial">
                <p>
                    A vida tem cores mais vibrantes ao seu lado e tudo acaba sendo mais intenso.<br />
                    A jornada da vida ao seu lado fazem todos os dias mais especiais, e compartilhar
                    meus momentos com você é meu melhor presente. Agradeço todos os dias por estar ao seu lado!
                </p>
                <p>
                    Cada sorriso seu ilumina meu dia, cada abraço aquece meu coração. Nossos momentos juntos,
                    sejam simples ou grandiosos, ficam guardados com carinho na minha memória. Você me faz
                    sonhar mais alto e acreditar que juntos podemos construir algo lindo e duradouro.
                </p>
                <p>
                    Quero celebrar não apenas mais um ano, mas todos os pequenos instantes que fazem nossa
                    história tão única. Obrigado por ser quem você é, por estar ao meu lado nos sorrisos
                    e nas lágrimas, por tornar minha vida completa. O amor que sinto por você cresce a cada
                    novo amanhecer.
                </p>
            </div>
        </div>
    );
}

export default Carrossel;