import { ArrowLeftIcon, EditIcon, Trash2Icon, CalendarIcon, UserIcon } from "lucide-react";
import LoadingSpinner from "../components/LoadingSpinner";
import CommentsSection from "../components/CommentsSection";
import { useAuth } from "@clerk/clerk-react";
import { useProduct, useDeleteProduct } from "../hooks/useProducts";
import { useParams, Link, useNavigate } from "react-router";

const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1584824486509-11459466a14e?auto=format&fit=crop&w=1200&q=80";

function ProductPage() {
  const { id } = useParams();
  const { userId } = useAuth();
  const navigate = useNavigate();

  const { data: product, isLoading, error } = useProduct(id);
  const deleteProduct = useDeleteProduct();

  const handleDelete = () => {
    if (confirm("Delete this product permanently?")) {
      deleteProduct.mutate(id, { onSuccess: () => navigate("/") });
    }
  };

  if (isLoading) return <LoadingSpinner />;

  if (error || !product) {
    return (
      <div className="card bg-base-300 max-w-md mx-auto shadow-2xl">
        <div className="card-body items-center text-center">
          <h2 className="card-title text-error text-2xl">Product not found</h2>
          <p className="text-base-content/60 mb-4">The product you are looking for does not exist or has been removed.</p>
          <Link to="/" className="btn btn-primary shadow-lg hover:scale-105 transition-transform">
            Go Home
          </Link>
        </div>
      </div>
    );
  }

  const isOwner = userId === product.userId;

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in duration-500">
      <div className="flex items-center justify-between">
        <Link to="/" className="btn btn-ghost btn-sm gap-2 hover:bg-base-200 transition-colors">
          <ArrowLeftIcon className="size-4" /> Back to Products
        </Link>
        {isOwner && (
          <div className="flex gap-3">
            <Link to={`/edit/${product.id}`} className="btn btn-outline btn-primary btn-sm gap-2 hover:scale-105 transition-transform">
              <EditIcon className="size-4" /> Edit
            </Link>
            <button
              onClick={handleDelete}
              className="btn btn-error btn-sm gap-2 shadow-lg shadow-error/20 hover:scale-105 transition-transform"
              disabled={deleteProduct.isPending}
            >
              {deleteProduct.isPending ? (
                <span className="loading loading-spinner loading-xs" />
              ) : (
                <Trash2Icon className="size-4" />
              )}
              Delete
            </button>
          </div>
        )}
      </div>

      <div className="grid lg:grid-cols-5 gap-8 items-start">
        {/* Image - takes up more space on large screens */}
        <div className="lg:col-span-3 card bg-base-300 border border-base-content/5 shadow-2xl overflow-hidden group">
          <figure className="relative h-[400px] lg:h-[500px]">
            <img
              src={product.imageUrl || FALLBACK_IMAGE}
              alt={product.title}
              onError={(e) => { e.target.src = FALLBACK_IMAGE; e.target.onerror = null; }}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Overlay Price Tag */}
            {product.price && (
              <div className="absolute top-4 right-4 bg-primary text-primary-content font-bold px-4 py-2 rounded-full shadow-xl shadow-primary/30 text-lg">
                ${parseFloat(product.price).toFixed(2)}
              </div>
            )}
          </figure>
        </div>

        {/* Product Details */}
        <div className="lg:col-span-2 space-y-6">
          <div className="card bg-base-300 border border-base-content/5 shadow-xl">
            <div className="card-body p-6">
              <h1 className="text-3xl font-extrabold bg-gradient-to-br from-base-content to-base-content/60 bg-clip-text text-transparent">{product.title}</h1>

              <div className="flex flex-wrap gap-4 text-sm text-base-content/60 my-3 font-medium">
                <div className="flex items-center gap-1.5 bg-base-200 px-3 py-1 rounded-full">
                  <CalendarIcon className="size-4 text-primary" />
                  {new Date(product.createdAt).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
                </div>
              </div>

              <div className="divider my-4 opacity-50"></div>

              <p className="text-base-content/80 leading-relaxed text-lg">{product.description}</p>

              {product.user && (
                <>
                  <div className="divider my-4 opacity-50"></div>
                  <div className="flex items-center gap-4 bg-base-200/50 p-4 rounded-2xl hover:bg-base-200 transition-colors border border-base-content/5">
                    <div className="avatar hover:scale-110 transition-transform">
                      <div className="w-14 rounded-full ring-2 ring-primary ring-offset-base-300 ring-offset-4 shadow-lg shadow-primary/20">
                        <img 
                          src={product.user.imageUrl} 
                          alt={product.user.name} 
                          onError={(e) => { e.target.src = "https://api.dicebear.com/7.x/avataaars/svg?seed=Creator"; e.target.onerror = null; }}
                        />
                      </div>
                    </div>
                    <div>
                      <p className="font-bold text-lg tracking-tight">{product.user.name}</p>
                      <p className="text-sm font-medium text-primary">Creator / Seller</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Comments Section */}
      <div className="card bg-base-300 border border-base-content/5 shadow-xl">
        <div className="card-body p-6">
          <CommentsSection productId={id} comments={product.comments} currentUserId={userId} />
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
