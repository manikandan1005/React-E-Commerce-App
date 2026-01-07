import { useEffect, useState } from 'react'
import cake1 from '/src/assets/cakes/cake-1.avif'
import cake2 from '/src/assets/cakes/cake-2.avif'
import cake3 from '/src/assets/cakes/cake-3.avif'
import cake4 from '/src/assets/cakes/cake-4.jpg'
import cake5 from '/src/assets/cakes/cake-5.avif'
import cake6 from '/src/assets/cakes/cake-6.jpg'
import cake7 from '/src/assets/cakes/cake-7.avif'
import cake8 from '/src/assets/cakes/cake-8.jpg'
import cake9 from '/src/assets/cakes/cake-9.avif'
const Product = () => {
  // const list = []
  const [cakeList,setCakeList]=useState([])

  {/* get data from local-host:3000 api*/}
  useEffect(()=>{
    console.log("use effect called")
     fetch("http://localhost:3000/api/product")
     .then((res)=>{
      // console.log(res);
      return res.json();
     })
     .then((data)=>{
        // console.log(data);
        setCakeList(data)
      })
     
    //  console.log(listDt)
  },[])
  return (
    <section className=" py-20 bg-black overflow-hidden">
      <div className="container mx-auto px-6 md:px-10">
        <div
          data-aos='zoom-in'
          data-aos-duration="1500"
          data-aos-easing='ease-out-cubic'
          className=" relative flex flex-col md:flex-row justify-center items-center">
          <h1
            data-aos='fade-up'
            data-delay='200'
            className=" text-white font-bold text-3xl items-center ">Our <span className="text-[#f1062d]">Desserts</span></h1>
        </div>
        {/* cart */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 py-10 px-4 mt-10 gap-4"
          data-aos='fade-right'
          data-delay='400'>
          {cakeList.map((items, index) => (
            <div data-aos='fade-up'
              data-aos-delay={index * 100}
              data-aos-duration='900'
              key={items.id}
              className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl p-5 text-center hover:scale-103 ">
                  <span className=" absolute top-4 left-4 text-xs px-2 rounded-full bg-amber-300">{items.badge}</span>
                  <img src={items.image} alt={items.name}
                  className="w-[160px] mx-auto h-[160px]  object-contain" />
                  {/* name */}
                  <h4 className="font-bold text-2xl text-black mt-4">{items.name}</h4>
                  <p className=" font-bold text-[#f1062d] my-2">$ {items.price}</p>
                  <button 
                  data-aos='zoom-in'
                  data-aos-delay={index* 100}
                  className="bg-black text-white mt-2 px-4 py-2 rounded-full hover:bg-[#444] hover:scale-103">Order Now</button>
            </div>
            
          ))}
        </div>
      </div>

    </section>
  )
}
export default Product
