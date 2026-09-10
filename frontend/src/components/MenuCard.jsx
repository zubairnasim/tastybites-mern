import { Link } from 'react-router-dom'

function MenuCard({ item }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-lg transition">

      {/* Image */}
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-52 object-cover"
      />

      {/* Content */}
      <div className="p-5">

        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-bold text-slate-900">
            {item.name}
          </h3>

          <span className="text-orange-500 font-bold whitespace-nowrap">
            ₹{item.price}
          </span>
        </div>

        <p className="text-slate-600 text-sm mt-2 line-clamp-2">
          {item.description}
        </p>

        <Link
          to={`/menu/${item.id}`}
          className="inline-block mt-5 bg-slate-900 text-white px-5 py-2.5 rounded-lg hover:bg-orange-500 transition"
        >
          View Details
        </Link>

      </div>
    </div>
  )
}

export default MenuCard