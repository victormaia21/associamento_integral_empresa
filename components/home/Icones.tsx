import { FaCode } from "react-icons/fa";
import { FaBug } from "react-icons/fa";
import { IoIosGitBranch } from "react-icons/io";
import { GiElectric } from "react-icons/gi";

export default function Icones() {
    return (
        <section className="p-10 bg-gradient-to-tl bg-gradient-from-br from-[#4f7e8c] to-[#2a3442] grid justify-center items-center gap-4 border-b-[#c59855] border-b-[4px] border-solid lg:flex lg:justify-evenly">
            <div className="flex flex-col justify-center items-center gap-4">
                <div className="bg-[#33b4db] rounded-full p-4 hover:scale-125 transition-all duration-300">
                    <FaCode className="text-4xl text-white"/>
                </div>
                <h2 className="text-white font-bold text-lg">Sentido Inteligente</h2>
            </div>

            <div className="flex flex-col justify-center items-center gap-4">
                <div className="bg-[#daa958] rounded-full p-4 hover:scale-125 transition-all duration-300">
                    <FaBug className="text-4xl text-[#b7fefb]"/>
                </div>
                <h2 className="text-white font-bold text-lg">Depurado</h2>
            </div>

            <div className="flex flex-col justify-center items-center gap-4">
                <div className="bg-white rounded-full p-4 hover:scale-125 transition-all duration-300">
                    <IoIosGitBranch className="text-4xl text-[#daa85b]"/>
                </div>
                <h2 className="text-white font-bold text-lg">Git Incorporado</h2>
            </div>

            <div className="flex flex-col justify-center items-center gap-4">
                <div className="bg-[#0b1627] rounded-full p-4 hover:scale-125 transition-all duration-300">
                    <GiElectric className="text-4xl text-[#b6fefa]"/>
                </div>
                <h2 className="text-white font-bold text-lg">Extensions</h2>
            </div>
        </section>
    )
}