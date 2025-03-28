import React, { useState } from 'react';
import '../css/Carta.css';

const Carta: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showFireworks, setShowFireworks] = useState(false);

    const toggleCarta = () => {
        setIsOpen(!isOpen);

        // Se estiver abrindo a carta, mostrar fogos
        if (!isOpen) {
            setShowFireworks(true);
            setTimeout(() => setShowFireworks(false), 4000);
        }
    };

    return (
        <div className="carta-container">
            {/* Fogos de artifício */}
            {showFireworks && (
                <div className="fireworks">
                    {Array.from({ length: 15 }).map((_, i) => {
                        const hue = Math.random() * 360;
                        const spread = Math.random() * 100 - 50; // -50 a 50px de dispersão horizontal
                        const delay = Math.random() * 1.5; // 0 a 1.5s de atraso

                        return (
                            <div
                                key={i}
                                className="firework"
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    backgroundColor: `hsl(${hue}, 100%, 50%)`,
                                    animationDelay: `${delay}s`,
                                    '--spread': `${spread}px`,
                                    boxShadow: `0 0 6px 2px hsl(${hue}, 100%, 50%)`,
                                } as React.CSSProperties}
                            />
                        );
                    })}
                </div>
            )}

            <div className={`carta ${isOpen ? 'aberta' : ''}`} onClick={toggleCarta}>
                {/* Aba superior que será levantada */}
                <div className="aba"></div>

                {/* Corpo principal da carta */}
                <div className="corpo-carta">
                    {!isOpen && <span className="carta-instrucao-interna">Clique em mim</span>}

                    {/* Conteúdo da carta (mensagem) */}
                    <div className={`carta-conteudo ${isOpen ? 'visivel' : ''}`}>
                        <div className="mensagem">
                            <h3>Para você, com muito carinho</h3>
                            <p>
                                Nem todas as palavras do mundo seriam suficientes para expressar o que sinto por você.
                                Cada momento ao seu lado é como uma página de um livro que adoro ler e reler.
                            </p>
                            <p>
                                Esta carta é apenas uma pequena forma de dizer o quanto você é especial e
                                importante para mim. Obrigado por tornar minha vida mais colorida e cheia de sentido.
                            </p>
                            <p className="assinatura">Com todo meu amor,
                                <br />Você quer casar comigo?
                            </p>
                        </div>
                    </div>
                </div>

                {/* Selo na parte central superior */}
                <div className="selo">
                    <div className="selo-interior">❤️</div>
                </div>
            </div>

            <p className="carta-instrucao">
                {isOpen ? "Clique para fechar" : ""}
            </p>
        </div>
    );
};

export default Carta;