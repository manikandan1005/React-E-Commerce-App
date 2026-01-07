import exp from "express"
import { List } from "lucide-react";


const app=exp();
  const list = [
    {
      id: 1,
      name: "Tropical Fruit & Almond Cake",
      type: "Fruit",
      price: 699,
      image: "cake1",
      badge: "Best Seller",
      description: "Delicious tropical fruit and almond delight."
    },
    {
      id: 2,
      name: "Choco Ferrero Drip 'cake'",
      type: "Chocolate",
      price: 1649,
      image: "cake2",
      badge: "Best Sell",
      description: "Rich chocolate cake with Ferrero Rocher topping."
    },
    {
      id: 3,
      name: "Chocolicious Marble Cake",
      type: "Chocolate",
      price: 799,
      image: "cake3",
      badge: "Best Sell",
      description: "Perfectly baked marble cake with rich chocolate taste."
    },
    {
      id: 4,
      name: "Rosette Love Red Velvet Cake",
      type: "Velvet",
      price: 899,
      image: "cake4",
      badge: "Premium",
      description: "Classic red velvet cake decorated with rosettes."
    },
    {
      id: 5,
      name: "Choco Vanilla Swirl Cake",
      type: "Vanilla",
      price: 749,
      image: "cake5",
      badge: "Spiceal",
      description: "Perfect combination of choco and vanilla flavours."
    },
    {
      id: 6,
      name: "Classic Red Velvet Cream Cake",
      type: "Velvet",
      price: 949,
      image: "cake6",
      badge: "new",
      description: "Soft and creamy red velvet cake for every occasion."
    },
    {
      id: 7,
      name: "Hearts-Aflutter Valentine Cake",
      type: "Velvet",
      price: 1299,
      image: "cake7",
      badge: "Latest",
      description: "Special Valentine cake to celebrate love."
    },
    {
      id: 8,
      name: "Hearty Red Velvet Cake",
      type: "Velvet",
      price: 949,
      image: "cake8",
      badge: "Premium",
      description: "Heart-shaped red velvet cake for special occasions."
    },
    {
      id: 9,
      name: "Black & White Forest ice Cake",
      type: "Chocolate",
      price: 1599,
      image: "cake9",
      badge: "Premium",
      description: "Black & white forest cake designed for anniversaries."
    },
    {
      id: 10,
      name: "Blueberry Bliss Cake",
      type: "Berry",
      price: 899,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd66BEeal_8fRyzXLrp0kr_4r6V8AhbGaoxQ&s",
      badge: "Best sell",
      description: "Fresh blueberry topping with soft vanilla sponge."
    },
    {
      id: 11,
      name: "Hazelnut Crunch Chocolate Cake",
      type: "Chocolate",
      price: 1199,
      image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb",
      badge: "Trending",
      description: "Crunchy hazelnuts blended with rich chocolate cream."
    },
    {
      id: 12,
      name: "Butterscotch Caramel Cake",
      type: "Vanilla",
      price: 749,
      image: "https://images.unsplash.com/photo-1618213837799-9134c7f8a3b0",
      badge: "new",
      description: "Classic butterscotch cake loaded with caramel cream."
    },
    {
      id: 13,
      name: "Berry Bliss Cake",
      type: "Berry",
      price: 699,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxUS1MjnZ9w-K3f7VkUD7yV93qX88wrgURYQ&s",
      badge: "Premium",
      description: "Soft cream cake infused with fresh berries."
    },
    {
      id: 14,
      name: "Strawberry Swirl Cake",
      type: "Berry",
      price: 799,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqstoLCq2kDo7c1CoDdLGTubRI163dcDcdsw&s",
      badge: "Fresh",
      description: "Creamy strawberry swirl layered with soft sponge."
    },
    {
      id: 15,
      name: "Chocolate Truffle Supreme",
      type: "Chocolate",
      price: 999,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE4siHXH7W3RX8k0Az9iDinrdAGMXjHEazwQ&s",
      badge: "Best Seller",
      description: "Dense chocolate truffle cake topped with rich ganache."
    },
    {
      id: 16,
      name: "Oreo Overload Cake",
      type: "Chocolate",
      price: 399,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSineYb6FRYliWcT8ff4MngGrgQVuu4xj14iw&s",
      badge: "Premium",
      description: "Loaded with Oreo biscuits and creamy frosting."
    },
    {
      id: 17,
      name: "Mango Tropical Cake",
      type: "Mango",
      price: 449,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRirK0p_wkH6kVvDgMOZdyYl0VHleNu-QRk9Q&s",
      badge: "Seasonal",
      description: "Refreshing mango-flavored cake perfect for summers."
    },
    {
      id: 18,
      name: "KitKat Crunchy Cake",
      type: "Chocolate",
      price: 1549,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYzx707zDmyNt1bRbK4vt7VM2nIO5I3gfj0A&s",
      badge: "new",
      description: "Chocolate cake layered with KitKat bars and crispy wafers."
    }
  ];
 app.listen(5173,()=>console.log('dev server run'));
 app.get('/',(req,res)=>{
    res.send(list);
    console.log(list)
 })