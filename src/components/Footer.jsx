import { Cake } from "lucide-react";

const Footer =()=>(
    <footer className="bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto py-12 md:px-8 px-4 ">
            <div className="grid md:grid-cols-3 grid-cols-1 gap-8 items-center" >
                <div className="flex items-center justify-center md:justify-start mb-2 gap-4">
                    <Cake className="w-6 h-6 text-[#f1062d]" /><span className="text-black  font-bold">Sweet <span className="text-[#f1062d]">Delights</span></span>
                </div>
                <p className="text-center">
                    We are passionate about creating handcrafted cakes that add sweetness to every celebration. What started as a love for baking has grown into a commitment to deliver cakes that combine great taste, premium quality, and beautiful designs.
                </p>
            </div>
        </div>
        
    </footer>
)
export default Footer;