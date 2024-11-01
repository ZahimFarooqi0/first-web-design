import Image from "next/image"
import Section from "../FeaturedWorkSection/Section"

export default function Works(){
    return(
      <>
       <section id = "works">
        <div className=" max-w-[1440px] bg-[rgb(250,245,245)]  h-[934.2px] top-[1246px] left-[237px]">
           <div className="w-[919px]"><div className="max-w-[153px] max-h-[32px] mx-[120px] pt-[32px] "> 
            <h1  className="font-[Heebo] text-[22px]/[32.31px] font-medium text-black">Featured works</h1></div>
            <div className="mt-[32px] text-black">
             <Image src="/work1.png"alt="Latest Work 1"  width={246} height={180}  className=" top-[1310px] left-[237px]  rounded-md ml-[119.5px]"/>
             <Section/>
            </div>
            <div>
                <Image src="/work2.png" alt="Latest Work 2 " width={246} height={180} className=" top[1601px] left[237px] rounded-md ml-[119.5px] mt-[125px]"/>
            <Section/>
            </div>
            <div>
                <Image src="/work3.png" alt="Latest Work 2" width={246} height={180}  className=" top-[1892px] left-[237px] rounded-md ml-[119.5px] mt-[125px] "/>
            <Section/>
            </div>
            </div>
            
        </div>
        </section>

        </>

    )
    
}