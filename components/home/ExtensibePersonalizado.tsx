import Image from "next/image";

export default function ExtensivePersonalizado() {
    return (
        <section className="pl-4 pr-4 pt-6 pb-6 grid gap-5 lg:flex justify-around">
            <div className="lg:order-2 lg:w-2/5">
                <Image 
                  src="/img/assembleia.webp"
                  alt=""
                  width={1280}
                  height={1280}
                  className="w-full rounded-2xl border-[1px] border-solid border-[#07d2e9]"
                />
                <h4 className="text-[#07d2e9] text-[.9em] ">OPTIMO</h4>
            </div>
            <div className="lg:order-1 lg:w-3/5 lg:pr-24 lg:pl-24">
                <article className="grid gap-4 ">
                    <div>
                        <h1 className="text-3xl font-semibold">Extensible y personalizado</h1>
                        <p className="text-sm leading-6">La personalización es el <b>conjunto de estrategias y acciones que nos permiten ofrecer una oferta de productos y servicios diferenciados para cada cliente.</b> Por ello, poner el foco en el quién y no en el qué, cediendo el protagonismo de las campañas a los consumidores en vez de a los productos.</p>
                    </div>
                    <div>
                    <Image 
                        src="/img/marketing.webp"
                        alt=""
                        width={1280}
                        height={1280}
                        className="w-full lg:w-5/10 mt- rounded-3xl"
                    />
                    </div>
                </article>
            </div>
        </section>
    )
}