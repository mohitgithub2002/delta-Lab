import Link from "next/link"
import Image from "next/image"
export default function Navbar() {
    return (
        <div className="flex justify-center items-center w-full h-20 shadow-xl  bg-black/20">
        <div className="flex justify-between items-center h-full py-4 w-[1284px] max-w-[1284px] px-4 lg:px-0">
        
        
            <Link href="/" className="flex gap-2 flex-center">
                <Image src="/logo-white.png" width={200} height={200} />
            </Link>
            <div className="hidden md:flex md:items-center md:gap-8">
            <Link href="/about" className="navbar-brand">About</Link>
            <Link href="/courses" className="navbar-brand">Courses</Link>
            <Link href="/calculator" className="navbar-brand">Calculator</Link>
            <Link href="/login" className="navbar-brand">Login</Link>
            </div>
        
        </div>
        
     </div>
    )
}