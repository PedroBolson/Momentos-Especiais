import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../css/Carrossel.css';

// Caminho para a pasta assets
const images = Object.values(import.meta.glob('../assets/*.{png,jpg,jpeg,svg}', { eager: true })).map(
    (module: any) => module.default
);

function Carrossel() {
    if (images.length === 0) {
        return <p>Nenhuma imagem encontrada na pasta assets</p>;
    }

    // Responsive configurations for different screen sizes
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 1200 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 1199, min: 768 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 767, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 463, min: 0 },
            items: 1
        }
    };

    // Detecta se é tela pequena para ajustar propriedades
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 480);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="app-container">
            <h1>Many moments have passed, and I'm already looking forward to spending the next ones with you.</h1>

            <div className="carousel-container">
                <Carousel
                    responsive={responsive}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={5000}
                    keyBoardControl={true}
                    customTransition="transform 1500ms ease-in-out" // Alterado para transição mais suave
                    transitionDuration={1500} // Alterado para transição mais suave
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item"
                    showDots={true}
                    centerMode={!isMobile} // Em telas pequenas, centerMode desabilitado para ocupar 100% da tela
                    focusOnSelect={true}
                >
                    {images.map((image, index) => (
                        <div key={index} className="carousel-slide">
                            <img
                                src={image}
                                alt={`Slide ${index + 1}`}
                                className="carousel-image"
                            />
                        </div>
                    ))}
                </Carousel>
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