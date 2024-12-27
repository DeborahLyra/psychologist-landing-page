//import image from '../../../public/imgs/contact-photo.jpeg'
import { WhatsappLogo, InstagramLogo, FacebookLogo, Phone } from 'phosphor-react';

const contact = [
    {
        link: 'https://wa.me/1234567890',
        icon: WhatsappLogo,
        text:'Entre em contato pelo WhatsApp'
    },
    {
        link: 'https://instagram.com/seuusuario',
        icon: InstagramLogo,
        text:'Acesse o Instagram'
    },
    {
        link: 'https://facebook.com/seuusuario',
        icon: FacebookLogo,
        text:'Acesse o FaceBook'
    },
    {
        link: 'tel:+1234567890',
        icon: Phone,
        text:'Entre em contato pelo celular'
    },
];

export function Contact() {
    return (
        <div className="p-8 rounded-lg w-full shadow-lg">
            <section className="mb-6">
                <h2 className="font-bold text-2xl mb-4 text-center sm:text-left">
                    Entre em Contato
                </h2>
                <p className="text-lgl mb-4 text-center sm:text-left text-gray-600">
                    Conecte-se pelas plataformas abaixo:
                </p>
            </section>
            <section className="flex gap-8 flex-col items-center justify-between p-4 md:flex-row lg:flex-row">
                {contact.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                        <div
                            key={index}
                            className="flex items-center justify-center p-2 w-36 h-36 rounded-lg bg-salmonLight shadow-md hover:shadow-xl transition-transform transform hover:scale-105"
                        >
                            <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-col gap-4 items-center justify-center w-full h-full"
                            >
                                <IconComponent size={56} color="#fff" />
                                <p className='text-center text-white font-semibold'>{item.text}</p>
                            </a>
                        </div>
                    );
                })}
            </section>
        </div>
    );
}
