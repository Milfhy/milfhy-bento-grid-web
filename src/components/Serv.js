import Marquee from "react-fast-marquee";
import { FaCode } from "react-icons/fa6";
import { FaMobile } from "react-icons/fa";
import { FaDesktop } from "react-icons/fa6";
import { MdLanguage } from "react-icons/md";
import { SiAdobeindesign } from "react-icons/si";
import { IoSearchCircleSharp } from "react-icons/io5";
import { BiLogoFigma } from "react-icons/bi";
function Serv() {
    return ( 
        <div class="container">
        <Marquee  direction="right" style={{marginTop:"-40px"}}>
        <div class="container grid grid-cols-12 grid-rows-1 gap-4">
        <div class="flex items-center p-1 col-span-3 row-span-1 rounded-lg bg-zinc-800">
            <FaCode  size="30px" color="rgb(153 153 153)" />
            <span>Web Development</span>   
        </div>
        <div class="flex items-center p-1 col-span-3 row-span-1 rounded-lg bg-zinc-800">
            <MdLanguage  size="30px" color="rgb(153 153 153)" />
            <span>Web Design</span>   
        </div>
        <div class="flex items-center p-1 col-span-3 row-span-1 rounded-lg bg-zinc-800">
            <FaMobile  size="30px" color="rgb(153 153 153)" />
            <span>Mobile App</span>   
        </div>
        <div class="flex items-center p-1 col-span-3 row-span-1 rounded-lg bg-zinc-800">
            <FaDesktop  size="30px" color="rgb(153 153 153)" />
            <span>Desktop App</span>   
        </div>
        </div>
        </Marquee>
        <Marquee style={{marginTop:"-50px"}}>
        <div class="container grid grid-cols-12 grid-rows-1 gap-4">
       <div class="flex items-center p-1 col-span-3 row-span-1 rounded-lg bg-zinc-800">
            <FaMobile  size="30px" color="rgb(153 153 153)" />
            <span>Mobile Design</span>   
        </div>
        <div class="flex items-center p-1 col-span-3 row-span-1 rounded-lg bg-zinc-800">
            <SiAdobeindesign   size="30px" color="rgb(153 153 153)" />
            <span>Desktop Design</span>   
        </div>
        <div class="flex items-center p-1 col-span-3 row-span-1 rounded-lg bg-zinc-800">
            <IoSearchCircleSharp  size="30px" color="rgb(153 153 153)" />
            <span>Seo Optimazion</span>   
        </div>
        <div class="flex items-center p-1 col-span-3 row-span-1 rounded-lg bg-zinc-800">
            <BiLogoFigma  size="30px" color="rgb(153 153 153)" />
            <span>Prototype</span>   
        </div>
        </div>
        </Marquee>
        </div>
        
    );
}

export default Serv;