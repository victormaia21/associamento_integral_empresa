'use client';

import Image from "next/image";
import Link from "next/link";
import { MdMenu } from "react-icons/md";
import { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

export default function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSubmenuMobile, setOpenSubmenuMobile] = useState(false);
  const [openSubmenuDesktop, setOpenSubmenuDesktop] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      setShowHeader(true); // manter header visível se menu mobile aberto
      return;
    }

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, menuOpen]);

  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed top-0 left-0 w-full transition-transform duration-300 z-50 ${
          showHeader ? "translate-y-0" : "-translate-y-full"
        } bg-black/70 backdrop-blur-md`}
      >
        <div className="flex items-center justify-between h-20 px-6 max-w-7xl mx-auto">
          <Link href="/" aria-label="Ir para a página inicial">
            <Image src="/img/logo.png" alt="Logo" width={120} height={120} />
          </Link>

          {/* Ícone abrir menu mobile */}
          <MdMenu
            size={32}
            className="cursor-pointer text-white lg:hidden"
            aria-label="Abrir menu"
            onClick={() => setMenuOpen(true)}
          />

          {/* Menu desktop */}
          <nav className="hidden lg:flex items-center gap-6 text-white font-semibold select-none relative">
            <Link
              href="/"
              className="px-5 py-2 rounded-lg shadow-lg shadow-[#ccc] hover:bg-white hover:text-black transition-colors duration-300"
            >
              INICIO
            </Link>
            <Link
              href="/"
              className="px-5 py-2 rounded-lg shadow-lg shadow-[#ccc] hover:bg-white hover:text-black transition-colors duration-300"
            >
              NOSOTROS
            </Link>

            <div
  className="relative"
  onMouseEnter={() => setOpenSubmenuDesktop(true)}
  onMouseLeave={() => setOpenSubmenuDesktop(false)}
>
  <button
    className="flex items-center gap-1 px-5 py-2 rounded-lg shadow-lg shadow-[#ccc] hover:bg-white hover:text-black transition-colors duration-300 focus:outline-none"
    aria-haspopup="true"
    aria-expanded={openSubmenuDesktop}
  >
    SERVICIOS <FaChevronDown />
  </button>

  {/* Submenu desktop */}
  <ul
    className={`absolute left-0 top-8 mt-2 w-60 bg-black/75 bg-opacity-90 rounded-md shadow-xl 
    transition-all duration-300 ease-in-out overflow-hidden
    ${openSubmenuDesktop ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
  >
    {[
      "Publicidad Digital",
      "Canales de visión de web",
      "Registro y comercialización de la marca",
      "Investigación sobre el plan de negocio",
      "Visualización de datos a su alcance",
      "Marketing de medios sociales",
    ].map((item, i) => (
      <li key={i}>
        <Link
          href="/"
          className="block px-4 py-3 text-white hover:bg-white hover:text-black transition-colors duration-200"
        >
          {item}
        </Link>
      </li>
    ))}
  </ul>
</div>


            <Link
              href="/"
              className="px-5 py-2 rounded-lg shadow-lg shadow-[#ccc] hover:bg-white hover:text-black transition-colors duration-300"
            >
              CONTACTO
            </Link>
          </nav>
        </div>
      </header>

      {/* MENU MOBILE */}
      <nav
        className={`fixed top-0 left-0 w-full h-full z-40 text-white bg-gradient-to-b from-black/95 to-[#101740] backdrop-blur-md transition-transform duration-500 ${
          menuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
        aria-label="Menu mobile"
      >
        {/* Topo do menu mobile */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/20">
          <Link href="/" aria-label="Ir para a página inicial">
            <Image src="/img/logo.png" alt="Logo" width={100} height={100} />
          </Link>
          <button
            aria-label="Fechar menu"
            className="text-white hover:text-red-400 transition-colors duration-300"
            onClick={() => setMenuOpen(false)}
          >
            <IoMdClose size={32} />
          </button>
        </div>

        <ul className="flex flex-col mt-6 space-y-2 px-6">
          <li>
            <Link
              href="/"
              className="block uppercase tracking-wide font-semibold text-sm px-4 py-3 rounded-md hover:bg-white/10 transition-colors duration-300"
              onClick={() => setMenuOpen(false)}
            >
              Inicio
            </Link>
          </li>

          <li>
            <Link
              href="/"
              className="block uppercase tracking-wide font-semibold text-sm px-4 py-3 rounded-md hover:bg-white/10 transition-colors duration-300"
              onClick={() => setMenuOpen(false)}
            >
              Nosotros
            </Link>
          </li>

          {/* Submenu mobile */}
          <li>
            <button
              onClick={() => setOpenSubmenuMobile(!openSubmenuMobile)}
              className="w-full flex justify-between items-center uppercase tracking-wide font-semibold text-sm px-4 py-3 rounded-md hover:bg-white/10 transition-colors duration-300"
              aria-expanded={openSubmenuMobile}
              aria-controls="submenu-mobile"
            >
              Servicios
              <FaChevronDown
                className={`transition-transform duration-300 ${
                  openSubmenuMobile ? "rotate-180" : ""
                }`}
              />
            </button>

            <ul
              id="submenu-mobile"
              className={`overflow-hidden transition-max-height duration-500 ease-in-out mt-2 pl-6 flex flex-col space-y-1 ${
                openSubmenuMobile ? "max-h-[600px]" : "max-h-0"
              }`}
            >
              {[
                "Publicidad Digital",
                "Canales de visión de web",
                "Registro y comercialización de la marca",
                "Investigación sobre el plan de negocio",
                "Visualización de datos a su alcance",
                "Marketing de medios sociales",
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    href="/"
                    className="block text-white text-sm px-4 py-2 rounded-md hover:bg-white/20 transition-colors duration-300"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          <li>
            <Link
              href="/"
              className="block uppercase tracking-wide font-semibold text-sm px-4 py-3 rounded-md hover:bg-white/10 transition-colors duration-300"
              onClick={() => setMenuOpen(false)}
            >
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
