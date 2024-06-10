import Marquee from "react-fast-marquee";
import { AiFillTikTok } from "react-icons/ai";
import { FaSquarePinterest } from "react-icons/fa6";
import { FaSnapchatSquare } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaSquareXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

function Client() {
    return ( 
        <div class="container">
        <Marquee direction="right" style={{marginTop:"-40px"}}>
        <div class="container grid grid-cols-12 grid-rows-1 gap-4">
        <div class="flex items-center p-1 col-span-3 row-span-1 rounded-lg bg-zinc-800">
            <FaFacebookSquare  size="30px" color="rgb(153 153 153)" />
            <span>Facebook</span>   
        </div>
        <div class="flex items-center p-1 col-span-3 row-span-1 rounded-lg bg-zinc-800">
            <IoLogoYoutube  size="30px" color="rgb(153 153 153)" />
            <span>Youtube</span>   
        </div>
        <div class="flex items-center p-1 col-span-3 row-span-1 rounded-lg bg-zinc-800">
            <FaSquareXTwitter  size="30px" color="rgb(153 153 153)" />
            <span>Twitter</span>   
        </div>
        <div class="flex items-center p-1 col-span-3 row-span-1 rounded-lg bg-zinc-800">
            <AiFillTikTok  size="30px" color="rgb(153 153 153)" />
            <span>Tiktok</span>   
        </div>
        </div>
        </Marquee>
        <Marquee  style={{marginTop:"-50px"}}>
        <div class="container grid grid-cols-12 grid-rows-1 gap-4">
        <div class="flex items-center p-1 col-span-3 row-span-1 rounded-lg bg-zinc-800">
            <RiInstagramFill size="30px" color="rgb(153 153 153)" />
            <span>Instagram</span>   
        </div>
        <div class="flex items-center p-1 col-span-3 row-span-1 rounded-lg bg-zinc-800">
            <BsDiscord size="30px" color="rgb(153 153 153)" />
            <span>Discord</span>   
        </div>
        <div class="flex items-center p-1 col-span-3 row-span-1 rounded-lg bg-zinc-800">
            <FaSnapchatSquare  size="30px" color="rgb(153 153 153)" />
            <span>Snapchat</span>   
        </div>
        <div class="flex items-center p-1 col-span-3 row-span-1 rounded-lg bg-zinc-800">
            <FaSquarePinterest  size="30px" color="rgb(153 153 153)" />
            <span>Pinterest</span>   
        </div>
        </div>
        </Marquee>
        </div>
        
    );
}

export default Client;