import { Cake, Menu, X } from "lucide-react";
import { useState } from "react";

function Nav() {
    const [isOpen, setisopen] = useState(false);
    const nav_item = [
        { name: 'Product', href: '#product' },
        { name: 'Categories', href: '#categories' },
        { name: 'About', href: '#about' },
        { name: 'Service', href: '#service' },
        { name: 'Contact', href: '#contact' },
    ];

    const MenuList = () => setisopen(!isOpen)
    return (
        <nav className="p-6  fixed top-0 left-0 w-full z-50  bg-black">
            <div className="container flex items-center justify-between mx-auto ">
                <div className=" py-1 flex justify-center items-center md:justify-start">
                    <Cake className="text-[#f1062d] w-8 h-8 " />
                    <span className="text-2xl font-bold text-[#fff]"> Cream</span>
                    <span className="text-2xl font-bold text-[#f1062d]">Stones</span>
                </div>
                <ul className="hidden  md:flex items-center gap-9 text-2xl text-[#fff]">
                    {nav_item.map((i) => (
                        <li key={i.name}>
                            <a href={i.href} className="text-[#fff] hover:bg-[#f1062d] rounded-full px-4 py-1 transition md:py-2">{i.name}</a>
                        </li>
                    ))}
                </ul>

                <button className="hidden md:block bg-[#f1062d] px-4 py-1 md:py-2 text-[#fff] rounded-full  transition" >Call Section</button>

                {/* {mobile menu icon} */}
                <div className="md:hidden text-[#f1062d] ">
                    <button onClick={MenuList}>
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>



            </div>
            {isOpen && (
                <div className="md:hidden bg-black py-3  text-center space-y-4 ">
                    {
                        nav_item.map((i) => (
                            <a key={i.name}
                            onClick={()=>setisopen(false)}
                                className="text-[#fff] block hover:text-[#f1062d] rounded-full py-2 px-4" href={i.href}>{i.name}</a>

                        ))
                    }

                </div>
            )}
        </nav>
    )
}
export default Nav