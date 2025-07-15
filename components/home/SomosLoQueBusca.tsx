'use client';
import { useEffect, useState } from "react";
import { BiSolidCoinStack } from "react-icons/bi";
import { PiMoneyDuotone } from "react-icons/pi";
import { FaChartLine } from "react-icons/fa";

const images = [
  "/img/header_img_1.jpg",
  "/img/header_img_2.jpg",
  "/img/header_img_3.jpg",
];

export default function SomosLoQueBusca() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFirstLayer, setShowFirstLayer] = useState(true);
  const [imageA, setImageA] = useState(images[0]);
  const [imageB, setImageB] = useState(images[1]);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % images.length;
      if (showFirstLayer) {
        setImageB(images[nextIndex]); // prepara a camada B
      } else {
        setImageA(images[nextIndex]); // prepara a camada A
      }
      setCurrentIndex(nextIndex);
      setShowFirstLayer(!showFirstLayer); // troca o que está visível
    }, 7000);

    return () => clearInterval(interval);
  }, [currentIndex, showFirstLayer]);

  return (
    <div className="relative h-full w-full overflow-hidden pt-100 z-20">
      {/* Camada A */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
          showFirstLayer ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ backgroundImage: `url(${imageA})` }}
      />

      {/* Camada B */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
          showFirstLayer ? 'opacity-0' : 'opacity-100'
        }`}
        style={{ backgroundImage: `url(${imageB})` }}
      />

      {/* Conteúdo */}
      <div className="relative z-10 text-white">
        

        <main className="px-6 py-10">
          <article className="mb-10 grid lg:justify-center">
            <u className="font-normal text-xl lg:3xl">SOMOS JUSTO LO QUE BUSCAS</u>
            <h1 className="text-5xl font-bold mt-3">Estamos listos para hacer crecer tu negocio</h1>
          </article>

          <div
            className="grid gap-4 lg:flex lg:justify-center"
          >
            <div className="flex flex-col items-center bg-[#132c40] pt-8 pb-8 rounded-3xl hover:scale-110 transition-all duration-500 lg:w-1/5">
              <div className="text-4xl mb-2 grid border-solid border-[3px] border-[red] rounded-[50%] h-18 w-18 justify-center items-center">
                <BiSolidCoinStack className="text-5xl text-[red]"/>
              </div>
              <p className="font-bold">Crecimento del dinero</p>
            </div>

            <div className="flex flex-col items-center bg-[#132c40] pt-8 pb-8 rounded-3xl hover:scale-110 transition-all duration-500 lg:w-1/5">
              <div className="text-4xl mb-2 grid border-solid border-[3px] border-[yellow] rounded-[50%] h-18 w-18 justify-center items-center">
                <PiMoneyDuotone className="text-[yellow]" />
              </div>
              <p className="font-bold">Prestamo industrial</p>
            </div>

            <div className="flex flex-col items-center bg-[#132c40] pt-8 pb-8 rounded-3xl hover:scale-110 transition-all duration-500 lg:w-1/5">
              <div className="text-4xl mb-2 grid border-solid border-[3px] border-[white] rounded-[50%] h-18 w-18 justify-center items-center">
                <FaChartLine />
              </div>
              <p className="font-bold">Bolsa de valores</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
