import image from '../../../public/imgs/contact-photo.jpeg';
import { WhatsappLogo, MapPin, Phone } from 'phosphor-react';

const contact = [
    {
        link: "https://maps.app.goo.gl/LnjP9yiw3BTfvn137",
        icon: MapPin,
        text: 'RioMar Trade Center - Av. República do Líbano, 251 - 206 - Pina, Recife - PE',
    },
    {
        link: "https://api.whatsapp.com/send?phone=5581989815885&text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20consulta%20com%20Semiramis%20Prado%20",
        icon: WhatsappLogo,
        text: 'Entre em contato pelo WhatsApp',
    },
    {
        link: 'https://maps.app.goo.gl/LnjP9yiw3BTfvn137',
        icon: Phone,
        text: 'Telefone para contato: (81)9.8981-5885',
    },
];

export function Contact() {
    return (
        <div className="relative w-full p-8 rounded-lg bg-offWhite overflow-hidden">
            <section className="mb-6 text-center">
                    <h2 className="font-bold text-2xl mb-4 text-center sm:text-left">Agende uma Consulta</h2>
                    <p className="text-lgl mb-4 text-center sm:text-left text-gray-600">
                    Clínica Andros Recife - Saúde Integral Masculina.
                    </p>
                </section>

            <section className="flex flex-col md:flex-row items-center justify-between bg-roseTea/70 p-6 rounded-lg gap-6">
                <div className="flex flex-col gap-6">
                    {contact.map((item, index) => {
                        const IconComponent = item.icon;
                        return (
                            <a
                                key={index}
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg  transition-transform transform hover:scale-105"
                            >
                                <IconComponent size={36} className="text-roseTea" />
                                <p className="text-md font-semibold text-gray-700transition-colors">
                                    {item.text}
                                </p>
                            </a>
                        );
                    })}
                </div>
                <div className="order-1 md:order-2 flex-shrink-0">
                    <img
                        src={image}
                        alt="Foto de Contato"
                        className="w-72 h-auto rounded-lg shadow-md object-cover"
                    />
                </div>
            </section>
        </div>
    );
}




