import { Heart } from 'lucide-react';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="mt-24 w-full">
            {/* Decorative separator */}
            <div className="h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent mb-16"></div>

            {/* Footer content */}
            <div className="modern-card max-w-3xl mx-auto mb-12 text-center">
                <div className="mb-8">
                    <div className="flex justify-center items-center gap-4 mb-6">
                        <Heart className="w-8 h-8 text-pink-500 animate-pulse-gentle" fill="currentColor" />
                        <h3 className="font-dancing text-4xl gradient-text-love">
                            Momentos Especiais
                        </h3>
                        <Heart className="w-8 h-8 text-pink-500 animate-pulse-gentle" fill="currentColor" />
                    </div>
                    <p className="text-gray-600 text-lg leading-relaxed max-w-lg mx-auto">
                        Um site criado com todo carinho para celebrar nosso amor e todos os momentos únicos que vivemos juntos
                    </p>
                </div>

                <div className="border-t border-pink-200/30 pt-8">
                    <p className="text-gray-600 text-sm mb-4">
                        © {currentYear} Pedro Bolson
                    </p>
                    <p className="font-dancing text-2xl gradient-text-love font-semibold flex items-center justify-center gap-2">
                        <Heart className="w-5 h-5 text-red-500 animate-pulse-gentle" fill="currentColor" />
                        Feito com muito amor
                        <Heart className="w-5 h-5 text-red-500 animate-pulse-gentle" fill="currentColor" />
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;