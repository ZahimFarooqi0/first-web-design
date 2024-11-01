import Image from "next/image"
export default function Footer(){
    return(
        <><section id = "contact">
       
        <div className="bg-[#faf5f5] max-w-[1440px]">
        <div className="  max-w-[1440px] h-[243px] top-[2239px] pt-[200px]">
            <div className=" max-w-[279px] top-[2288px] max-h-[30px] flex mx-[439px] my-[100px] mt-[-100px] px-[100px] justify-evenly">
                <Image src="/fb.png" alt="Facebook Logo"  width={30}  height={30} />
                <Image src="/insta.jpg" alt="Instagram Logo" width={30} height={30}  className=" ml-[50px]"/>
                <Image src="/Group.png" alt="Twitter Logo" width={30} height={30} className=" ml-[50px]"/>
                <Image src="/Linkedin.png" alt="Linkdn Logo" width={30} height={30}  className=" ml-[50px]"/>
                </div>
            </div>
            <div className=" max-w-[354px] max-h-[32px] top-[2354.67px] left[543px] flex justify-center mx-[495px] ">
                    <p className="text-black text-[22px] font-medium font-[Heebo] tracking-wider whitespace-nowrap mt-[-100px]">
                    Copyright ©2020 All rights reserved
                    </p>
            </div>
    
        </div>
        </section>
        </>
    )
}