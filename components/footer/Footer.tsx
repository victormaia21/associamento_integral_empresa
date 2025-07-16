import { MdEmail } from "react-icons/md";
import { FaGlobe } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXing } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-[#101740] z-20 text-white">
            
            <div className="bg-[url('/img/footer.jpg')] lg:bg-none bg-cover p-8 relative lg:flex lg:p-0">
                <div className="absolute bg-[rgba(0,0,0,.5)] w-full h-full top-0 left-0 z-0"></div>

                <div className="relative z-10 text-white lg:flex lg:w-11/15 lg:p-8">
                    <div className="lg:flex lg:flex-col lg:justify-center lg:w-1/2">
                        <div>
                            <h4>CONTACT CON NOSOTROS</h4>
                            <p>Dirección: Av. Nro. 10 – H4  Urb. Larapa, San Jerónimo – Cusco, Perú</p>
                            <p>WhatsApp: +51 953 776 302</p>
                        </div>
                        <div className="mt-4">
                            <p className="flex items-center gap-1"><MdEmail /> Email: marioriosmayorga17@gmail.com</p>
                            <p className="flex items-center gap-1"><FaGlobe /> https://marioriosmayorga.com</p>
                        </div>
                    </div>
                    <div className="flex gap-4 text-2xl mt-12 justify-between lg:items-center lg:w-1/2 lg:justify-around">
                        <Link href=""><FaFacebookF /></Link>
                        <Link href=""><FaXTwitter /></Link>
                        <Link href=""><FaInstagram /></Link>
                        <Link href=""><FaLinkedin /></Link>
                        <Link href=""><FaYoutube /></Link>
                        <Link href=""><FaXing /></Link>
                     </div>
                </div>
                <div className="hidden lg:block lg:w-4/15">
                    <Image
                        src="/img/footer.jpg"
                        width={1280}
                        height={1280}
                        alt=""
                        className="w-full h-full"
                    />
                </div>
            </div>


            <div className="pt-6 pb-6 text-center text-sm">
                <p>El mundo es un negocio. y una selva. – Jordan Belfort</p>
            </div>
        </footer>
    )
}