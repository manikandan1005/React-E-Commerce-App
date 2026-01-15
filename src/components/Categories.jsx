import catImg1 from '/src/assets/image.png'
import catImg2 from '/src/assets/cakes/cat2.avif'
import catImg3 from '/src/assets/cakes/cat3.jpg'
const Categories=()=>{
    const categories=[
        {
            id:1,
            name:'Ice cake',
            count:7,
            colspan:'row-span-1',
            bgcolor:'bg-[#f5f109]',
            color:'text-[#f5f199]',
            img:catImg1
        },
        {
            id:2,
            name:'donut',
            count:7,
            colspan:'row-span-1',
            bgcolor:'bg-[#f17dda]',
             color:'text-[#f5f109]',
            img:catImg2
        },
        {
            id:3,
            name:'Ice Cream',
            count:7,
            colspan:'row-span-2',
            bgcolor:'bg-[#878080]',
             color:'text-[#f5f109]',
            img:catImg1
        },
        {
            id:4,
            name:'pngcake',
            count:7,
            colspan:'row-span-1',
            bgcolor:'bg-[#f17dda]',
             color:'text-[#f5f109]',
            img:catImg3
        },
        {
            id:5,
            name:'hii',
            count:7,
            colspan:'row-span-1',
            bgcolor:'bg-[#0bc2eb]',
             color:'text-[#f5f109]',
            img:catImg1
        },
    ]
    return(
        <section  id='categories'
        data-aos='fade-right'
        data-aos-delay='300'
        data-aos-duration='1500'
        className="bg-white py-25 overflow-hidden max-h-screen">
            {/* <div className='container mx-auto px-6'> */}
                            <div className='flex justify-center items-center mb-10'>
                <h1 className='text-2xl font-bold text-[#f1062d]'>Product <span className='text-2xl font-bold text-black'>Categories</span></h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto'>
                <div className="flex flex-col gap-5 ">
                    {
                        categories.slice(0,2).map((cat,index)=>(
                            <div
                                key={cat.id}
                                data-aos='fade-right'
                                data-aos-delay={index*200}
                                data-aos-duration='600'
                                data-aos-easing='ease-out-cubic'
                                className={`${cat.bgcolor} mx-4 rounded-2xl relative flex flex-col hover:scale-105  justify-between hover:shadow-2xl transform p-6`}>
                                    <div className='text-xl relative z-10 '>
                                        <p className=' rounded-full w-10 h-10 items-center shadow-md justify-center flex bg-amber-200'
                                        data-aos='zoom-in'
                                        data-aos-delay={index*200 +300}
                                        data-aos-duration='500'>{cat.count}</p>
                                        <p  data-aos='fade-right'data-aos-delay={index*200 +350} className='mt-1 font-semibold opacity-90 text-sm'>Products</p>
                                        <h3 data-aos='fade-right'data-aos-delay={index*200 +450}  className={`${cat.color} font-bold text-2xl`}>{cat.name}</h3>
                                    </div>
                                    
                                        <img
                                         data-aos='fade-left' data-aos-delay={index*200+300}
                                         className='absolute opacity-95 right-[-10px] bottom-[-25px] w-44 h-44 object-cover'
                                         src={cat.img} alt={cat.name} />
                                    
                            </div>
                        ))   
                    }
                </div>
                {/* center */}
                <div 
                className='flex flex-col'
                data-aos='zoom-in'
                key={categories[2].id}
                data-aos-delay='500'
                data-aos-duration='1300'>
                    <div
                     
                    className={` ${categories[2].bgcolor} relative rounded-2xl p-6 h-full flex items-center shadow-2xl hover:scale-105`}>
                        <div className='relative z-10'>
                            <p
                            data-aos='zoom-in'
                            data-aos-delay='350'
                            className='w-10 h-10 bg-amber-300 rounded-full shadow-md items-center flex justify-center'>{categories[2].count}</p>
                            <p  data-aos='fade-right'data-aos-delay='450' className='mt-5 text-sm font-semibold'>Products</p>
                            <h3 data-aos='fade-right'data-aos-delay='550' className={`text-2xl font-bold ${categories[2].color}`} >{categories[2].name}</h3>
                        </div>
                        <div                         >
                            <img 
                            data-aos='fade-up'
                        data-aos-delay='550'
                        data-aos-duration='750'

                            className=' absolute -right-8  bottom-0  h-44 md:h-80 md:w-80 w-44' 
                            src={categories[2].img} alt={categories[2].name} />
                        </div>
                    </div>
                </div>

                {/* left 2 */}
                <div className='flex flex-col gap-4 '
                data-aos='fade-left'
                data-aos-delay='600'
                data-aos-duration='1400'>
                    {
                        categories.slice(3).map((cat,index)=>(
                            <div  key={cat.id}
                            className={` relative    rounded-2xl flex justify-between ${cat.bgcolor} hover:scale-105 shadow-2xl`}
                            data-aos='fade-left'
                            data-aos-duration={index*200+300}>
                                <div className='relative z-10 p-6'>
                                    <p  data-aos='fade-right'data-aos-delay={index*200 +350} className='flex shadow-md rounded-full w-10 h-10 items-center justify-center bg-amber-300'>{cat.count}</p>
                                    <p  data-aos='fade-right'data-aos-delay={index*200 +450} className=' text-sm mt-3 font-semibold'>Products</p>
                                    <h3 data-aos='fade-right'data-aos-delay={index*200 +450}  className='text-2xl font-bold'>{cat.name}</h3>
                                </div>
                                
                                    <img
                                    data-aos='fade-right'
                                    data-aos-delay={index*200 + 300}
                                    data-aos-duration='700'
                                    className='h-44 w-44 absolute object-cover -right-2 bottom-[-25px]'
                                    src={cat.img} alt={cat.name} />
                                
                            </div>
                        ))
                    }
                </div>
            </div>
            {/* </div> */}
        </section>
    );
}
export default Categories;