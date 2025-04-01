import { useState, useEffect } from 'react';
import '../css/TogetherTimer.css';

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

            // Para dias, meses e anos, fazemos um cálculo mais complexo
            // considerando diferentes durações de meses
            let years = now.getFullYear() - startDate.getFullYear();
            let months = now.getMonth() - startDate.getMonth();
            let days = now.getDate() - startDate.getDate();

            // Ajustes para valores negativos
            if (days < 0) {
                months--;
                // Dias no mês anterior
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

        // Calcular inicialmente e configurar intervalo
        calculateElapsedTime();
        const timerId = setInterval(calculateElapsedTime, 1000);

        // Limpar o intervalo quando o componente for desmontado
        return () => clearInterval(timerId);
    }, []);

    return (
        <div className="together-timer">
            <div className="timer-display">
                <div className="timer-unit">
                    <span className="timer-value">{elapsedTime.years}</span>
                    <span className="timer-label">{elapsedTime.years === 1 ? 'year' : 'years'}</span>
                </div>
                <div className="timer-unit">
                    <span className="timer-value">{elapsedTime.months}</span>
                    <span className="timer-label">{elapsedTime.months === 1 ? 'month' : 'months'}</span>
                </div>
                <div className="timer-unit">
                    <span className="timer-value">{elapsedTime.days}</span>
                    <span className="timer-label">{elapsedTime.days === 1 ? 'day' : 'days'}</span>
                </div>
                <div className="timer-separator"></div>
                <div className="timer-unit">
                    <span className="timer-value">{elapsedTime.hours.toString().padStart(2, '0')}</span>
                    <span className="timer-label">hours</span>
                </div>
                <div className="timer-unit">
                    <span className="timer-value">{elapsedTime.minutes.toString().padStart(2, '0')}</span>
                    <span className="timer-label">min</span>
                </div>
                <div className="timer-unit">
                    <span className="timer-value">{elapsedTime.seconds.toString().padStart(2, '0')}</span>
                    <span className="timer-label">sec</span>
                </div>
            </div>
            <div className="timer-message">Beeing the happiest person in the world ❤️</div>
        </div>
    );
};

export default TogetherTimer;