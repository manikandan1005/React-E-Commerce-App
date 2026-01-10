import { Cake, Heart, Star } from "lucide-react";
import img1 from '/src/assets/cakes/abt1.avif'
import img2 from '/src/assets/cakes/abt2.avif'
import img3 from '/src/assets/cakes/abt3.avif'


function About(){

    return(
        <div className="min-h-screen overflow-hidden py-20 bg-black" id="#about">
            <section className="flex items-center justify-center rounded-4xl ">
                <div data-aos='zoom-in'
                data-aos-duration='1200'
                className="relative w-full max-w-6xl mx-3 rounded-4xl shadow-2xl flex flex-col lg:flex-row  justify-between overflow-hidden p-3 md:p-16 bg-[#efa4b1]">
                    {/*text*/}
                    <div className="max-w-lg text-center lg:text-left space-y-6 z-10 text-black font-semibold">
                        <p data-aos='fade-down'
                data-aos-duration='800'
                data-aos-delay='300' 
                className="font-semibold uppercase">Sweet beginnings</p>
                <div data-aos='fade-right'
                data-aos-duration='500'>
                    <h1 className="text-4xl md:text-5xl font-extrabold">Our <span className="text-[#f1062d]">Delicious</span> Story</h1>
                </div>
                <div className="space-y-4 text-white">
                    <p
                    data-aos='fade-up'
                    data-aos-delay='700'
                    data-aos-duration='800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia dolorum a iusto unde sapiente deserunt maiores culpa error dolore odit at pariatur, ut harum dolorem possimus, alias blanditiis eius atque.</p>
                    <p 
                    data-aos='fade-up'
                    data-aos-delay='700'
                    data-aos-duration='800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima error unde omnis. Unde doloremque animi quos, aliquid nobis eligendi laborum, doloribus ipsa provident perspiciatis voluptatem vitae, ex autem cum corporis!</p>
                </div>

                <div data-aos='fade-up'
                data-aos-delay='1100'
                data-aos-duration='600'
                className="flex flex-wrap pt-3 gap-3">
                    <div data-aos='flip-left'
                data-aos-delay='1200'
                 className=" flex items-center gap-2">
                    <Cake className="w-6 h-6 text-[#f1062d]" />
                    <span className="text-white">Fresh Daily</span>
                    </div>
                    <div data-aos='flip-left'
                data-aos-delay='1300'
                className=" flex items-center gap-2">
                    <Heart className="w-6 h-6 text-[#f1062d]" />
                    <span className="text-white">Handcrafted</span>
                    </div>
                    <div data-aos='flip-left'
                data-aos-delay='1200'
                data-aos-duration='600'  
                className=" flex items-center gap-2">
                    <Star className="w-6 h-6 text-[#f1062d]" />
                    <span className="text-white">Award Winning</span>
                    </div>
                </div>
                    </div>

                    {/* image */}
                    <div className="mt-8 lg:mt-0 relative grid grid-rows-2 gap-5 lg:grid-rows-1">
                        <div className="grid grid-cols-2 gap-6">
                            <div data-aos='fade-left'
                            data-aos-delay='600'
                            data-aos-duration='1000'
                            className=" relative -rotate-4">
                                <img src={img1} alt="" className="rounded-2xl shadow-lg w-full h-40 lg:h-64 border-white object-cover border-4"/>

                            </div>
                            <div data-aos='fade-left'
                        data-aos-delay='800'
                        className="relative rotate-4">
                            <img src={img2} alt="" className="w-full rounded-2xl shadow-lg border-4 border-white h-40 lg:h-64 object-cover" />
                        </div>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            <div data-aos='fade-left'
                            data-aos-delay='800'
                            data-aos-duration='1000'
                            className=" relative rotate-4">
                                <img src={img3} alt="" className="rounded-2xl shadow-lg w-full h-40 lg:h-64 border-white object-cover border-4"/>

                            </div>
                            <div data-aos='fade-left'
                        data-aos-delay='900'
                        className="relative -rotate-4">
                            <img src={img1} alt="" className="w-full rounded-2xl shadow-lg border-4 border-white lg:h-64 h-40 object-cover" />
                        </div>
                        </div>
                        
                        
                    </div>
                </div>
            </section>
        </div>
    );
}
export default About;