import {MapPin } from "lucide-react"; 
const Contact=()=>(
    <div className="mb-13 overflow-hidden p-4  bg-black" id="contact">
        <section className="flex items-center justify-center">
            <div data-aos="zoom-in"
            data-aos-delay='500'
            data-aos-duration='1200'
            className=" w-full max-w-4xl shadow-2xl rounded-4xl  p-8 md:p-12">
                <div
                data-aos='fade-down'
                data-aos-delay='200'
                data-aos-duration='800'>
                    <h1 
                className="text-2xl text-white font-bold text-center mb-4"
                >Visit <span className="text-[#f1062d]">Our</span> Shop</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                    <div data-aos='fade-right'
                data-aos-delay='300'
                data-aos-duration='1100'
                className='text-center hover:shadow-lg rounded-2xl hover:scale-105 p-6 bg-white'>
                    <div data-aos='zoom-in'
                data-aos-delay='600'
                data-aos-duration='1100'
                className=' rounded-full bg-black w-10 h-10 flex items-center justify-center mx-auto '>
                    <MapPin className='w-6 h-6   text-white'/>
                </div>
                <h1 data-aos='zoom-in'
                data-aos-delay='500'
                className="text-2xl font-bold text-center mb-2">Address</h1>
                <p data-aos='fade-up'
                data-aos-delay='500'>123 Cream
Stones <br />TNager <br />Chennai</p>
                </div>
                {/* second */}
                <div data-aos='fade-right'
                data-aos-delay='300'
                data-aos-duration='1100'
                className='text-center hover:shadow-lg rounded-2xl hover:scale-105 p-6 bg-white'>
                    <div data-aos='zoom-in'
                data-aos-delay='600'
                data-aos-duration='1100'
                className=' rounded-full bg-black w-10 h-10 flex items-center justify-center mx-auto '>
                    <MapPin className='w-6 h-6   text-white'/>
                </div>
                <h1 data-aos='zoom-in'
                data-aos-delay='500'
                className="text-2xl font-bold text-center mb-2">Address</h1>
                <p data-aos='fade-up'
                data-aos-delay='500'>123 Cream
Stones <br />TNager <br />Chennai</p>
                </div>

                {/*  */}

                <div data-aos='fade-right'
                data-aos-delay='300'
                data-aos-duration='1100'
                className='text-center hover:shadow-lg rounded-2xl hover:scale-105 p-6 bg-white'>
                    <div data-aos='zoom-in'
                data-aos-delay='600'
                data-aos-duration='1100'
                className=' rounded-full bg-black w-10 h-10 flex items-center justify-center mx-auto '>
                    <MapPin className='w-6 h-6   text-white'/>
                </div>
                <h1 data-aos='zoom-in'
                data-aos-delay='500'
                className="text-2xl font-bold text-center mb-2">Address</h1>
                <p data-aos='fade-up'
                data-aos-delay='500'>123 Cream
Stones <br />TNager <br />Chennai</p>
                </div>
                </div>
            </div>

        </section>
    </div>
);
export default Contact;