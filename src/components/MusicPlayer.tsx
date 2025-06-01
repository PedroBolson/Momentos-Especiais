interface MusicPlayerProps {
    isGloballyPlaying?: boolean;
    onTogglePlay: () => void;
}

const MusicPlayer = ({ isGloballyPlaying = false, onTogglePlay }: MusicPlayerProps) => {

    return (
        <div className="w-full">
            {/* Header */}
            <div className="text-center mb-12">
                <h2 className="font-dancing text-5xl md:text-6xl gradient-text-love mb-4">
                    Nossa Trilha Sonora
                </h2>
                <p className="font-inter text-lg text-gray-600 max-w-2xl mx-auto">
                    A música que toca nossos corações 🎵💕
                </p>
            </div>

            {/* Music Player Principal */}
            <div className={`modern-card max-w-md mx-auto text-center slide-transition ${isGloballyPlaying ? 'player-playing' : ''}`}>
                <div className="mb-6">
                    <div className="relative mb-6">
                        {/* Visualizador de música animado */}
                        <div className="flex justify-center items-end gap-1 h-16 mb-4">
                            {[...Array(5)].map((_, i) => (
                                <div
                                    key={i}
                                    className={`bg-gradient-to-t from-pink-400 to-purple-500 rounded-full transition-all duration-300 music-visualizer-bar ${isGloballyPlaying
                                        ? 'opacity-100'
                                        : 'opacity-30'
                                        }`}
                                    style={{
                                        width: '4px',
                                        height: '20px',
                                        animationPlayState: isGloballyPlaying ? 'running' : 'paused'
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                    <h3 className="font-dancing text-2xl gradient-text-love mb-2">Heat Waves</h3>
                    <p className="text-gray-600 font-medium">Glass Animals</p>
                </div>

                <div className="flex items-center justify-center gap-6">
                    <button
                        className={`w-20 h-20 rounded-full flex items-center justify-center text-3xl transition-all duration-300 hover:scale-110 shadow-lg ${isGloballyPlaying
                            ? 'bg-gradient-to-r from-pink-400 to-purple-500 text-white shadow-pink-300/50 animate-pulse'
                            : 'bg-gradient-to-r from-gray-200 to-gray-300 text-gray-600 hover:from-pink-100 hover:to-purple-100 hover:shadow-pink-200/50'
                            }`}
                        onClick={onTogglePlay}
                    >
                        {isGloballyPlaying ? (
                            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                            </svg>
                        ) : (
                            <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        )}
                    </button>
                    <div className="text-center">
                        {isGloballyPlaying ? (
                            <div className="text-pink-600 font-medium">
                                <div className="flex items-center gap-2">
                                    <svg className="w-5 h-5 animate-spin" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                                        <path d="M12 6v6l4 2" />
                                    </svg>
                                    <span>♫ Tocando nossa música</span>
                                </div>
                            </div>
                        ) : (
                            <span className="text-gray-600">Clique para ouvir</span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MusicPlayer;
