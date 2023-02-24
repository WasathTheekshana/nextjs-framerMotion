import React from "react";
import Link from "next/link";

function Navbar() {
    return (
        <nav className="text-2xl font-medium z-20 relative">
            <ul className="flex gap-12">
                <Link href={"/"}> <li>Home</li> </Link>
                <Link href={"/Contact"}> <li>Contact</li> </Link>
            </ul>
        </nav>
    )
}

export default Navbar;