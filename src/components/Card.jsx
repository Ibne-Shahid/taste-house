export default function Card({ item }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group">

      <img
        src={item.imageUrl}
        alt={item.title}
        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
      />

      <div className="p-5">
        <h3 className="text-xl font-semibold">{item.title}</h3>

        
        <p className="text-gray-600 text-sm mt-2 line-clamp-2">
          {item.desc}
        </p>

        <p className="text-yellow-600 font-bold mt-4">{item.price}</p>

        <button
          className="mt-4 w-full border border-yellow-500 text-yellow-600 font-semibold py-2 rounded-lg hover:bg-yellow-500 hover:text-black cursor-pointer transition"
        >
          View Details
        </button>
      </div>
    </div>
  );
}