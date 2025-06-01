import React, { useState } from 'react';
import { Mail, Heart, Sparkles } from 'lucide-react';

const Carta: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showFireworks, setShowFireworks] = useState(false);

    const toggleCarta = () => {
        setIsOpen(!isOpen);

        // Se estiver abrindo a carta, mostrar efeito especial
        if (!isOpen) {
            setShowFireworks(true);
            setTimeout(() => setShowFireworks(false), 5000);
        }
    };

    return (
        <div className="w-full">
            {/* Header */}
            <div className="text-center mb-16">
                <h2 className="font-dancing text-5xl md:text-6xl gradient-text-love mb-4">
                    Carta do Coração
                </h2>
                <p className="font-inter text-lg text-gray-700 max-w-2xl mx-auto flex items-center justify-center gap-2">
                    Uma mensagem especial esperando por você
                    <Mail className="w-6 h-6 text-pink-500 animate-pulse" />
                    <Sparkles className="w-6 h-6 text-purple-500 animate-pulse" />
                </p>
            </div>            {/* Letter Container */}
            <div className="flex flex-col items-center relative">
                {/* Efeito especial de abertura - bem atrás da carta */}
                {showFireworks && (
                    <div className="fixed inset-0 pointer-events-none z-0">{/* z-index muito baixo para ficar atrás de tudo */}
                        {/* Pulse de luz dourada expansivo */}
                        <div className="absolute inset-0 animate-golden-pulse opacity-60"></div>

                        {/* Ondas de energia que se expandem - z-index baixo */}
                        {Array.from({ length: 4 }).map((_, i) => (
                            <div
                                key={`wave-${i}`}
                                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-energy-wave"
                                style={{
                                    animationDelay: `${i * 0.5}s`,
                                    zIndex: -1, /* z-index negativo para garantir que fique atrás */
                                } as React.CSSProperties}
                            >
                                <div className="w-20 h-20 rounded-full border-4 border-yellow-400 opacity-60 shadow-2xl"></div>
                            </div>
                        ))}

                        {/* Chuva de pétalas de rosa */}
                        {Array.from({ length: 20 }).map((_, i) => {
                            const delay = Math.random() * 3;
                            const x = Math.random() * 100;
                            const rotation = Math.random() * 360;

                            return (
                                <div
                                    key={`petal-${i}`}
                                    className="absolute animate-petal-fall"
                                    style={{
                                        left: `${x}%`,
                                        top: '-5%',
                                        animationDelay: `${delay}s`,
                                        transform: `rotate(${rotation}deg)`,
                                    } as React.CSSProperties}
                                >
                                    <div className="w-3 h-6 bg-gradient-to-b from-pink-300 to-rose-400 rounded-full opacity-80 shadow-lg"></div>
                                </div>
                            );
                        })}

                        {/* Estrelas brilhantes que piscam */}
                        {Array.from({ length: 12 }).map((_, i) => {
                            const delay = Math.random() * 2;
                            const x = 10 + Math.random() * 80;
                            const y = 10 + Math.random() * 80;

                            return (
                                <div
                                    key={`star-${i}`}
                                    className="absolute animate-twinkle"
                                    style={{
                                        left: `${x}%`,
                                        top: `${y}%`,
                                        animationDelay: `${delay}s`,
                                    } as React.CSSProperties}
                                >
                                    <Sparkles className="w-6 h-6 text-yellow-300 drop-shadow-lg" />
                                </div>
                            );
                        })}
                    </div>
                )}

                {/* Envelope */}
                <div className="relative perspective-1000">
                    <div
                        className={`relative w-96 h-64 cursor-pointer transition-all duration-700 hover:scale-105 ${isOpen ? 'transform rotateX-12 translateY-4' : ''
                            }`}
                        onClick={toggleCarta}
                    >
                        {/* Envelope Back */}
                        <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-rose-100 rounded-lg shadow-xl border border-pink-200">
                            {/* Decorative pattern on envelope */}
                            <div className="absolute inset-0 opacity-30">
                                <Heart className="absolute top-4 left-4 w-6 h-6 text-pink-400 animate-pulse" />
                                <Heart className="absolute top-4 right-4 w-6 h-6 text-rose-400 animate-pulse" />
                                <Sparkles className="absolute bottom-4 left-6 w-5 h-5 text-purple-400 animate-pulse" />
                                <Sparkles className="absolute bottom-4 right-6 w-5 h-5 text-pink-400 animate-pulse" />
                            </div>

                            {/* Address area - "Meu Amor" movido bem mais para baixo */}
                            <div className="absolute inset-0 flex flex-col items-center justify-end pb-6">
                                <div className="text-center">
                                    <p className="font-dancing text-lg text-gray-600 mb-1">Para:</p>
                                    <p className="font-dancing text-2xl gradient-text-love font-bold">Meu Amor</p>
                                    <div className="mt-2">
                                        <Heart className="w-6 h-6 text-pink-500 mx-auto animate-pulse" fill="currentColor" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Envelope Flap */}
                        <div
                            className={`absolute top-0 left-0 w-full h-32 origin-top transition-all duration-1000 ease-out transform-style-preserve-3d ${isOpen ? 'rotateX-180 translateY-2' : 'rotateX-0'
                                }`}
                            style={{
                                clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                                background: 'linear-gradient(135deg, #fce7f3, #fbb6ce, #f687b3)'
                            }}
                        >
                            {/* Wax seal */}
                            <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-lg border-2 border-red-400">
                                <Heart className="w-6 h-6 text-white" fill="currentColor" />
                            </div>
                        </div>

                        {/* Click instruction - única instrução de clique */}
                        {!isOpen && (
                            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-center w-full">
                                <p className="text-pink-600 font-medium animate-bounce flex items-center gap-2 justify-center">
                                    <Sparkles className="w-4 h-4 text-yellow-500" />
                                    Clique no envelope para abrir
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Letter Content - scroll liberado e z-index alto */}
                    <div
                        className={`absolute top-8 left-1/2 transform -translate-x-1/2 w-96 transition-all duration-1000 ease-out ${isOpen
                            ? 'opacity-100 translate-y-0 scale-100 z-50'
                            : 'opacity-0 translate-y-8 scale-95 z-0 pointer-events-none'
                            }`}
                    >
                        <div className="modern-card p-6 h-96 overflow-y-scroll scrollbar-romantic shadow-2xl">
                            <h3 className="font-dancing text-3xl gradient-text-love mb-4 text-center animate-fadeInUp sticky top-0 bg-white/95 backdrop-blur-sm py-2 rounded-lg border-b border-pink-200 z-10">
                                Para Você, Com Todo Meu Amor
                            </h3>
                            <div className="space-y-4 text-base">
                                <p className="leading-relaxed text-gray-700 animate-slideInUp">
                                    <span className="text-pink-600 font-semibold">Nem todas as palavras do mundo</span> seriam suficientes para expressar o que sinto por você.
                                    Cada momento ao seu lado é como uma página de um livro que adoro ler e reler.
                                </p>
                                <p className="leading-relaxed text-gray-700 animate-slideInUp" style={{ animationDelay: '0.2s' }}>
                                    <span className="text-purple-600 font-semibold">Esta carta é apenas uma pequena forma</span> de dizer o quanto você é especial e
                                    importante para mim. Obrigado por tornar minha vida mais colorida e cheia de sentido.
                                </p>
                                <p className="leading-relaxed text-gray-700 animate-slideInUp" style={{ animationDelay: '0.3s' }}>
                                    Você trouxe luz para os meus dias mais escuros e alegria para os momentos mais simples.
                                    Cada risada sua ecoa no meu coração como uma melodia que nunca me canso de ouvir.
                                </p>
                                <p className="leading-relaxed text-gray-700 animate-slideInUp" style={{ animationDelay: '0.4s' }}>
                                    Quando penso no futuro, só consigo imaginar você ao meu lado, compartilhando sonhos,
                                    construindo memórias e criando uma história de amor que supere todas as outras.
                                </p>
                                <p className="leading-relaxed text-gray-700 animate-slideInUp" style={{ animationDelay: '0.5s' }}>
                                    Cada dia ao seu lado é uma nova descoberta, uma nova razão para sorrir.
                                    Você me ensina o verdadeiro significado do amor a cada olhar, a cada palavra carinhosa.
                                </p>
                                <p className="leading-relaxed text-gray-700 animate-slideInUp" style={{ animationDelay: '0.6s' }}>
                                    Quero caminhar com você por toda a vida, enfrentando juntos todos os desafios,
                                    celebrando cada vitória e construindo a família dos nossos sonhos.
                                </p>
                                <div className="text-center mt-6 p-4 bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl border border-pink-200 animate-slideInUp" style={{ animationDelay: '0.7s' }}>
                                    <p className="text-rose-700 font-dancing text-xl font-semibold mb-3">
                                        Com todo meu amor,
                                    </p>
                                    <div className="flex justify-center mb-3">
                                        <Heart className="w-10 h-10 text-red-500 animate-pulse" fill="currentColor" />
                                    </div>
                                    <p className="font-dancing text-2xl gradient-text-love font-bold animate-pulse">
                                        Você quer casar comigo?
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Instructions - ajustado para o container maior */}
                {isOpen && (
                    <p className="mt-80 text-pink-600 font-medium animate-fadeInUp flex items-center gap-2 justify-center">
                        <Heart className="w-4 h-4 text-pink-500" fill="currentColor" />
                        <Heart className="w-4 h-4 text-rose-500" fill="currentColor" />
                        Clique no envelope novamente para fechar
                    </p>
                )}
            </div>
        </div>
    );
};

export default Carta;