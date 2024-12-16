export function AboutMe() {
    return (
        <div className="p-8 w-full bg-gray-50">
            <section className="mb-2">
                <h2 className="font-bold text-2xl mb-4">Sobre Mim</h2>
            </section>

            <section>
                <h3 className="font-bold text-xl text-gray-800 mb-4">Formação Acadêmica</h3>
                <article className="mb-6">
                    <h4 className="font-semibold text-lg text-gray-700">Graduação</h4>
                    <p className="text-gray-600">Faculdade de Filosofia do Recife (FAFIRE)</p>
                </article>

                <article>
                    <h4 className="font-semibold text-lg text-gray-700">Especializações</h4>
                    <ul className="list-inside text-gray-600 space-y-2">
                        <li>Psicologia Clínica</li>
                        <li>Formação em Terapia Sexual pela Sociedade Brasileira de Estudos em Sexualidade (SBRASH)</li>
                        <li>Pós Graduação em Sexualidade Humana pela UNICAP</li>
                        <li>Curso de Terapia Sexual numa Abordagem Multidisciplinar</li>
                        <li>Curso de Terapia Sexual pelo Instituto Paulista de Sexualidade Humana</li>
                        <li>Terapia de Casal numa Abordagem Cognitivo-comportamental (UNICAP)</li>
                    </ul>
                </article>
            </section>
            <section>
                <h3 className="font-bold text-xl text-gray-800 mb-4">Atuação</h3>
                <article>
                    <ul className="list-inside text-gray-600 space-y-2">
                        <li>Atualmente sou Psicólga ....</li>
                        <li>Fui Delegada Estadual da SBRASH em três Gestões</li>
                        <li>Membro da ABEMSS - Associação Brasileira de Estudos em Medicina e Saúde Sexual</li>
                        <li>Atuou como Psicóloga Clínica (crianças, adolescentes e adultos) durante 27 anos no Ambulatório do Hospital João Murilo-Secretaria de Saúde/PE</li>

                    </ul>
                </article>
            </section>
        </div>
    );
}
