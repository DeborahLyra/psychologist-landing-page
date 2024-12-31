import { FacebookLogo, InstagramLogo, WhatsappLogo } from 'phosphor-react';

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
                        href="https://www.facebook.com/share/15U8iguUWQ/?mibextid=wwXIfr"
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
                        href="https://www.instagram.com/semiramispradopsicologa?igsh=MWloMnl0MmFhNXg4Nw=="
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
                        href="https://api.whatsapp.com/send?phone=5581989815885&text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20consulta%20com%20Semiramis%20Prado%20"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Twitter"
                        className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 hover:bg-roseTea transition-all"
                    >
                        <WhatsappLogo
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
