import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex items-center p-4 bg-gray-800 text-white">
            <h1>Holla</h1>
            <ul className="flex space-x-4 pl-5">
                <Link href="/">
                    <li className="cursor-pointer">Home</li>
                </Link>
                <Link href="/about">
                    <li className="cursor-pointer">About</li>
                </Link>
                <Link href={"/about/profile"}>
                    <li className="cursor-pointer">Profile</li>
                </Link>
            </ul>
        </nav>
    );
}