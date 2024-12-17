"use client"
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { LuPlus } from "react-icons/lu";
import { FaMinus } from "react-icons/fa6";
import { IoCheckmarkOutline } from "react-icons/io5";

let star=[<FaStar/>,<FaStar/>,<FaStar/>,<FaStar/>,]

interface Iproducts{
    title:string;
    price:string;
    id:number
    rating?:string;
    old_price?:string;
    img_url:string;
    img1:string;
    img2:string;
    img3:string;
}

let product:Iproducts[]= [{
    title:"VERTICAL STRIPED SHIRT",
    id:1,
    price:"$212",
    old_price:"$232",
    img_url:"/product7.png",
    img1:"/detail11.png",
    img2:"/detail5.png",
    img3:"/detail6.png",

},

{
    title:"COURAGE GRAPHIC T-SHIRT",
    id:2,
    price:"$145",
    img_url:"/product8.png",
    img1:"/detail11.png",
    img2:"/detail5.png",
    img3:"/detail6.png",

}, 

{
    title:"LOOSE FIT BERMUDA SHORTS",
    id:3,
    price:"$80",
    img_url:"/product9.png",
    img1:"/detail11.png",
    img2:"/detail5.png",
    img3:"/detail6.png",

},   
{
    title:"FADED SKINNY JEANS",
    id:4,
    price:"$210",
    img_url:"/product10.png",
    img1:"/detail11.png",
    img2:"/detail5.png",
    img3:"/detail6.png",

},   
    ]









export default function product_deatail(){
    const params = useParams();
    const id = params.id // dunamic id is sey milegey
    const items = product.find((item)=>item.id === Number (id))
    if(!items){
        return <h1>product no found</h1>
    }

    return(
        <div className="flex flex-col md:flex-row justify-center sm:justify-center sm:mt-10 p-5 sm:p-0">
            {/*left div use for images*/}
            <div className=" flex  sm:flex-col justify-between items-center w-full sm:w-[152px] order-2 sm:order-1">
                <Image src={items.img1} className="w-[100px] sm:w-full h-[100px] sm:h-[150px]  " alt="productdetail " height={100} width={100} ></Image>
                <Image src={items.img2} className="w-[100px] sm:w-full h-[100px] sm:h-[150px]  sm:mt-3 "  alt="productdetail " height={100} width={100} ></Image>
                <Image src={items.img3} className="w-[100px] sm:w-full h-[100px] sm:h-[150px] sm:mt-3 "  alt="productdetail " height={100} width={100} ></Image>
            </div>
            {/*mid div*/}
            <div className="w-full h-[260px] sm:w-[444px]  sm:h-[500px] sm:mt-0 mt-5 order-1 sm:order-2 ">
            <Image src={items.img1} className="w-full h-[95%] p-5 " alt="productdetail " height={100} width={100} ></Image>
            </div>
            {/*right div*/}
            <div className="w-full sm:w-[600px] h-[500px] mt-3 order-3">
                <h1 className="text-2xl md:text-3xl font-bold ">One Life Graphic T-shirt</h1>
                <div className="flex text-yellow-300 ">
                    {star}
                </div>
                <p className="font-bold mt-1">{items.price} <span className="text-slate-400 line-through">{items.old_price} </span> </p>
                <p>This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.</p>
                {/*select colours */}
                <div className=" mt-5">
                    <p className="text-gray-500">Select Colors</p>
                    <div className="flex gap-x-4">
                    <div className="w-[37px] h-[37px] bg-red-950 rounded-full flex justify-center items-center ">< IoCheckmarkOutline className="text-white opacity-0 hover:opacity-100 cursor-pointer"/></div>
                    <div className="w-[37px] h-[37px] bg-slate-700 rounded-full flex justify-center items-center ">< IoCheckmarkOutline className="text-white opacity-0 hover:opacity-100 cursor-pointer"/></div>
                    <div className="w-[37px] h-[37px] bg-purple-950 rounded-full flex justify-center items-center ">< IoCheckmarkOutline className="text-white opacity-0 hover:opacity-100 cursor-pointer"/></div>
                    </div>
                </div>
                {/*choose size*/}
                <div className="mt-4">
                    <p className="text-gray-500">Choose Size</p>
                    <div className="flex space-x-2 mt-2">
                    <div className="w-[80px] h-[40px] flex justify-center items-center rounded-[62px] bg-[#F0F0F0] text-gray-400 ">small</div>
                    <div className="w-[90px] h-[40px] flex justify-center items-center rounded-[62px]  bg-[#F0F0F0] text-gray-400 ">medium</div>
                    <div className="w-[80px] h-[40px] flex justify-center items-center rounded-[62px]  bg-black text-white">large</div>
                    <div className="w-[90px] h-[40px] flex justify-center items-center rounded-[62px] bg-[#F0F0F0] text-gray-400 ">x-large</div>
                    </div>
                </div>
                {/*button*/}
                <div className="flex justify-start items-center mt-7 space-x-4">
                <div className="w-[80px] h-[40px] flex justify-between p-3 items-center rounded-[62px]  bg-[#F0F0F0] text-gray-400">
                <FaMinus/>
                1
                    <LuPlus/>
                </div>
                <Button className="bg-black text-white w-[300px]" >Add to Cart</Button>
            </div>
            </div>
            
        </div>
    )
}