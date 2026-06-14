import { Link } from "react-router";
import { MessageCircleIcon } from "lucide-react";

const oneWeekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1584824486509-11459466a14e?auto=format&fit=crop&w=800&q=80"; // A premium default image

const ProductCard = ({ product }) => {
  const isNew = new Date(product.createdAt) > oneWeekAgo;

  return (
    <Link
      to={`/product/${product.id}`}
      className="card bg-base-300 hover:bg-base-200 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 border border-base-content/5 overflow-hidden group"
    >
      <figure className="relative pt-4 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-base-300 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
        <img
          src={product.imageUrl || FALLBACK_IMAGE}
          alt={product.title}
          onError={(e) => { e.target.src = FALLBACK_IMAGE; e.target.onerror = null; }}
          className="rounded-xl h-48 w-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
        />
      </figure>
      <div className="card-body p-5 relative z-20">
        <h2 className="card-title text-lg font-bold group-hover:text-primary transition-colors duration-300">
          {product.title}
          {isNew && <span className="badge badge-primary badge-sm shadow-md shadow-primary/40 animate-pulse">NEW</span>}
        </h2>
        <p className="text-sm text-base-content/60 line-clamp-2 mt-1 leading-relaxed">{product.description}</p>

        <div className="divider my-3 opacity-30"></div>

        <div className="flex items-center justify-between">
          {product.user && (
            <div className="flex items-center gap-3">
              <div className="avatar hover:scale-110 transition-transform">
                <div className="w-8 rounded-full ring-2 ring-primary/40 ring-offset-base-300 ring-offset-2 shadow-sm">
                  <img 
                    src={product.user.imageUrl} 
                    alt={product.user.name} 
                    onError={(e) => { e.target.src = "https://api.dicebear.com/7.x/avataaars/svg?seed=Fallback"; e.target.onerror = null; }} 
                  />
                </div>
              </div>
              <span className="text-xs font-semibold text-base-content/80 tracking-wide">{product.user.name}</span>
            </div>
          )}
          {product.comments && (
            <div className="flex items-center gap-1.5 text-base-content/60 bg-base-200/50 backdrop-blur-sm px-3 py-1.5 rounded-full border border-base-content/10 group-hover:bg-primary/10 group-hover:text-primary group-hover:border-primary/20 transition-all">
              <MessageCircleIcon className="size-4" />
              <span className="text-xs font-bold">{product.comments.length}</span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
