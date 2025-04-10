import React, { useRef } from 'react';
import { Carousel } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import '../css/Carrossel.css';

// Importa as imagens da pasta assets
const images = Object.values(
    import.meta.glob('../assets/*.{png,jpg,jpeg,svg}', { eager: true })
).map((module: any) => module.default);

const Carrossel: React.FC = () => {
    const carouselRef = useRef<any>(null);
    return (
        <div className="app-container">
            <h1>
                Many moments have passed, and I'm already looking forward to spending the next ones with you.
            </h1>

            <div className="carousel-container">
                <Carousel ref={carouselRef} autoplay autoplaySpeed={8000}>
                    {images.map((image, idx) => (
                        <div key={idx} className="carousel-slide">
                            <img src={image} alt="Momento especial" className="carousel-image" />
                        </div>
                    ))}
                </Carousel>
                <div className="carousel-arrows">
                    <button onClick={() => carouselRef.current.prev()} className="arrow-button">
                        <LeftOutlined />
                    </button>
                    <button onClick={() => carouselRef.current.next()} className="arrow-button">
                        <RightOutlined />
                    </button>
                </div>
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
