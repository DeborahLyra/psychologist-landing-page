import { FacebookLogo, InstagramLogo, TwitterLogo, Envelope, Phone } from 'phosphor-react';
import logo from '../../../public/imgs/logo-semiramis.png'

export function Footer() {
    return (
        <footer className="bg-roseTea text-gray-700 py-8">
            <div className="container mx-auto flex items-center justify-around">

                <div className="text-center md:text-left">
                    <div className="flex justify-center md:justify-start gap-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FacebookLogo size={32} weight="fill" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <InstagramLogo size={32} weight="fill"  />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <TwitterLogo size={32} weight="fill"  />
                        </a>
                    </div>
                </div>
                <div className="text-center md:text-right">
                    <img src={logo} alt="" className='h-24 md:h-16 lg:h-16'/>
                </div>
            </div>
        </footer>
    );
}
