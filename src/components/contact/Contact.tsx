import image from '../../../public/imgs/contact-photo.jpeg'

export function Contact() {
    return (
        <div className="p-8 rounded-lg w-full bg-offWhite">
            <section className="mb-6">
                <h2 className="font-bold text-2xl mb-4 text-center sm:text-left">Contato</h2>
                <p className="text-lgl mb-4 text-center sm:text-left text-gray-600">
                    Descubra as contribuições literárias da psicóloga Semíramis Prado, que abordam temas essenciais na área da saúde sexual.
                </p>
            </section>
            <section className='flex items-center justify-around'>
                <div>
                    numeros
                </div>
                <img
                    src={image}
                    alt="Semiramis Prado"
                    className='w-56 rounded-lg'
                />
            </section>
        </div>
    )
}
