import Image from "next/image";

export default function ElNegocio() {
    return (
        <section className="bg-[#0b1726] pl-4 pr-4 Z-0 lg:flex">
            <div className="pt-14 pb-20 lg:w-3/5">
                <h1 className="text-[#07d2e9] text-4xl text-center">El negocio tiene solo dos funciones marketing e innovacion</h1>
                <article className="mt-7 flex flex-col gap-2">
                    <h4 className="text-white font-semibold text-sm">ASESORAMIENTO INTEGRAL DE EMPRESAS</h4>
                    <p className="text-[#07d2e9] text-xl">Profesionales con probidad, integridad, con solvencia tecnica y moral ofrecen sus servicios Profesionales especializadon en:</p>
                </article>

                <ul className="text-white text-xl mt-5 list-disc pl-4">
                    <li>Aplicación de Marketing digital con incidencia en el NEUROMARKETING.</li>
                    <li>Negocios internacionales (Export & Import)</li>
                    <li>
                        <span>Inversiones en compra y venta de: Divisas – Forex</span>
                        <ul>
                            <li>
                                Materias primas (oro, plata, cobre, petróleo, gas, café, azúcar, soya y otros)
                            </li>
                            <li>Acciones</li>
                            <li>Bonos</li>
                            <li>Derivados financieros como:Forwards, Futuros, Opciones y Swaps</li>
                            <li>CFDs</li>
                            <li>ETS y más de 250 Instrumentos financieros.</li>
                        </ul>
                    </li>
                </ul>

                <ul className="text-white text-xl mt-5 list-disc pl-4">
                    <li>Representación comercial de empresas nacionales e internacionales</li>
                    <li>Coaching</li>
                    <li>Gestión pública</li>
                    <li>Posicionamiento de páginas web (vender por internet desde el primer día)</li>
                    <li>Corretaje inmobiliario</li>
                    <li>Asesoría de tesis para pre y postgrado en:
                        <ul>
                        <li>Marketing</li>
                        <li>Negocios internacionales</li>
                        <li>Finanzas</li>
                        <li>Gestión Pública</li>
                        <li>Gerencia estratégica</li>
                        </ul>
                    </li>
                    <li>En varios de los servicios pagas por resultados.</li>
                </ul>

            </div>



            <div className="lg:w-2/5">
                <div>
                    <h2 className="text-white text-2xl pt-7 pb-7 border-b-[1px] border-b-white border-b-solid">We believe in perfection & creativity</h2>
                </div>
                <div className="pt-4 pb-4">
                    <Image 
                      src="/img/mulher_desenhando.webp"
                      alt=""
                      width={720}
                      height={720}
                      className="w-9/10 hover:scale-105 transition-all duration-300"
                    />
                </div>
            </div>
        </section>
    )
}