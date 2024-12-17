import Image from "next/image";

export  function Hero(){
    return(
        <main className="w-full h-full md:h-[508px] bg-[#f2f0f1] flex flex-col md:flex-row justify-between items-start">
            {/*left*/}
            <div className="w-full md:w-[500px] mt-3 md:mt-20 md:ml-10 pl-3">
                <h1 className="text-2xl md:text-5xl font-extrabold">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                <p className="text-sm mt-3">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                <button className="bg-black mt-5 text-white px-10 py-2 text-sm rounded-[16px]">Shop Now</button>

            </div>
            {/*right*/}
            <div className="relative">
                <Image src={"/profile.png"} className="w-[500px]  mr-6" width={200} height={200} alt={"profile"}  ></Image>
                {/*star*/}
               
                <Image src={"/star.png"} className="w-[30px] md:w-[50px] absolute top-[150px] left-[30px] md:top-[250px] md:left-[-30px] " width={200} height={200} alt={"star"} ></Image>

                <Image src={"/star.png"} className="w-[50px] md:w-[100px] absolute top-[50px] right-[50px] md:top-[50px] md:right-[30px] " width={200} height={200} alt={"star"} ></Image>
            </div>
        </main>
    )

}