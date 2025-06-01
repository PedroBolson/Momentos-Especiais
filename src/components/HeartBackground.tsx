function HeartBackground() {
    // Criar mais corações com propriedades aleatórias
    const hearts = Array.from({ length: 25 }, (_, index) => {
        const sizes = [14, 18, 22, 26, 30, 34];
        const speeds = [12, 16, 20, 24, 28, 32];
        const delays = Math.random() * 10;
        const positions = Math.random() * 100;
        const rotationSpeed = Math.random() * 2 + 1;

        const size = sizes[Math.floor(Math.random() * sizes.length)];
        const speed = speeds[Math.floor(Math.random() * speeds.length)];

        return (
            <div
                key={index}
                className="floating-heart-modern"
                style={{
                    left: `${positions}%`,
                    fontSize: `${size}px`,
                    animationDuration: `${speed}s`,
                    animationDelay: `${delays}s`,
                    '--heart-size': `${size}px`,
                    '--rotation-speed': `${rotationSpeed}s`
                } as React.CSSProperties & { '--heart-size': string; '--rotation-speed': string }}
            >
                <svg
                    width={size}
                    height={size}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="heart-icon"
                    style={{
                        animationDuration: `${rotationSpeed * 2}s`
                    }}
                >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
            </div>
        );
    });

    return (
        <div className="floating-hearts-container">
            {hearts}
        </div>
    );
}

export default HeartBackground;