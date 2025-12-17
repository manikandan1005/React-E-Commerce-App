import image from '../assets/image.png'
function Hero() {
    return (
        <section id="#about" className="flex items-center justify-center min-h-screen bg-black pt-20 px-4 md:px-8 overflow-hidden">
            <div
                data-aos='zoom-in'
                data-aos-duration='1500'
                 data-aos-easing='ease-out-cubic'
                className=" relative w-full max-w-6xl  bg-[#f1062d] rounded-4xl shadow-2xl flex flex-col md:flex-row
                items-center justify-between px-4 py-4 overflow-hidden ">

                <div className="max-w-full text-2xl text-white text-center md:text-left px-4 py-4s space-y-6">
                    <p data-aos='fade-down'
                        data-aos-delay='300'
                       
                        className="uppercase md:mt-0 mt-4 text-2xl font-bold md:text-4xl">
                        Desserts</p>
                    <div data-aos='fade-right'
                        data-aos-delay='500'
                    >   
                        <h1 className="text-5xl md:text-6xl font-bold text-[pink] leading-tight">Homemade cake with { }
                            <span data-aos='fade-right'
                                data-aos-delay='700'
                                className="text-black"> Delicious flavors
                            </span>
                        </h1>
                        <p data-aos='fade-up'
                            data-aos-delay='1000'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente possimus odio enim dolor officia, maiores dolore cum repellat at ipsa omnis quisquam excepturi eum magnam tempore aliquam doloribus? Cupiditate, laudantium.
                        </p>
                        <div data-aos='fade-up'
                            data-aos-delay='1200'
                            className="items-center">
                            <button className="bg-black rounded-full px-8 py-4 mt-5 hover:bg-[#444] transition-all duration-300 hover:scale-105">Order Now</button>
                        </div>
                    </div>
                </div>

                {/* img */}
                <div className="flex relative justify-center items-center md:justify-end">
                    <div data-aos='fade-left'
                    data-aos-duration='1500'
                    data-aos-delay="700"
                    data-aos-easing='ease-out-cubic'
                    className="relative mt-10"
                    >
                        <img src={image} alt="" className='w-350 md:w-660 md:h-720px' />
                    </div>

                </div>
            </div>
        </section>
    );
}
export default Hero