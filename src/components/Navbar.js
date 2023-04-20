import Link from 'next/link';
import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsFillPersonCheckFill } from 'react-icons/bs';
function Navbar() {
    return (
        <>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5  md:flex-row items-center">
                    <Link href='/' className="flex title-font font-medium items-center text-gray-900  md:mb-0">
                        <span className="ml-3 text-xl">Tailblocks</span>
                    </Link>
                    <nav className="md:ml-auto flex  items-center text-base justify-center">
                        <Link className="mx-5 hover:text-gray-900 text-sm font-semibold text-gray-900" href='/'> Home  </Link>
                        <Link className="mr hover:text-gray-900 text-sm font-semibold text-gray-900" href='#'> Products  </Link>

                        <Link className="mr-4 hover:text-gray-900" href='#'>   </Link>
                    </nav>
                    <Link className="   hover:text-gray-950" href='#'>  <AiOutlineShoppingCart size={30} /> </Link>
                    <button className="inline-flex items-center border-0 py-1 px-3 focus:outline-none hover:border-gray-950 hover:border-2 rounded text-base  md:mt-0">
                       <a href="#"> <BsFillPersonCheckFill size={30} /></a>
                    </button>
                </div>
            </header>
        </>
    )
}

export default Navbar
