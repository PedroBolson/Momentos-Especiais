import React from 'react';
import '../css/HeartBackground.css';

function HeartBackground() {
    // Gera um array com vários corações
    const hearts = Array.from({ length: 25 }, (_, index) => {
        // Valores aleatórios para posicionamento e animação
        const size = Math.random() * 20 + 10; // Tamanho entre 10-30px
        const left = Math.random() * 100; // Posição horizontal (0-100%)
        const animationDelay = Math.random() * 5; // Atraso na animação (0-5s)
        const animationDuration = Math.random() * 10 + 10; // Duração da animação (10-20s)

        // Escolher aleatoriamente entre diferentes tipos de corações
        const heartTypes = ['❤️', '💕', '💓', '💗', '💖'];
        const heartType = heartTypes[Math.floor(Math.random() * heartTypes.length)];

        return (
            <div
                key={index}
                className="heart-emoji"
                style={{
                    fontSize: `${size}px`,
                    left: `${left}%`,
                    animationDelay: `${animationDelay}s`,
                    animationDuration: `${animationDuration}s`
                }}
            >
                {heartType}
            </div>
        );
    });

    return <div className="heart-background">{hearts}</div>;
}

export default HeartBackground;