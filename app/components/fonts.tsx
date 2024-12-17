//import fonts from google foonts
import {Playfair_Display,Cinzel,Bodoni_Moda,Prata,Montserrat} from "next/font/google"
const Playfair = Playfair_Display({subsets:["latin"]});
const Cin = Cinzel ({subsets:["latin"]});
const Bodoni =Bodoni_Moda ({subsets:["latin"]});
const Pra = Prata ({subsets:["latin"],weight:"400"});

const Mon = Montserrat({subsets:["latin"]});


export default function Fonts(){
    return(
        <div className="bg-black w-full h-[122px] flex justify-center space-x-5 md:justify-between items-center px-6 flex-wrap">
            <h1 className={`${Playfair.className} text-white text-2xl md:text-4xl`}>VERSACE</h1>
            <h1 className={`${Cin.className} text-white text-2xl md:text-4xl`}>ZARA</h1>
            <h1 className={`${Bodoni.className} text-white text-2xl md:text-4xl`}>GUCCI</h1>
            <h1 className={`${Pra.className} text-white text-2xl md:text-4xl`}>PRADA</h1>
            <h1 className={`${Mon.className} text-white text-2xl md:text-4xl`}>Calvin Klein</h1>
        </div>
    )
}

