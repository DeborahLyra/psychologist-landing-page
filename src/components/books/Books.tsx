import book1 from '../../../public/imgs/book1Cover.jpeg';

export function Books() {
    return (
        <div className="p-8 rounded-lg w-full bg-offWhite">
            <section className="mb-6 text-center">
                <h2 className="font-bold text-2xl mb-4 text-center sm:text-left">Livros</h2>
                <p className="text-lgl mb-4 text-center sm:text-left text-gray-600">
                    Descubra as contribuições literárias da psicóloga Semíramis Prado, que abordam temas essenciais na área da saúde sexual.
                </p>
            </section>

            <section className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="flex flex-col md:flex-row items-center border-roseTea border-4 shadow-lg rounded-xl overflow-hidden transform transition duration-300 hover:scale-105">
                    <a
                        href="https://www.amazon.com.br/Brasileiro-MEDICINA-Leonardo-GMarquesine-FFakhouri/dp/6586143918"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full md:w-1/3"
                    >
                        <img
                            src={book1}
                            alt="Capa do livro Tratado Brasileiro de Medicina e Saúde Sexual"
                            className="h-full w-full object-cover"
                        />
                    </a>
                    <div className="p-6 w-full">
                        <h4 className="font-bold text-xl text-gray-700 mb-2">
                            Tratado Brasileiro de Medicina e Saúde Sexual
                        </h4>
                        <p className="text-gray-600 text-sm">
                            Uma obra abrangente que reúne conhecimentos atualizados e práticas essenciais sobre saúde sexual, contribuindo para o desenvolvimento da medicina e psicologia sexual no Brasil.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row-reverse items-center  border-roseTea border-4 shadow-lg rounded-xl overflow-hidden transform transition duration-300 hover:scale-105">
                    <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full md:w-1/3"
                    >
                        <img
                            src={book1}
                            alt="Capa do livro Técnicas e Tratamento da Ejaculação Precoce"
                            className="h-full w-full object-cover"
                        />
                    </a>
                    <div className="p-6 w-full">
                        <h4 className="font-bold text-xl text-gray-700 mb-2">
                            Técnicas e Tratamento da Ejaculação Precoce
                        </h4>
                        <p className="text-gray-600 text-sm">
                            Uma obra abrangente que reúne conhecimentos atualizados e práticas essenciais sobre saúde sexual, contribuindo para o desenvolvimento da medicina e psicologia sexual no Brasil.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
