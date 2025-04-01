import React, { useEffect, useState } from 'react';
import { Carousel } from 'primereact/carousel';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import '../css/Carrossel.css';

// Importa as imagens da pasta assets
const images = Object.values(import.meta.glob('../assets/*.{png,jpg,jpeg,svg}', { eager: true }))
    .map((module: any) => module.default);

const Carrossel: React.FC = () => {
    const [isMobile, setIsMobile] = useState<boolean>(false);

    // Detecta se é uma tela pequena
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 767);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Configurações responsivas
    const responsiveOptions = [
        { breakpoint: '1400px', numVisible: 3, numScroll: 1 },
        { breakpoint: '1199px', numVisible: 2, numScroll: 1 },
        { breakpoint: '767px', numVisible: 1, numScroll: 1 }
    ];

    // Template para renderizar cada imagem
    const imageTemplate = (image: string) => (
        <div className="carousel-slide">
            <img src={image} alt="Momento especial" className="carousel-image" />
        </div>
    );

    return (
        <div className="app-container">
            <h1>
                Many moments have passed, and I'm already looking forward to spending the next ones with you.
            </h1>

            <div className="carousel-container">
                <Carousel
                    value={images}
                    numVisible={isMobile ? 1 : 3}
                    numScroll={1}
                    responsiveOptions={responsiveOptions}
                    itemTemplate={imageTemplate}
                    autoplayInterval={3000}
                    circular
                />
            </div>

            <div className="mensagem-especial">
                <p>
                    <strong>A vida tem cores mais vibrantes ao seu lado</strong> e tudo se torna mais intenso.
                    <br />
                    A jornada da vida ao seu lado torna todos os dias mais especiais, e compartilhar meus
                    momentos com você é o meu maior presente. Agradeço todos os dias por estar ao seu lado!
                </p>
                <p>
                    <strong>Cada sorriso seu ilumina o meu dia</strong>, cada abraço aquece o meu coração.
                    Nossos momentos juntos, sejam simples ou grandiosos, ficam guardados com carinho na minha
                    memória. Você me faz sonhar mais alto e acreditar que juntos podemos construir algo lindo e
                    duradouro.
                </p>
                <p>
                    <strong>Quero celebrar não apenas mais um ano</strong>, mas todos os pequenos instantes que
                    fazem nossa história tão única. Obrigado por ser quem você é, por estar ao meu lado nos sorrisos
                    e nas lágrimas, por tornar a minha vida completa. O amor que sinto por você cresce a cada novo
                    amanhecer.
                </p>
            </div>
        </div>
    );
};

export default Carrossel;
