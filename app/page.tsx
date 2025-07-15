import ElNegocio from "@/components/home/ElNegocio";
import SomosLoQueBusca from "@/components/home/SomosLoQueBusca";
import NuestroServicos from "@/components/home/NuestroServicos";
import ExtensivePersonalizado from "@/components/home/ExtensibePersonalizado";
import Icones from "@/components/home/Icones";

export default function Home() {
  return (
    <>
      <div className="z-0 w-full">
        <SomosLoQueBusca />
        <ElNegocio />
        <NuestroServicos />
        <ExtensivePersonalizado />
        <Icones />
        
      </div>
    </>
  );
}
