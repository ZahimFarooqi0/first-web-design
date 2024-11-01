import Card1 from "../Card1/Card1";

export default function Recent(){
    return(
        <>     
        <section id="posts">
           <div className="max-w-[1440px] h-[502px] top-[665px] bg-[#f4e2e2] ">
            <div className="pt-[32px]">
            <h1 className=" mx-[120px] max-w-[120px] h-8 top- text-black font-[Heebo] font-medium text-[22px] leading-[32.31px]">
                Recent Post
            </h1>
            </div>
            <div>
                <h2 className="inset-0-w-[77px] h-[32px] text-[#F98585] float-right text-[22px] mt-[-26px] mr-[200px] font-[Heebo] font-[500px] leading-[32.31px] ">
                View All
                </h2>
            </div>
       <div > <Card1/> </div>
    
 </div>  
 </section>
 </>

 )
} 