import React, { useEffect, useState } from 'react';
import { Heart, Sparkles } from 'lucide-react';

// Função para embaralhar um array
const shuffleArray = (array: string[]): string[] => {
    const shuffled = array.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};

// Gera a mensagem romântica combinando trechos pré-definidos
const gerarMensagemRomantica = (): string => {
    const comparacoes: string[] = [
        "o brilho das estrelas em uma noite infinita",
        "a imensidão do oceano em seus dias de calmaria",
        "a delicadeza de uma rosa sob a luz do sol",
        "a pureza do orvalho que beija a terra pela manhã",
        "o encanto de um pôr do sol que colore o céu",
        "a magia de um sonho que se renova a cada amanhecer",
        "a suavidade de uma brisa ao entardecer",
        "a grandiosidade de uma montanha sob o céu estrelado",
        "a serenidade de um lago em uma manhã de primavera",
        "a beleza de um campo florido em plena floração",
        "a harmonia de uma sinfonia que toca o coração"
    ];
    const intensificadores: string[] = [
        "imensamente",
        "infinita e profundamente",
        "de um jeito que transcende palavras",
        "com toda a intensidade do universo",
        "profundamente e eternamente",
        "com uma paixão avassaladora",
        "além dos limites do infinito",
        "mais do que tudo que já vivi",
        "com uma força que desafia o tempo",
        "com uma intensidade que ilumina minha alma",
        "com uma paixão que arde como o sol"
    ];
    const adjetivos: string[] = [
        "única",
        "incomparável",
        "radiante",
        "encantadora",
        "maravilhosa",
        "espiritual",
        "deslumbrante",
        "irresistível",
        "fascinante",
        "extraordinária",
        "inesquecível",
        "cativante"
    ];

    // Embaralha os arrays
    const comparacoesEmbaralhadas = shuffleArray(comparacoes);
    const intensificadoresEmbaralhados = shuffleArray(intensificadores);
    const adjetivosEmbaralhados = shuffleArray(adjetivos);

    // Obtém a data atual
    const hoje = new Date();
    const diaDoAno = Math.floor((hoje.getTime() - new Date(hoje.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24));

    // Seleciona os elementos com base no dia do ano
    const comp = comparacoesEmbaralhadas[diaDoAno % comparacoesEmbaralhadas.length];
    const intens = intensificadoresEmbaralhados[diaDoAno % intensificadoresEmbaralhados.length];
    const adjet = adjetivosEmbaralhados[diaDoAno % adjetivosEmbaralhados.length];

    return `Eu te amo ${intens}! Você é a pessoa ${adjet} do meu mundo e te amo mais do que ${comp}.`;
};

const MensagemRomantica: React.FC = () => {
    const [mensagem, setMensagem] = useState<string>('');

    useEffect(() => {
        const hoje = new Date().toISOString().split('T')[0]; // Obtém a data atual no formato 'YYYY-MM-DD'
        const dataArmazenada = localStorage.getItem('dataMensagem');
        const mensagemArmazenada = localStorage.getItem('mensagemRomantica');

        if (dataArmazenada === hoje && mensagemArmazenada) {
            setMensagem(mensagemArmazenada);
        } else {
            const novaMensagem = gerarMensagemRomantica();
            setMensagem(novaMensagem);
            localStorage.setItem('mensagemRomantica', novaMensagem);
            localStorage.setItem('dataMensagem', hoje);
        }
    }, []);

    return (
        <div className="w-full">
            {/* Header */}
            <div className="text-center mb-12">
                <h2 className="font-dancing text-5xl md:text-6xl gradient-text-love mb-4">
                    Mensagem do Dia
                </h2>
                <p className="font-inter text-lg text-gray-600 max-w-2xl mx-auto flex items-center justify-center gap-2">
                    Uma declaração especial renovada a cada amanhecer
                    <Sparkles className="w-5 h-5 text-purple-500 animate-pulse" />
                    <Heart className="w-5 h-5 text-pink-500 animate-pulse" fill="currentColor" />
                </p>
            </div>

            {/* Daily Message */}
            <div className="modern-card max-w-4xl mx-auto text-center">
                <div className="mb-6 animate-pulse-gentle flex justify-center">
                </div>
                <div className="text-xl md:text-3xl font-dancing font-semibold gradient-text-love leading-relaxed mb-8">
                    {mensagem}
                </div>
                <div className="flex justify-center items-center gap-4">
                    <Heart className="w-5 h-5 text-pink-400 animate-pulse-gentle" fill="currentColor" style={{ animationDelay: '0s' }} />
                    <Sparkles className="w-5 h-5 text-purple-400 animate-pulse-gentle" style={{ animationDelay: '0.5s' }} />
                    <Heart className="w-5 h-5 text-rose-400 animate-pulse-gentle" fill="currentColor" style={{ animationDelay: '1s' }} />
                </div>
            </div>
        </div>
    );
};

export default MensagemRomantica;
