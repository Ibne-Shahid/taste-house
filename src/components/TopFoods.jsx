"use client";
import Card from '@/components/Card'

const items = [
  {
    id: 1,
    title: "Chicken Biryani",
    desc: "Aromatic basmati rice cooked with tender chicken and spices.",
    price: "$12.99",
    image: "/biryani.jpg",
  },
  {
    id: 2,
    title: "Veg Thali",
    desc: "A wholesome Indian meal with curry, roti, rice and dessert.",
    price: "$9.49",
    image: "/veg-thali.jpg",
  },
  {
    id: 3,
    title: "Creamy Pasta",
    desc: "Fresh pasta tossed in a creamy homemade white sauce.",
    price: "$10.99",
    image: "/pasta.jpg",
  },
  {
    id: 4,
    title: "Grilled Chicken",
    desc: "Juicy chicken breast grilled to perfection with herbs.",
    price: "$14.50",
    image: "/grilled-chicken.jpg",
  },
  {
    id: 5,
    title: "Chocolate Brownie",
    desc: "Warm, gooey brownie made with real dark chocolate.",
    price: "$5.99",
    image: "/brownie.jpg",
  },
  {
    id: 6,
    title: "Homestyle Burger",
    desc: "Classic homemade burger with fresh veggies and cheese.",
    price: "$8.99",
    image: "/burger.jpg",
  },
];

const TopFoods = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        
        <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary mb-12">
          🍛 Top Homemade Dishes
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <Card key={item.id} item={item}></Card>
          ))}
        </div>

      </div>
    </section>
  );
}
  

export default TopFoods