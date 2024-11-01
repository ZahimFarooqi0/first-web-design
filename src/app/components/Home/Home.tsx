import Image from "next/image";

export default function Home() {
    return (
        <>  
        <section id="blogs">
       <div className=" bg-[#faf5f5] max-w-[1440px] h-[800px] left-[-2.5px] ">
       <div className="  max-w-[1030px] top-[246px] left-[308px] px-4">
            <div className="  max-h-[308px] max-w-[521px] left-[231px] px-4 ">
                <h1 className=" font-[Heebo] p-[65.75px]  max-w-[800px] max-h-[230px] text-[48px] font-[900] leading-[61px] tracking-[2px]  text-[#21243D] backdrop-blur-sm ">
                    Hi, I am John, 
                     <p className="whitespace-nowrap ">Creative Technologist</p>
                </h1>
                </div>    
                <div className="">
                <Image src="/hero.png" alt="Hero Image" width={299} height={299}  className="top-[246px] rounded-full float-right mr-[-160px] mt-[-150px] shadow-xl shadow-gray-700"/>
                </div>
            <div className="max-w-[670px] height-[66px] top-[402px] left-[231px] px-[83px]">
            
    
                <p className="text-base/[23.5px] font-normal  mt-[-5px] font-[Heebo] text-[#21243D]  ">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                </p>
                <br/>
                </div>
                <div className="max-w-[205px] max-h-[50px] top-[504px] left-[231px] px-[79px] ">
                    <button className=" w-[205px] h-[50px] bg-[#E5903A] rounded-[4px] text-base/[23.5px] font-normal  font-[Heebo] text-[#FFFFFF] shadow-lg shadow-yellow-900">
                        Download Resume
                    </button>
                </div>
            </div>
           
            
            
        </div>
        </section>
        </>

    )
}