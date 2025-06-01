import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// Import required modules
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import { Heart, Brush, HandHeart, ScanHeart } from 'lucide-react';

// Importa as imagens da pasta assets
const images = Object.values(
    import.meta.glob('../assets/*.{png,jpg,jpeg,svg}', { eager: true })
).map((module: any) => module.default);

const Carrossel: React.FC = () => {
    return (
        <div className="w-full">
            {/* Header */}
            <div className="text-center mb-16">
                <h2 className="font-dancing text-5xl md:text-6xl gradient-text-love mb-4">
                    Nossas Memórias
                </h2>
                <p className="font-inter text-lg text-gray-600 max-w-2xl mx-auto">
                    Cada foto conta uma história de amor, risos e momentos inesquecíveis ✨💕
                </p>
            </div>

            {/* Swiper Carousel */}
            <div className="mb-16">
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    spaceBetween={30}
                    coverflowEffect={{
                        rotate: 20,
                        stretch: 0,
                        depth: 80,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={{
                        clickable: true,
                        dynamicBullets: true,
                    }}
                    navigation={true}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    loop={true}
                    modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                    className="carousel-swiper"
                    style={{
                        '--swiper-navigation-color': '#ec4899',
                        '--swiper-pagination-color': '#ec4899',
                        '--swiper-navigation-size': '24px',
                        paddingBottom: '60px',
                        paddingTop: '20px',
                    } as any}
                >
                    {images.map((image, idx) => (
                        <SwiperSlide key={idx} style={{ width: '320px', height: '400px' }}>
                            <div className="relative group cursor-pointer h-full w-full rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                                <img
                                    src={image}
                                    alt={`Momento especial ${idx + 1}`}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                {/* Overlay with romantic effect */}
                                <div className="absolute inset-0 bg-gradient-to-t from-pink-500/30 via-transparent to-purple-500/20 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                                    <Heart className="w-12 h-12 text-white animate-pulse-gentle" fill="currentColor" />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Romantic Messages - Redesigned */}
            <div className="grid lg:grid-cols-2 gap-6">
                <div className="modern-card text-center">
                    <div className="flex justify-center mb-4">
                        <Brush className="w-10 h-10 text-pink-500 animate-pulse-gentle" />
                    </div>
                    <h3 className="font-dancing text-3xl gradient-text-love mb-4">
                        Vida em Cores
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                        <span className="text-pink-600 font-semibold">A vida tem cores mais vibrantes ao seu lado</span> e tudo se torna mais intenso.
                        A jornada da vida com você faz cada dia mais especial.
                    </p>
                </div>

                <div className="modern-card text-center">
                    <div className="flex justify-center mb-4">
                        <HandHeart className="w-10 h-10 text-purple-500 animate-pulse-gentle" />
                    </div>
                    <h3 className="font-dancing text-3xl gradient-text-love mb-4">
                        Cada Sorriso
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                        <span className="text-purple-600 font-semibold">Cada sorriso seu ilumina meu dia</span>, cada abraço aquece meu coração.
                        Nossos momentos juntos ficam carinhosamente guardados em minha memória.
                    </p>
                </div>

                <div className="lg:col-span-2 modern-card text-center">
                    <div className="flex justify-center mb-6">
                        <ScanHeart className="w-12 h-12 text-rose-500 animate-pulse-gentle" fill="currentColor" />
                    </div>
                    <h3 className="font-dancing text-4xl gradient-text-love mb-6">
                        Celebrando o Amor
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-lg max-w-3xl mx-auto">
                        <span className="text-rose-600 font-semibold">Quero celebrar não apenas mais um ano</span>, mas todos os pequenos momentos que
                        tornam nossa história tão única. O amor que sinto por você cresce a cada novo amanhecer.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Carrossel;
