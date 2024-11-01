import Link from "next/link";
export default function Navbar() {
    return (
        <div className="bg-[#faf5f5] max-w-[1440px] max-h-[67px] inset-x-0  p-16  overflow-hidden ">
            <ul className="flex justify-end justify-items-end gap-[68px] left-[1088px] font-[Inter] text-black font-medium
            text-xl/6 
            ">
                <li className="h-[24px] top-[66px] left-[1088px]  "><Link href="#works">
                    Works </Link>
                </li>
                <li className="h-[24px] top-[66px] left-[1201px]  "><Link href="#posts">

                    Blogs</Link>
                </li>
                <li className="h-[24px] top-[66px] left-[1294px] "><Link href="#contact">
                    Contacts</Link>
                </li>
            </ul>
        </div>
    );
}