import React, { useRef, useState } from "react";
import "../css/Timeline.css";

const moments = [
    {
        title: "First date",
        description: "The beggining!",
        date: "24/01/2021"
    },
    {
        title: "First trip together",
        description: "A trip to remember. (GRAMADO)",
        date: "01/05/2021"
    },
    {
        title: "First beach trip together",
        description: "A trip to remember. (FLORIANOPOLIS)",
        date: "13/11/2021"
    },
    {
        title: "First valentine's day together",
        description: "A day full of surprises.",
        date: "11/06/2022"
    },
    {
        title: "First cabin together",
        description: "A trip to remember. (NOVA ROMA DO SUL)",
        date: "26/08/2022"
    },
    {
        title: "First new year togheter",
        description: "A day of love and companionship.",
        date: "31/12/2022"
    },
    {
        title: "First flight together",
        description: "A trip to remember and return (MARAGOGI / PORTO DE GALINHAS)",
        date: "06/03/2023"
    },
    {
        title: "Second fligt together",
        description: "A trip to remember and return (RIO / ARRAIAL DO CABO)",
        date: "07/11/2023"
    },
    {
        title: "Tird flight together",
        description: "A trip to remember and return (MORRO DE SÃO PAULO)",
        date: "31/10/2024"
    },
    {
        title: "Living toghether",
        description: "The best part of the relationship.",
        date: "07/02/2025"
    }
];

const Timeline = () => {
    const timelineRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        setIsDragging(true);
        if (timelineRef.current) {
            setStartX(e.pageX - timelineRef.current.offsetLeft);
            setScrollLeft(timelineRef.current.scrollLeft);
            timelineRef.current.style.cursor = 'grabbing';
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        if (timelineRef.current) {
            timelineRef.current.style.cursor = 'grab';
        }
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isDragging || !timelineRef.current) return;

        const x = e.pageX - timelineRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        timelineRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        if (timelineRef.current) {
            setIsDragging(true);
            setStartX(e.touches[0].pageX - timelineRef.current.offsetLeft);
            setScrollLeft(timelineRef.current.scrollLeft);
        }
    };

    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        if (!isDragging || !timelineRef.current) return;

        const x = e.touches[0].pageX - timelineRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        timelineRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleTouchEnd = () => {
        setIsDragging(false);
    };

    const scrollLeftButton = () => {
        if (timelineRef.current) {
            timelineRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    const scrollRightButton = () => {
        if (timelineRef.current) {
            timelineRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    return (
        <div className="timeline-wrapper">
            <div className="timeline-scroll-controls">
                <button onClick={scrollLeftButton} className="timeline-nav-button left">←</button>
                <button onClick={scrollRightButton} className="timeline-nav-button right">→</button>
            </div>

            <div
                className="timeline-outer-container"
                ref={timelineRef}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                <div className="timeline-container">
                    {moments.map((moment, index) => (
                        <div
                            key={index}
                            className="timeline-item"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="timeline-circle" />
                            <div className="timeline-content">
                                <h3>{moment.title}</h3>
                                <p>{moment.description}</p>
                                <span className="timeline-date">{moment.date}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="timeline-scroll-indicator">
                ← Slide or press button →
            </div>
        </div>
    );
};

export default Timeline;
