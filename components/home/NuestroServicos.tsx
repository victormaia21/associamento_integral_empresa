import Image from "next/image";
import Link from "next/link";
import { MdWeb, MdVisibility, MdStore, MdSearch, MdDataUsage, MdShare } from "react-icons/md";

const services = [
  {
    title: "Publicidad Digital",
    href: "/publicidade_digital",
    img: "/img/servicos/pb.webp",
    icon: <MdWeb size={24} />,
  },
  {
    title: "Canales de Vision Web",
    href: "/publicidade_digital",
    img: "/img/servicos/cvw.webp",
    icon: <MdVisibility size={24} />,
  },
  {
    title: "Registro y Comercialización de la marca",
    href: "/publicidade_digital",
    img: "/img/servicos/rgcm.webp",
    icon: <MdStore size={24} />,
  },
  {
    title: "Investigación sobre el plan de negocios",
    href: "/publicidade_digital",
    img: "/img/servicos/ispl.webp",
    icon: <MdSearch size={24} />,
  },
  {
    title: "Visualización de datos a su alcance",
    href: "/publicidade_digital",
    img: "/img/servicos/vda.webp",
    icon: <MdDataUsage size={24} />,
  },
  {
    title: "Marketing de medios sociales",
    href: "/publicidade_digital",
    img: "/img/servicos/mds.webp",
    icon: <MdShare size={24} />,
  },
];

export default function NuestroServicos() {
  return (
    <section className="bg-gradient-to-b from-[#0b1726] to-[#0e1e36] px-6 sm:px-12 pt-12 pb-20 min-h-screen">
      <div className="pb-8">
        <h1 className="text-white text-3xl text-center font-bold">
          Nuestros Servicios
        </h1>
        <p className="text-gray-300 text-center max-w-xl mx-auto text-sm mt-2">
          Conoce los servicios que ofrecemos para impulsar tu negocio al siguiente nivel.
        </p>
      </div>

      <div
        className="grid justify-center gap-12 max-w-7xl mx-auto"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(20rem, 1fr))" }}
      >
        {services.map(({ title, href, img, icon }, i) => (
          <div
            key={i}
            className="group flex flex-col justify-between bg-[#101c34] rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 h-[320px]"
          >
            <p className="flex items-center justify-center gap-2 text-center text-xl font-semibold text-[#07d2e9] group-hover:underline transition-all duration-300">
              {icon}
              {title}
            </p>

            <Link href={href} className="block mt-4 rounded-lg overflow-hidden cursor-pointer">
              <div className="w-full h-48 relative">
                <Image
                  src={img}
                  alt={title}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="100vw"
                  priority
                />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
