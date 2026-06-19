import { useProducts } from "../hooks/useProducts";
import { PackageIcon, SparklesIcon, ArrowRightIcon } from "lucide-react";
import { Link } from "react-router";
import LoadingSpinner from "../components/LoadingSpinner";
import ProductCard from "../components/ProductCard";
import { SignInButton, useAuth } from "@clerk/clerk-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 }
  }
};

function HomePage() {
  const { data: products, isLoading, error } = useProducts();
  const { isSignedIn } = useAuth();

  if (isLoading) return <LoadingSpinner />;

  if (error) {
    return (
      <div role="alert" className="alert alert-error">
        <span>Something went wrong. Please refresh the page.</span>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      {/* HERO */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="hero bg-linear-to-br from-base-300 via-base-200 to-base-300 rounded-3xl overflow-hidden shadow-2xl relative"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
        <div className="hero-content flex-col lg:flex-row-reverse gap-10 py-16 relative z-10 w-full max-w-full px-8">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
            className="relative flex-1 flex justify-center"
          >
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-110 animate-pulse" />
            <img
              src="/image.png"
              alt="Creator"
              className="relative h-64 lg:h-80 rounded-2xl shadow-2xl transition-transform hover:scale-105 duration-500 ring-4 ring-base-100/50"
            />
          </motion.div>
          <div className="text-center lg:text-left flex-1">
            <motion.h1 
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.3 }}
               className="text-4xl lg:text-6xl font-extrabold leading-tight tracking-tight"
            >
              Share Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Products</span>
            </motion.h1>
            <motion.p 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.4 }}
               className="py-6 text-lg text-base-content/70 max-w-xl mx-auto lg:mx-0"
            >
              Upload, discover, and connect with creators across the globe. Join a premium community of makers.
            </motion.p>
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.5 }}
            >
              {isSignedIn ? (
                <Link to="/create" className="btn btn-primary btn-lg shadow-lg shadow-primary/30 hover:scale-105 transition-all duration-300 group">
                  <SparklesIcon className="size-5 group-hover:rotate-12 transition-transform" />
                  Start Selling Now
                  <ArrowRightIcon className="size-5 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              ) : (
                <SignInButton mode="modal">
                  <button className="btn btn-primary btn-lg shadow-lg shadow-primary/30 hover:scale-105 transition-all duration-300 group">
                    <SparklesIcon className="size-5 group-hover:rotate-12 transition-transform" />
                    Start Selling
                  </button>
                </SignInButton>
              )}
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* PRODUCTS */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        <div className="flex items-center justify-between mb-8">
           <h2 className="text-2xl font-extrabold flex items-center gap-3">
             <div className="p-2 bg-primary/10 rounded-xl text-primary shadow-sm shadow-primary/20">
               <PackageIcon className="size-6" />
             </div>
             All Products
           </h2>
        </div>

        {products.length === 0 ? (
          <motion.div variants={itemVariants} className="card bg-base-300/50 backdrop-blur-xl border border-base-content/10 shadow-xl">
            <div className="card-body items-center text-center py-20">
              <div className="p-5 bg-base-200 rounded-full mb-4 shadow-inner">
                 <PackageIcon className="size-16 text-base-content/20" />
              </div>
              <h3 className="card-title text-2xl text-base-content/60">No products yet</h3>
              <p className="text-base-content/40 mt-2 text-lg">Be the first to share something amazing!</p>
              <Link to="/create" className="btn btn-primary mt-6 shadow-lg shadow-primary/20">
                Create Product
              </Link>
            </div>
          </motion.div>
        ) : (
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {products.map((product) => (
              <motion.div key={product.id} variants={itemVariants} className="h-full">
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
export default HomePage;
