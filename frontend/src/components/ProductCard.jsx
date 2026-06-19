import { Link } from "react-router";
import { MessageCircleIcon } from "lucide-react";
import { motion } from "framer-motion";

const oneWeekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1584824486509-11459466a14e?auto=format&fit=crop&w=800&q=80"; // A premium default image

const ProductCard = ({ product }) => {
  const isNew = new Date(product.createdAt) > oneWeekAgo;

  return (
    <motion.div whileHover={{ y: -8, scale: 1.02 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className="h-full">
      <Link
        to={`/product/${product.id}`}
        className="block card bg-base-100/50 backdrop-blur-lg hover:bg-base-100/80 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-primary/30 border border-base-content/5 hover:border-primary/30 overflow-hidden group h-full"
      >
        <figure className="relative pt-4 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-base-100 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
          <img
            src={product.imageUrl || FALLBACK_IMAGE}
            alt={product.title}
            onError={(e) => { e.target.src = FALLBACK_IMAGE; e.target.onerror = null; }}
            className="rounded-2xl h-52 w-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out shadow-sm"
          />
          {isNew && (
            <div className="absolute top-6 right-6 z-20">
              <span className="badge badge-primary font-bold shadow-lg shadow-primary/40 animate-pulse">NEW</span>
            </div>
          )}
        </figure>
        <div className="card-body p-6 relative z-20 flex flex-col justify-between">
          <div>
            <h2 className="card-title text-xl font-extrabold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary transition-all duration-300">
              {product.title}
            </h2>
            <p className="text-sm text-base-content/60 line-clamp-2 mt-2 leading-relaxed">{product.description}</p>
          </div>

          <div className="mt-4">
            <div className="divider my-0 opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <div className="flex items-center justify-between pt-4">
              {product.user && (
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="w-8 rounded-full ring-2 ring-base-content/10 group-hover:ring-primary/40 ring-offset-base-100 ring-offset-2 transition-all">
                      <img 
                        src={product.user.imageUrl} 
                        alt={product.user.name} 
                        onError={(e) => { e.target.src = "https://api.dicebear.com/7.x/avataaars/svg?seed=Fallback"; e.target.onerror = null; }} 
                      />
                    </div>
                  </div>
                  <span className="text-sm font-semibold text-base-content/70 group-hover:text-base-content tracking-wide transition-colors">{product.user.name}</span>
                </div>
              )}
              {product.comments && (
                <div className="flex items-center gap-1.5 text-base-content/60 bg-base-200/50 backdrop-blur-sm px-3 py-1.5 rounded-full border border-base-content/5 group-hover:bg-primary/10 group-hover:text-primary group-hover:border-primary/20 transition-all shadow-sm">
                  <MessageCircleIcon className="size-4" />
                  <span className="text-xs font-bold">{product.comments.length}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
