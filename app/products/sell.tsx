import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

interface Iproducts{
    title:string;
    price:string;
    id:number
    rating?:string;
    old_price?:string;
    img_url:string;
    
}

let product:Iproducts[]= [{
    title:"VERTICAL STRIPED SHIRT",
    id:1,
    price:"$212",
    old_price:"$232",
    img_url:"/product7.png"
}, 

{
    title:"COURAGE GRAPHIC T-SHIRT",
    id:2,
    price:"$145",
    img_url:"/product8.png"},   
{
    title:"LOOSE FIT BERMUDA SHORTS",
    id:3,
    price:"$80",
    img_url:"/product9.png"},   
{
    title:"FADED SKINNY JEANS",
    id:4,
    price:"$210",
    
    img_url:"/product10.png"},   
    ]
{/*let star=[<FaStar/>,<FaStar/>,<FaStar/>,<FaStar/>,]*/}




export default function Top_Sell(){
    return(
        <div className="w-full h-[500px]">
            <h1 className="text-3xl md:text-4xl font-bold text-center mt-10">TOP SELLING</h1>
            <div className="flex flex-col md:flex-row justify-center md:justify-between mt-10 px-8 ">
                {
                     product.map((data)=>{
                        return(
                            <div key={data.id}>
                                <Link href={`/products/${data.id}`}>
                                <div className="w-[250px] h-[230px] bg-[#F0EEED] rounded-[20px] ">
                                <Image src={data.img_url} alt={data.title} width={100} height={100}
                                className="w-full h-full rounded-[20px]">
                                    
                                </Image>
                                </div>
                                </Link>
                                

                                <div>
                                <p  className="text-lg  font-bold">{data.title}</p>
                                <p  className="flex text-yellow-300 mt-3"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></p>
                                <p  className="mt-3 font-bold">{data.price} <span className="text-gray-400 font-bold px-2 line-through">{data.old_price}</span></p>
                                </div>
                            </div>
                        )
                     })
                }
            </div>
            <div className="flex justify-center items-center">
            <button className="bg-slate-300 outline-current w-[150px] h-[48px] rounded-full mr-100 text-center mt-10 text-black">View All</button>
            </div>
        </div>
    )
}