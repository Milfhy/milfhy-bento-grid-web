import React from "react";
import './About.css'
import { MdLightMode } from "react-icons/md";
import { RiStackFill } from "react-icons/ri";
import { BiLogoFigma } from "react-icons/bi";
import { RiJavaLine } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoPython } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import Logo from "../256.png"
import { IoLocationSharp } from "react-icons/io5";
import { MdLanguage } from "react-icons/md";
import { SiPaloaltosoftware } from "react-icons/si";
import { SiAdobeindesign } from "react-icons/si";
import { FaTelegramPlane } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillProject } from "react-icons/ai";
import { BsGridFill } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io";
import { FaSquareXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaStar } from "react-icons/fa6";
import { GiTargeted } from "react-icons/gi";
import { FaBookBookmark } from "react-icons/fa6";
import { PiFrameCornersFill } from "react-icons/pi";
import { GrMagic } from "react-icons/gr";
import { MdHandshake } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { AiFillSchedule } from "react-icons/ai";
import { FaCode } from "react-icons/fa6";
import Serv from "../components/Serv"
import Clie from "../components/Client"
import Gall from "../components/Gall"
import { BsFillPeopleFill } from "react-icons/bs";
import { GiFallingStar } from "react-icons/gi";
import { IoDownloadSharp } from "react-icons/io5";
import Testi from "../components/Testi"
function About() {

    return (
   
    <div class="grid-container">
        <div class="grid-item Profile">
        <div class="container grid grid-cols-4 grid-rows-3 gap-4 p-2">
        <div class="flex items-center p-2 col-span-1 row-span-3 rounded-lg">
            <img src={Logo} class="rounded-lg bg-white"  size="50px" style={{marginTop:"-60px"}} />
        </div>
        <div class="flex items-center p-1 col-span-3 row-span-1 rounded-lg bg-zinc-800">
            <GoDotFill  size="25px" color="green" />
            <span>Availabe To Work</span>   
        </div>
        <div class="flex items-center h-1 col-span-3 row-span-1 ">
            <span style={{fontSize:"30px"}}>Milfhy Studio</span>   
        </div>
        <div class="flex items-center col-span-3 row-span-1 " style={{marginTop:"-100px"}}>
            <span>We Are Developer</span>   
        </div>
        </div>
        <div class="container grid grid-cols-4 grid-rows-2 gap-4 bg-zinc-800 rounded-lg" style={{marginTop:"-50px"}}>
        <div class="flex items-center p-1 col-span-2 row-span-1 rounded-lg ">
            <IoLocationSharp  size="30px" color="Magenta" class="bg-zinc-700 rounded-lg" />
            <span>Indonesia</span>   
        </div>
        <div class="flex items-center p-1 col-span-2 row-span-1 rounded-lg ">
            <MdLanguage  size="30px" color="Magenta" class="bg-zinc-700 rounded-lg" />
            <span>English & Indonesia</span>   
        </div>
        <div class="flex items-center p-1 col-span-2 row-span-1 rounded-lg">
            <SiPaloaltosoftware  size="30px" color="Magenta" class="bg-zinc-700 rounded-lg" />
            <span>Software Engineer</span>   
        </div>
        <div class="flex items-center p-1 col-span-2 row-span-1 rounded-lg ">
            <SiAdobeindesign  size="30px" color="Magenta" class="bg-zinc-700 rounded-lg" />
            <span>Web & Mobile Design</span>   
        </div>
        </div>
        <div class="container grid grid-cols-4 grid-rows-1 gap-4" style={{marginTop:"40px"}}>
        <a target="_blank" rel="noopener noreferrer" href="https://telegram.org/" class="flex items-center justify-center p-1 col-span-2 row-span-1 rounded-lg bg-zinc-800">
            <FaTelegramPlane  size="30px" color="Magenta" />
            <span>Telegram</span>   
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://whatsapp.com/" class="flex items-center justify-center p-1 col-span-2 row-span-1 rounded-lg bg-zinc-800">
            <IoLogoWhatsapp  size="30px" color="Magenta" />
            <span>WhatsApp</span>   
        </a>
        </div>
        </div>
        <div class="grid-item Stack">
        <div class="container">
        <div class="flex items-center justify-center p-2">
            <RiStackFill size="28px" color="magenta" />
            <span style={{fontSize:"15px", fontWeight:"normal"}}>Our Stacks</span>
        </div>
        <p style={{fontSize:"20px", marginTop:"-20px", fontWeight:"bold"}}>Tech Expertise</p>
        </div>
        <div class="container grid grid-cols-4 gap-4">
        <div class="flex items-center  p-2 col-span-2 rounded-lg bg-zinc-800">
            <BiLogoFigma class="rounded-lg bg-zinc-700 "  size="40px" style={{color: "rgb(153, 153, 153)"}} />
            <span style={{fontSize:"15px", fontWeight:"normal"}}>Figma</span>
        </div>
        <div class="flex items-center  p-2 col-span-2 rounded-lg bg-zinc-800">
            <RiJavaLine class="rounded-lg bg-zinc-700 "  size="40px" style={{color: "rgb(153, 153, 153)"}} />
            <span style={{fontSize:"15px", fontWeight:"normal"}}>Java</span>
        </div>
        </div>
        <div class="container grid grid-cols-4 gap-4">
        <div class="flex items-center  p-2 col-span-2 rounded-lg bg-zinc-800">
            <IoLogoJavascript class="rounded-lg bg-zinc-700 "  size="40px" style={{color: "rgb(153, 153, 153)"}} />
            <span style={{fontSize:"15px", fontWeight:"normal"}}>Javascript</span>
        </div>
        <div class="flex items-center  p-2 col-span-2 rounded-lg bg-zinc-800">
            <IoLogoPython class="rounded-lg bg-zinc-700 "  size="40px" style={{color: "rgb(153, 153, 153)"}} />
            <span style={{fontSize:"15px", fontWeight:"normal"}}>Python</span>
        </div>
        </div>
        </div>
        <div class="grid-item Gallery">
        <div class="container">
        <div class="flex items-center justify-center p-2">
            <AiFillProject size="28px" color="magenta" />
            <span style={{fontSize:"15px", fontWeight:"normal"}}>Project</span>
        </div>
        <p style={{fontSize:"20px", marginTop:"-20px", fontWeight:"bold"}}>Work Gallery</p>
        </div>
        <Gall />
        <a href="/Work">
        <div class="container grid grid-cols-4 gap-4" style={{marginTop:"-50px"}}>
        <div class="flex items-center justify-center p-1 col-span-4 rounded-lg " style={{background:"magenta"}}>
            <span style={{fontSize:"15px", fontWeight:"normal"}}>View Work</span>
        </div>
        </div></a>
        </div>
        <div class="grid-item Testimoni">
        <div class="container">
        <div class="flex items-center justify-center p-2">
            <RiStackFill size="28px" color="magenta" />
            <span style={{fontSize:"15px", fontWeight:"normal"}}>Testimonials</span>
        </div>
        <p style={{fontSize:"20px", marginTop:"-20px", fontWeight:"bold"}}>Rave Reviews Showcase</p>
        </div>
            <Testi />
        </div>
        <div class="grid-item Workflow">
        <div class="container">
        <div class="flex items-center justify-center p-2">
            <FaStar size="28px" color="magenta" />
            <span style={{fontSize:"15px", fontWeight:"normal"}}>Work Process</span>
        </div>
        <p style={{fontSize:"20px", marginTop:"-20px", fontWeight:"bold"}}>Workflow Highlights</p>
        </div>
        <div class="container grid grid-cols-2 gap-0">
        <div class="flex items-center  p-2 col-span-2 rounded-lg bg-zinc-800">
            <GiTargeted  class="rounded-lg bg-zinc-700 "  size="40px" style={{color: "rgb(153, 153, 153)"}} />
            <span style={{fontSize:"15px", fontWeight:"normal"}}>Goal & Objectives</span>
        </div>
        <div class="flex items-center  p-2 col-span-2 rounded-lg bg-zinc-800">
            <FaBookBookmark class="rounded-lg bg-zinc-700 "  size="40px" style={{color: "rgb(153, 153, 153)"}} />
            <span style={{fontSize:"15px", fontWeight:"normal"}}>Research</span>
        </div>
        <div class="flex items-center  p-2 col-span-2 rounded-lg bg-zinc-800">
            <PiFrameCornersFill  class="rounded-lg bg-zinc-700 "  size="40px" style={{color: "rgb(153, 153, 153)"}} />
            <span style={{fontSize:"15px", fontWeight:"normal"}}>Prototyping</span>
        </div>
        <div class="flex items-center  p-2 col-span-2 rounded-lg bg-zinc-800">
            <FaCode class="rounded-lg bg-zinc-700 "  size="40px" style={{color: "rgb(153, 153, 153)"}} />
            <span style={{fontSize:"15px", fontWeight:"normal"}}>Coding</span>
        </div>
        <div class="flex items-center  p-2 col-span-2 rounded-lg bg-zinc-800">
            <GrMagic  class="rounded-lg bg-zinc-700 "  size="40px" style={{color: "rgb(153, 153, 153)"}} />
            <span style={{fontSize:"15px", fontWeight:"normal"}}>Finalize</span>
        </div>
        </div>
        </div>
        <div class="grid-item Project">
        <div class="container grid grid-cols-1 gap-0">
        <div class="flex items-center justify-center col-span-1">
            <span style={{fontSize:"20px", margin:"-10px"}}>Project</span>
        </div>
        <div class="flex items-center justify-center p-2">
        <p style={{fontSize:"50px", marginTop:"-20px", fontWeight:"bold"}}>20</p><p style={{fontSize:"50px", marginTop:"-20px", fontWeight:"bold", color:"magenta"}}>+</p>
        </div>
        <div class="flex items-center justify-center col-span-1 rounded-lg bg-zinc-800"style={{marginTop:"-20px"}}>
        <AiFillProject  size="20px" color="magenta" />
        <span style={{fontSize:"20px"}}>Done</span>
        </div>
        </div>
        </div>
        <div class="grid-item HClient">
        <div class="container grid grid-cols-1 gap-0">
        <div class="flex items-center justify-center col-span-1">
            <span style={{fontSize:"20px", margin:"-10px"}}>Client</span>
        </div>
        <div class="flex items-center justify-center p-2">
        <p style={{fontSize:"50px", marginTop:"-20px", fontWeight:"bold"}}>10</p><p style={{fontSize:"50px", marginTop:"-20px", fontWeight:"bold", color:"magenta"}}>+</p>
        </div>
        <div class="flex items-center justify-center col-span-1 rounded-lg bg-zinc-800"style={{marginTop:"-20px"}}>
        <BsFillPeopleFill  size="20px" color="magenta" />
        <span style={{fontSize:"20px"}}>Work</span>
        </div>
        </div>
        </div>
        <div class="grid-item Year">
        <div class="container grid grid-cols-1 gap-0">
        <div class="flex items-center justify-center col-span-1">
            <span style={{fontSize:"20px", margin:"-10px"}}>Experience</span>
        </div>
        <div class="flex items-center justify-center p-2">
        <p style={{fontSize:"50px", marginTop:"-20px", fontWeight:"bold"}}>2</p><p style={{fontSize:"50px", marginTop:"-20px", fontWeight:"bold", color:"magenta"}}>+</p>
        </div>
        <div class="flex items-center justify-center col-span-1 rounded-lg bg-zinc-800"style={{marginTop:"-20px"}}>
        <GiFallingStar   size="20px" color="magenta" />
        <span style={{fontSize:"20px"}}>Year</span>
        </div>
        </div>
        </div>
        <div class="grid-item Resume">
        <div class="container grid grid-cols-1 gap-0">
        <div class="flex items-center justify-center col-span-1">
            <span style={{fontSize:"20px", margin:"-10px"}}>Resume</span>
        </div>
        <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com">
        <div class="flex items-center justify-center col-span-1 rounded-lg bg-zinc-800" style={{marginTop:"20px"}}>
        <IoDownloadSharp    size="50px" color="magenta" />
        </div>
        </a>
        </div>
        </div>
        <div class="grid-item Service">
        <div class="container">
        <div class="flex items-center justify-center p-2">
            <BsGridFill size="28px" color="magenta" />
            <span style={{fontSize:"15px", fontWeight:"normal"}}>Services</span>
        </div>
        <p style={{fontSize:"20px", marginTop:"-20px", fontWeight:"bold"}}>Solution Suite</p>
        </div>
        <Serv />
        <a href="/Service">
        <div class="container grid grid-cols-4 gap-4" >
        <div class="flex items-center justify-center p-1 col-span-4 rounded-lg " style={{background:"magenta", marginTop:"-40px"}}>
            <span style={{fontSize:"15px", fontWeight:"normal"}}>View All Services</span>
        </div>
        </div></a>
        </div>
        <div class="grid-item Client">
        <div class="container">
        <div class="flex items-center justify-center p-2">
            <BsGridFill size="28px" color="magenta" />
            <span style={{fontSize:"15px", fontWeight:"normal"}}>Our Clinets</span>
        </div>
        <p style={{fontSize:"20px", marginTop:"-20px", fontWeight:"bold"}}>Satisfied Partners</p>
        </div>
       <Clie />
        </div>
        <div class="grid-item Online">
        <div class="container">
        <div class="flex items-center justify-center p-2">
            <MdLightMode size="28px" color="magenta" />
            <span style={{fontSize:"15px", fontWeight:"normal"}}>Follow Us</span>
        </div>
        <p style={{fontSize:"20px", marginTop:"10px", fontWeight:"bold"}}>Online Presence</p>
        </div>
        <div class="container grid grid-cols-2 grid-rows-3 gap-4" style={{marginTop:"10px"}}>
        <a target="_blank" rel="noopener noreferrer" href="https://x.com/" class="flex items-center  p-2 col-span-2 row-span-1 rounded-lg bg-zinc-800">    

            <FaSquareXTwitter class="rounded-lg bg-zinc-700 "  size="40px" style={{color: "rgb(153, 153, 153)"}} />
            <span style={{fontSize:"15px", fontWeight:"normal"}}>Milfhy Studio</span>
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/" class="flex items-center  p-2 col-span-2 row-span-1 rounded-lg bg-zinc-800">  

            <RiInstagramFill class="rounded-lg bg-zinc-700 "  size="40px" style={{color: "rgb(153, 153, 153)"}} />
            <span style={{fontSize:"15px", fontWeight:"normal"}}>Milfhy Studio</span>
        </a>
     
        <a target="_blank" rel="noopener noreferrer" href="https://youtube.com/@milfhy" class="flex items-center  p-2 col-span-2 row-span-1 rounded-lg bg-zinc-800">
            <IoLogoYoutube class="rounded-lg bg-zinc-700 "  size="40px" style={{color: "rgb(153, 153, 153)"}} />
            <span style={{fontSize:"15px", fontWeight:"normal"}}>Milfhy Studio</span></a>
        </div>

        </div>
        <div class="grid-item Work">
        <div class="container">
        <div class="flex items-center justify-center p-2">
            <MdHandshake  size="50px" color="magenta" class="bg-zinc-800 rounded-lg"/>
        </div>
        <p style={{fontSize:"30px", marginTop:"10px", fontWeight:"bold"}}>Let's Work Together</p>
        <p style={{fontSize:"20px", marginTop:"10px", fontWeight:"bold"}}>Let's Make Magic Happen Together!</p>
        </div>
        <div class="container grid grid-cols-2 grid-rows-3 gap-4" style={{marginTop:"10px"}}>
        <a target="_blank" rel="noopener noreferrer" href="https://gmail.com/" class="flex items-center justify-center  p-2 col-span-2 row-span-1 rounded-lg bg-zinc-800">    

            <MdEmail color="magenta" size="40px"  />
            <span style={{fontSize:"15px", fontWeight:"normal"}}>Email Us</span>
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/" class="flex items-center justify-center  p-2 col-span-2 row-span-1 rounded-lg bg-zinc-800">  

            <AiFillSchedule  color="magenta"  size="40px"  />
            <span style={{fontSize:"15px", fontWeight:"normal"}}>Schedule Call</span>
        </a>
        </div>
        </div>

    </div>
  );
}



export default About;
