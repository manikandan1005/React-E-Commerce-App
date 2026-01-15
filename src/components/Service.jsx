import { Clock, Cake , Truck , Shield ,Heart, ShieldCheck  } from "lucide-react";
import image from '/src/assets/cakes/serviceImg.avif'
const list=[
  {
    icon: <Cake className="w-5 h-5" />,
    title: "Fresh Baked Daily",
    dec: "Each cake is freshly handcrafted with care, using premium ingredients to ensure rich taste and perfect texture."
  },
  {
    icon: <Truck className="w-5 h-5" />,
    title: "Express Delivery",
    dec: "Fast and reliable delivery to ensure your cakes reach you fresh and on time for every special occasion."
  },
  {
    icon: <Clock className="w-5 h-5" />,
    title: "24/7 Online Store",
    dec: "Order your favorite cakes anytime, anywhere with our always-open online store for your convenience."
  },
  {
    icon: <Heart className="w-5 h-5" />,
    title: "Customer Satisfaction",
    dec: "Personalized cake designs crafted to match your ideas, themes, and special moments perfectly."
  },
//   {
//     icon: <Heart className="w-5 h-5" />,
//     title: "Customer Satisfaction",
//     dec: "We prioritize customer happiness by delivering quality products and exceptional service every time."
//   },
  {
    icon: <Shield className="w-5 h-5" />,
    title: "First & Best Quality",
    dec: "Strict quality checks ensure every cake meets the highest standards of taste, freshness, and hygiene."
  },
  {
  icon: <ShieldCheck className="w-5 h-5" />,
  title: "Safe & Hygienic",
  dec: "Prepared in a clean and hygienic environment you can trust."
}

]

const Service=()=>(
    <>
    <div className="overflow-hidden py-25 min-h-screen" id="service">
        <section  className="flex justify-center px-3">
            <div
            className="w-full max-w-6xl">
                <div className="text-center mb-12"
                data-aos='fade-down'
                data-aos-delay='1000'
                data-aos-duration='1000'>
                    <h1 className="text-3xl md:text-5xl font-extrabold text-[#f1062d]">Our <span className="text-black">Premium</span> Service</h1>
                    <p className="max-w-2xl mx-auto">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam veritatis fuga, esse eligendi quasi delectus nobis voluptas, rem ab eaque molestiae nesciunt! Et, odit ipsum iusto illum nemo quam perspiciatis!</p>
                </div>

            <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-10 items-start">
                <div className="space-y-6 order-2 md:order-1">
                    {
                        list.slice(0,3).map((item, index)=>(
                            <Card  key={index}
                            items={item}
                            aos='fade-right'
                            delay={index * 150}/>
                        ))
                    } 
                    </div>

                    {/* center img */}
                    <div data-aos='zoom-in'
                    data-aos-delay='300'
                     className="flex justify-center items-center  order-1 md:order-2 h-full">
                        <div className="relative">
                            
                        <img src={image} alt="" className="relative object-contain rounded-full h-40 w-40 bg-black md:w-80 md:h-80 "/>
                    </div>
                    </div>

                    <div className="space-y-6 order-3 md:order-3">
                {
                    list.slice(3).map((item,index)=>(
                        <Card key={index}
                        items={item}
                        delay={index*150} />
                    ))
                }
            </div>
            </div>

            

            </div>

        </section>
    </div>
    </>
);
const Card=({items, aos = "fade-up",delay=0})=>(
<>
    <div data-aos={aos}
    data-aos-delay={delay}
    data-aos-duration='900'
    className="rounded-2xl shadow-2xl hover:shadow-lg  p-6 items-center  w-full  border-l-4 border-[#f1062d]">
        <div className="flex items-start gap-4">
            <div className="bg-[#f1062d] p-3 rounded-full text-white">
                {items.icon}
            </div>
            <div>
                <h1 className="text-lg font-bold">{items.title}</h1>
                <p className="">{items.dec}</p>
            </div>
        </div>
    </div>
</>
);
export default Service;