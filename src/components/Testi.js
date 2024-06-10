import Marquee from "react-fast-marquee";
import Posm from "../posm.png"
import Ashley from "../Ashley.png"
import Su from "../Su.png"

function Testi() {
    return ( 
        <div class="container">
        <Marquee direction="left" style={{marginTop:"-40px"}}>
        <div class="container grid grid-cols-12 grid-rows-1 gap-4">
        <div class="flex items-center p-1 col-span-4 row-span-1 ">
        <img src={Su} class="object-cover h-48 w-96"></img>
        </div>
        <div class="flex items-center p-1 col-span-4 row-span-1 ">
        <img src={Posm} class="object-cover h-48 w-96"></img>
        </div>
        <div class="flex items-center p-1 col-span-4 row-span-1">
        <img src={Ashley} class="object-cover h-48 w-96"></img>
        </div>
        </div>
        </Marquee>
        <Marquee direction="right" style={{marginTop:"-70px", marginBottom:"-30px"}}>
        <div class="container grid grid-cols-12 grid-rows-1 gap-4">
        <div class="flex items-center p-1 col-span-4 row-span-1 ">
        <img src={Su} class="object-cover h-48 w-96"></img>
        </div>
        <div class="flex items-center p-1 col-span-4 row-span-1 ">
        <img src={Posm} class="object-cover h-48 w-96"></img>
        </div>
        <div class="flex items-center p-1 col-span-4 row-span-1">
        <img src={Ashley} class="object-cover h-48 w-96"></img>
        </div>
        </div>
        </Marquee>
        </div>
        
    );
}

export default Testi;