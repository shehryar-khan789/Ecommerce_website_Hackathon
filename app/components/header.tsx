import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { VscAccount } from "react-icons/vsc";
import { SheetSide } from "./sheet";
import { NavigationMenuDemo } from "./navigationmenu";

export default function Header(){
    return(
        <header className="w-full h-[60px] bg-white flex justify-between items-center">
            {/*left*/}
            <div className="flex justify-center items-center">
            <SheetSide/>
                <h1 className="text-xl sm:text-3xl font-bold pl-2 sm:ml-20">SHOP.CO</h1>
            </div>
            {/*navbar*/}
            <ul className="hidden md:block">
                <li className="space-x-5 mr-20 flex justify-center items-center">
                    <Link href={""}> <NavigationMenuDemo/> </Link>
                    <Link href={""}>On Sale</Link>
                    <Link href={""}>New Arrivals</Link>
                    <Link href={""}>Brands</Link>
                </li>
            </ul>
            <div className="hidden md:block">
                <div className="flex justify-start items-center w-[500px] h-[40px] rounded-[62px] bg-[#F0F0F0]">
                < FiSearch className="text-xl ml-2 text-slate-400"/>
                <input placeholder="search for products..."className="w-[full] h-[full] rounded-[62px] outline-none ml-2 bg-[#F0F0F0] "></input>
                </div>
                </div>

                <div className="flex items-center mr-10 gap-x-7">
                 {/*cart*/} 
                 < FiSearch className=" md:hidden text-xl ml-2 text-slate-400"/>
                 <AiOutlineShoppingCart className="text-2xl " />
                 {/*account*/}
                 <VscAccount className="text-2xl "/>
                 </div>
        </header>
    )
}