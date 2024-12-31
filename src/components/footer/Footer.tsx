import { FacebookLogo, InstagramLogo, TwitterLogo } from 'phosphor-react';

export function Footer() {
    return (
        <footer className="bg-offWhite text-roseTea p-8 border-t-4 border-roseTea">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-center md:text-left">
                    <h2 className="font-extrabold text-2xl text-gray-800 mb-1">Semíramis Prado</h2>
                    <p className="font-medium text-lg text-gray-600">Psicóloga</p>
                </div>

                <div className="flex justify-center gap-6">
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                        className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 hover:bg-roseTea transition-all"
                    >
                        <FacebookLogo
                            size={30}
                            weight="fill"
                            className="text-roseTea group-hover:text-white transition-colors"
                        />
                    </a>
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 hover:bg-roseTea transition-all"
                    >
                        <InstagramLogo
                            size={30}
                            weight="fill"
                            className="text-roseTea group-hover:text-white transition-colors"
                        />
                    </a>
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Twitter"
                        className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 hover:bg-roseTea transition-all"
                    >
                        <TwitterLogo
                            size={30}
                            weight="fill"
                            className="text-roseTea group-hover:text-white transition-colors"
                        />
                    </a>
                </div>
            </div>
        </footer>
    );
}
