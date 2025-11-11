'use client'
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();
    const router = useRouter();
    return (
        <nav className="flex items-center px-4 py-2 bg-gray-800 text-white justify-between">
            <div className="flex">
                <h1>Holla</h1>
                <ul className="flex space-x-4 pl-5">
                    <Link href="/">
                        <li className={` cursor-pointer mr-3 ${pathname === "/" ? "text-blue-300" : ""} `}>Home</li>
                    </Link>
                    <Link href="/about">
                        <li className={` cursor-pointer mr-3 ${pathname === "/about" ? "text-blue-300" : ""} `}>About</li>
                    </Link>
                    <Link href={"/about/profile"}>
                        <li className={` cursor-pointer mr-3 ${pathname === "/about/profile" ? "text-blue-300" : ""} `}>Profile</li>
                    </Link>
                </ul>
            </div>
            <div className="">
                <button className="cursor-pointer bg-white text-black py-1 px-4 text-sm rounded" onClick={() => router.push("/login")}>Login</button>
            </div>
        </nav>
    );
}