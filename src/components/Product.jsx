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
  const list = [
    {
      id: "1",
      name: "Tropical Fruit & Almond Cake",
      type: "Fruit",
      price: 699,
      image: cake1,
      badge: "Best Seller",
      description: "Delicious tropical fruit and almond delight."
    },
    {
      id: "2",
      name: "Choco Ferrero Drip Cake",
      type: "Chocolate",
      price: 1649,
      image: cake2,
      badge: "Best Sell",
      description: "Rich chocolate cake with Ferrero Rocher topping."
    },
    {
      id: "3",
      name: "Chocolicious Marble Cake",
      type: "Chocolate",
      price: 799,
      image: cake3,
      badge: "Best Sell",
      description: "Perfectly baked marble cake with rich chocolate taste."
    },
    {
      id: "4",
      name: "Rosette Love Red Velvet Cake",
      type: "Velvet",
      price: 899,
      image: cake4,
      badge: "Premium",
      description: "Classic red velvet cake decorated with rosettes."
    },
    {
      id: "5",
      name: "Choco Vanilla Swirl Cake",
      type: "Vanilla",
      price: 749,
      image: cake5,
      badge: "Spiceal",
      description: "Perfect combination of choco and vanilla flavours."
    },
    {
      id: "6",
      name: "Classic Red Velvet Cream Cake",
      type: "Velvet",
      price: 949,
      image: cake6,
      badge: "new",
      description: "Soft and creamy red velvet cake for every occasion."
    },
    {
      id: "7",
      name: "Hearts-Aflutter Valentine Cake",
      type: "Velvet",
      price: 1299,
      image: cake7,
      badge: "Latest",
      description: "Special Valentine cake to celebrate love."
    },
    {
      id: "8",
      name: "Hearty Red Velvet Cake",
      type: "Velvet",
      price: 949,
      image: cake8,
      badge: "Premium",
      description: "Heart-shaped red velvet cake for special occasions."
    },
    {
      id: "9",
      name: "Black & White Forest ice Cake",
      type: "Chocolate",
      price: 1599,
      image: cake9,
      badge: "Premium",
      description: "Black & white forest cake designed for anniversaries."
    },
    {
      id: "10",
      name: "Blueberry Bliss Cake",
      type: "Berry",
      price: 899,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd66BEeal_8fRyzXLrp0kr_4r6V8AhbGaoxQ&s",
      badge: "Best sell",
      description: "Fresh blueberry topping with soft vanilla sponge."
    },
    // {
    //   id: "11",
    //   name: "Hazelnut Crunch Chocolate Cake",
    //   type: "Chocolate",
    //   price: 1199,
    //   image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb",
    //   badge: "Trending",
    //   description: "Crunchy hazelnuts blended with rich chocolate cream."
    // },
    // {
    //   id: "12",
    //   name: "Butterscotch Caramel Cake",
    //   type: "Vanilla",
    //   price: 749,
    //   image: "https://images.unsplash.com/photo-1618213837799-9134c7f8a3b0",
    //   badge: "new",
    //   description: "Classic butterscotch cake loaded with caramel cream."
    // },
    {
      id: "13",
      name: "Berry Bliss Cake",
      type: "Berry",
      price: 699,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxUS1MjnZ9w-K3f7VkUD7yV93qX88wrgURYQ&s",
      badge: "Premium",
      description: "Soft cream cake infused with fresh berries."
    },
    {
      id: "14",
      name: "Strawberry Swirl Cake",
      type: "Berry",
      price: 799,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqstoLCq2kDo7c1CoDdLGTubRI163dcDcdsw&s",
      badge: "Fresh",
      description: "Creamy strawberry swirl layered with soft sponge."
    },
    {
      id: "15",
      name: "Chocolate Truffle Supreme",
      type: "Chocolate",
      price: 999,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE4siHXH7W3RX8k0Az9iDinrdAGMXjHEazwQ&s",
      badge: "Best Seller",
      description: "Dense chocolate truffle cake topped with rich ganache."
    },
    {
      id: "16",
      name: "Oreo Overload Cake",
      type: "Chocolate",
      price: 399,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSineYb6FRYliWcT8ff4MngGrgQVuu4xj14iw&s",
      badge: "Premium",
      description: "Loaded with Oreo biscuits and creamy frosting."
    },
    // {
    //   id: "17",
    //   name: "Mango Tropical Cake",
    //   type: "Mango",
    //   price: 449,
    //   image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRirK0p_wkH6kVvDgMOZdyYl0VHleNu-QRk9Q&s",
    //   badge: "Seasonal",
    //   description: "Refreshing mango-flavored cake perfect for summers."
    // },
    // {
    //   id: "18",
    //   name: "KitKat Crunchy Cake",
    //   type: "Chocolate",
    //   price: 1549,
    //   image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYzx707zDmyNt1bRbK4vt7VM2nIO5I3gfj0A&s",
    //   badge: "new",
    //   description: "Chocolate cake layered with KitKat bars and crispy wafers."
    // }
  ];
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
          {list.map((items, index) => (
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
