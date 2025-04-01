import { useState, useEffect } from 'react';
import { Carousel } from 'primereact/carousel';
import 'primereact/resources/themes/lara-light-indigo/theme.css';  // tema
import 'primereact/resources/primereact.min.css';                  // core css
import 'primeicons/primeicons.css';                                // ícones
import '../css/Carrossel.css';

// Caminho para a pasta assets
const images = Object.values(import.meta.glob('../assets/*.{png,jpg,jpeg,svg}', { eager: true })).map(
    (module: any) => module.default
);

function Carrossel() {
    if (images.length === 0) {
        return <p>Nenhuma imagem encontrada na pasta assets</p>;
    }

    // Detecta se é tela pequena para ajustar propriedades
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 480);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Configurações responsivas para o carrossel
    const responsiveOptions = [
        {
            breakpoint: '1400px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '1199px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    // Template para renderizar cada item do carousel
    const imageTemplate = (image: string) => {
        return (
            <div className="carousel-slide">
                <img src={image} alt="Momento especial" className="carousel-image" />
            </div>
        );
    };

    return (
        <div className="app-container">
            <h1>Many moments have passed, and I'm already looking forward to spending the next ones with you.</h1>

            <div className="carousel-container">
                <Carousel
                    value={images}
                    numVisible={isMobile ? 1 : 3}
                    numScroll={1}
                    orientation="horizontal"
                    autoplayInterval={5000}
                    circular={true}
                    itemTemplate={imageTemplate}
                    responsiveOptions={responsiveOptions}
                    className={isMobile ? 'mobile-carousel' : 'horizontal-carousel'}
                />
            </div>

            <div className="mensagem-especial">
                <p>
                    <strong>A vida tem cores mais vibrantes ao seu lado</strong> e tudo acaba sendo mais intenso.<br />
                    A jornada da vida ao seu lado fazem todos os dias mais especiais, e compartilhar
                    meus momentos com você é meu melhor presente. Agradeço todos os dias por estar ao seu lado!
                </p>
                <p>
                    <strong>Cada sorriso seu ilumina meu dia</strong>, cada abraço aquece meu coração. Nossos momentos juntos,
                    sejam simples ou grandiosos, ficam guardados com carinho na minha memória. Você me faz
                    sonhar mais alto e acreditar que juntos podemos construir algo lindo e duradouro.
                </p>
                <p>
                    <strong>Quero celebrar não apenas mais um ano</strong>, mas todos os pequenos instantes que fazem nossa
                    história tão única. Obrigado por ser quem você é, por estar ao meu lado nos sorrisos
                    e nas lágrimas, por tornar minha vida completa. O amor que sinto por você cresce a cada
                    novo amanhecer.
                </p>
            </div>
        </div>
    );
}

export default Carrossel;