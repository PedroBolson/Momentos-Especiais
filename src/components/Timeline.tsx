import React from "react";
import {
    Heart,
    Plane,
    Waves,
    Gift,
    Home,
    Sparkles,
    Palmtree,
    Car,
    TicketsPlane,
    Key
} from "lucide-react";

const moments = [
    {
        title: "Primeiro Encontro",
        description: "O início da nossa linda história",
        date: "24/01/2021",
        icon: Heart,
        iconColor: "text-red-500",
        bgColor: "bg-red-50",
        details: "Foi quando tudo começou, com nervosismo e sorrisos tímidos que mudaram nossas vidas para sempre."
    },
    {
        title: "Primeira Viagem",
        description: "Uma jornada mágica para lembrar (Gramado)",
        date: "01/05/2021",
        icon: Car,
        iconColor: "text-blue-500",
        bgColor: "bg-blue-50",
        details: "Entre montanhas e passeios especiais, descobrimos que viajar juntos era ainda mais perfeito."
    },
    {
        title: "Primeira Praia",
        description: "Sol, areia e amor infinito (Florianópolis)",
        date: "13/11/2021",
        icon: Waves,
        iconColor: "text-cyan-500",
        bgColor: "bg-cyan-50",
        details: "Caminhadas na praia ao pôr do sol, criando memórias douradas que guardaremos eternamente."
    },
    {
        title: "Primeiro Dia dos Namorados",
        description: "Um dia repleto de surpresas e romance",
        date: "11/06/2022",
        icon: Gift,
        iconColor: "text-pink-500",
        bgColor: "bg-pink-50",
        details: "Jantares especiais e declarações sinceras que tocaram profundamente nossos corações."
    },
    {
        title: "Primeira Cabana",
        description: "Momentos aconchegantes (Nova Roma do Sul)",
        date: "26/08/2022",
        icon: Home,
        iconColor: "text-amber-500",
        bgColor: "bg-amber-50",
        details: "Noites estreladas e manhãs preguiçosas em nossa primeira experiência de lar temporário."
    },
    {
        title: "Primeiro Ano Novo",
        description: "Amor e fogos de artifício no novo ano",
        date: "31/12/2022",
        icon: Sparkles,
        iconColor: "text-purple-500",
        bgColor: "bg-purple-50",
        details: "Começamos o ano com promessas de amor eterno e muitos sonhos compartilhados."
    },
    {
        title: "Primeiro Voo",
        description: "Paraíso encontrado (Maragogi / Porto de Galinhas)",
        date: "06/03/2023",
        icon: Palmtree,
        iconColor: "text-green-500",
        bgColor: "bg-green-50",
        details: "Águas cristalinas e amor infinito no paraíso nordestino que nunca esqueceremos."
    },
    {
        title: "Segundo Voo",
        description: "Aventuras incríveis (Rio / Arraial do Cabo)",
        date: "07/11/2023",
        icon: Plane,
        iconColor: "text-orange-500",
        bgColor: "bg-orange-50",
        details: "Entre Pão de Açúcar e praias paradisíacas, nosso amor cresceu ainda mais forte."
    },
    {
        title: "Terceiro Voo",
        description: "Paraíso tropical (Morro de São Paulo)",
        date: "31/10/2024",
        icon: TicketsPlane,
        iconColor: "text-teal-500",
        bgColor: "bg-teal-50",
        details: "Descobrindo juntos que cada nova viagem é uma aventura única e especial."
    },
    {
        title: "Morando Juntos",
        description: "Nossa casa, nosso amor, nosso futuro",
        date: "07/02/2025",
        icon: Key,
        iconColor: "text-rose-500",
        bgColor: "bg-rose-50",
        details: "O maior e mais importante passo da nossa jornada: construindo um lar verdadeiro juntos."
    }
];

const Timeline: React.FC = () => {
    return (
        <div className="w-full">
            {/* Section Header */}
            <div className="text-center mb-20">
                <div className="flex items-center justify-center mb-4">
                    <div className="h-px bg-gradient-to-r from-transparent via-red-300 to-transparent flex-1 max-w-32"></div>
                    <Heart className="w-6 h-6 text-red-500 mx-4" />
                    <div className="h-px bg-gradient-to-r from-transparent via-red-300 to-transparent flex-1 max-w-32"></div>
                </div>
                <h2 className="font-dancing text-6xl md:text-7xl gradient-text-love mb-6">
                    Nossa Timeline de Amor
                </h2>
                <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-4">
                    Uma jornada de momentos únicos e inesquecíveis que construíram nossa história de amor
                </p>
                <p className="font-inter text-lg text-gray-500 max-w-2xl mx-auto">
                    Cada data marca um capítulo especial da nossa vida juntos, repleto de emoções e descobertas
                </p>
            </div>

            {/* Timeline Container */}
            <div className="timeline-container">
                <div className="timeline-scroll">
                    <div className="flex gap-6 pb-4" style={{ minWidth: 'max-content' }}>
                        {moments.map((moment, index) => {
                            const IconComponent = moment.icon;
                            return (
                                <div key={index} className="timeline-item">
                                    <div
                                        className="timeline-card modern-card animate-fadeInUp"
                                        style={{
                                            animationDelay: `${index * 0.1}s`,
                                            width: '320px'
                                        }}
                                    >
                                        {/* Icon */}
                                        <div className="text-center mb-6">
                                            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${moment.bgColor} mb-3 animate-pulse-gentle`}>
                                                <IconComponent className={`w-8 h-8 ${moment.iconColor}`} />
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="text-center space-y-4">
                                            <h3 className="font-dancing text-3xl md:text-4xl gradient-text-love font-semibold">
                                                {moment.title}
                                            </h3>

                                            <p className="font-inter text-base text-gray-600 leading-relaxed">
                                                {moment.description}
                                            </p>

                                            <p className="font-inter text-sm text-gray-500 italic leading-relaxed">
                                                {moment.details}
                                            </p>

                                            {/* Date Badge */}
                                            <div className="inline-flex items-center px-3 py-2 bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs font-semibold rounded-full">
                                                <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                                {moment.date}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Mensagem de Aviso para Scroll */}
            <div className="text-center mt-8 mb-6">
                <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-xl p-6 max-w-md mx-auto shadow-sm">
                    <div className="flex items-center justify-center gap-3 mb-3">
                        <svg className="w-6 h-6 text-red-500 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                        </svg>
                        <span className="font-dancing text-2xl text-red-600 font-semibold">
                            Deslize para os lados!
                        </span>
                        <svg className="w-6 h-6 text-red-500 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </div>
                    <p className="font-inter text-sm text-gray-600">
                        Explore todos os momentos especiais da nossa jornada ❤️
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Timeline;
