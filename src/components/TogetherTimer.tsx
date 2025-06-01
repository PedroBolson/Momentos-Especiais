import { useState, useEffect } from 'react';
import { Heart, Sparkles } from 'lucide-react';

const TogetherTimer: React.FC = () => {
    const [elapsedTime, setElapsedTime] = useState<{
        years: number;
        months: number;
        days: number;
        hours: number;
        minutes: number;
        seconds: number;
    }>({
        years: 0,
        months: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        // Data inicial: 24 de janeiro de 2021 às 20:00
        const startDate = new Date(2021, 0, 24, 20, 0, 0);

        const calculateElapsedTime = () => {
            const now = new Date();
            const difference = now.getTime() - startDate.getTime();

            // Cálculo das unidades de tempo
            const seconds = Math.floor((difference / 1000) % 60);
            const minutes = Math.floor((difference / (1000 * 60)) % 60);
            const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);

            // Para dias, meses e anos
            let years = now.getFullYear() - startDate.getFullYear();
            let months = now.getMonth() - startDate.getMonth();
            let days = now.getDate() - startDate.getDate();

            // Ajustes para valores negativos
            if (days < 0) {
                months--;
                const lastMonthDate = new Date(now.getFullYear(), now.getMonth(), 0);
                days += lastMonthDate.getDate();
            }

            if (months < 0) {
                years--;
                months += 12;
            }

            setElapsedTime({
                years,
                months,
                days,
                hours,
                minutes,
                seconds,
            });
        };

        calculateElapsedTime();
        const timerId = setInterval(calculateElapsedTime, 1000);
        return () => clearInterval(timerId);
    }, []);

    const timeUnits = [
        { value: elapsedTime.years, label: elapsedTime.years === 1 ? 'Ano' : 'Anos', color: 'from-red-500 to-pink-500' },
        { value: elapsedTime.months, label: elapsedTime.months === 1 ? 'Mês' : 'Meses', color: 'from-orange-500 to-red-500' },
        { value: elapsedTime.days, label: elapsedTime.days === 1 ? 'Dia' : 'Dias', color: 'from-yellow-500 to-orange-500' },
        { value: elapsedTime.hours, label: elapsedTime.hours === 1 ? 'Hora' : 'Horas', color: 'from-green-500 to-yellow-500' },
        { value: elapsedTime.minutes, label: elapsedTime.minutes === 1 ? 'Minuto' : 'Minutos', color: 'from-blue-500 to-green-500' },
        { value: elapsedTime.seconds, label: elapsedTime.seconds === 1 ? 'Segundo' : 'Segundos', color: 'from-purple-500 to-blue-500' },
    ];

    return (
        <div className="w-full">
            {/* Header */}
            <div className="text-center mb-16">
                <h2 className="font-dancing text-5xl md:text-6xl gradient-text-love mb-4">
                    Tempo Juntos
                </h2>
                <p className="font-inter text-lg text-gray-600 max-w-2xl mx-auto flex items-center justify-center gap-2">
                    Cada segundo ao seu lado é um presente da vida
                    <Heart className="w-5 h-5 text-pink-500 animate-pulse" fill="currentColor" />
                    <Sparkles className="w-5 h-5 text-purple-500 animate-pulse" />
                </p>
            </div>

            {/* Timer Cards */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 max-w-5xl mx-auto mb-8">
                {timeUnits.map((unit, index) => (
                    <div
                        key={unit.label}
                        className="modern-card p-6 text-center animate-fadeInUp"
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${unit.color} bg-clip-text text-transparent mb-2 animate-pulse-gentle`}>
                            {unit.value.toString().padStart(2, '0')}
                        </div>
                        <div className="text-xs md:text-sm text-gray-600 font-inter font-medium uppercase tracking-wider">
                            {unit.label}
                        </div>
                    </div>
                ))}
            </div>

            {/* Quote */}
            <div className="text-center">
                <div className="modern-card p-8 max-w-2xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
                    <p className="font-dancing text-2xl md:text-3xl gradient-text-love italic mb-4">
                        "O tempo voa quando estamos felizes, mas cada momento contigo vale uma eternidade"
                    </p>
                    <div className="flex justify-center space-x-2 text-red-500">
                        <Heart className="w-6 h-6 animate-pulse-gentle" fill="currentColor" />
                        <Sparkles className="w-6 h-6 animate-pulse-gentle text-purple-500" style={{ animationDelay: '0.5s' }} />
                        <Heart className="w-6 h-6 animate-pulse-gentle text-pink-500" fill="currentColor" style={{ animationDelay: '1s' }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TogetherTimer;