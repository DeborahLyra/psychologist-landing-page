import book1 from '../../../public/imgs/book1Cover.jpeg'

export function Books() {
    return (
        <div className="p-8 rounded-lg w-full bg-offWhite">
            <section className="mb-6">
                <h2 className="font-bold text-2xl mb-4 text-center sm:text-left">Livros</h2>
                <p className="text-lgl mb-4 text-center sm:text-left text-gray-600">
                    Descubra as contribuições literárias da psicóloga Semíramis Prado, que abordam temas essenciais na área da saúde sexual.
                </p>
            </section>
            <section className="bg-roseTea p-4 rounded-xl mb-6 flex flex-col items-center justify-center gap-4 md:flex-row lg:flex-row ">
                <div>
                    <h4 className="font-semibold text-xl mb-2 text-gray-700">
                        Tratado Brasileiro de Medicina e Saúde Sexual
                    </h4>
                    <p className="mt-4 text-md text-gray-900">
                        Uma obra abrangente que reúne conhecimentos atualizados e práticas essenciais sobre saúde sexual, contribuindo para o desenvolvimento da medicina e psicologia sexual no Brasil.
                    </p>
                </div>
                <a
                    href="https://www.amazon.com.br/Brasileiro-MEDICINA-Leonardo-GMarquesine-FFakhouri/dp/6586143918"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src={book1}
                        alt="Capa do livro Tratado Brasileiro de Medicina e Saúde Sexual"
                        className="rounded-lg shadow-md w-56 sm:w-1/2 mx-auto"
                    />
                </a>

            </section>
            <section className="bg-roseTea p-4 rounded-xl mb-6 flex flex-col items-center justify-center gap-4 md:flex-row lg:flex-row-reverse ">
                <div>
                    <h4 className="font-semibold text-xl mb-2 text-gray-700">
                        Técnicas e Tratamento da Ejaculação Precoce
                    </h4>
                    <p className="mt-4 text-md text-gray-900">
                        Uma obra abrangente que reúne conhecimentos atualizados e práticas essenciais sobre saúde sexual, contribuindo para o desenvolvimento da medicina e psicologia sexual no Brasil.
                    </p>
                </div>
                <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src={book1}
                        alt="Capa do livro Técnicas e Tratamento da Ejaculação Precoce"
                        className="rounded-lg shadow-md w-56 sm:w-1/2 mx-auto"
                    />
                </a>

            </section>
        </div>
    );
}
