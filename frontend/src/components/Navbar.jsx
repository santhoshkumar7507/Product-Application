import { Link } from "react-router";
import { SignInButton, SignUpButton, UserButton, useAuth } from "@clerk/clerk-react";
import { ShoppingBagIcon, PlusIcon, UserIcon } from "lucide-react";
import ThemeSelector from "./ThemeSelector";
import { motion } from "framer-motion";

function Navbar() {
  const { isSignedIn } = useAuth();

  return (
    <motion.div 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="navbar sticky top-0 z-50 bg-base-100/80 backdrop-blur-xl border-b border-base-content/10 shadow-sm"
    >
      <div className="max-w-5xl mx-auto w-full px-4 flex justify-between items-center">
        {/* LOGO - LEFT SIDE */}
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost gap-2 hover:bg-primary/10 transition-colors rounded-xl px-3 group">
            <motion.div whileHover={{ rotate: 15 }} transition={{ type: "spring", stiffness: 300 }}>
              <ShoppingBagIcon className="size-6 text-primary drop-shadow-md" />
            </motion.div>
            <span className="text-xl font-black font-mono uppercase tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Productify</span>
          </Link>
        </div>

        <div className="flex gap-3 items-center">
          <ThemeSelector />
          {isSignedIn ? (
            <>
              <Link to="/create" className="btn btn-primary btn-sm gap-1 rounded-full shadow-md shadow-primary/20 hover:scale-105 transition-all">
                <PlusIcon className="size-4" />
                <span className="hidden sm:inline font-semibold">New Product</span>
              </Link>
              <Link to="/profile" className="btn btn-ghost btn-sm gap-1 rounded-full hover:bg-base-200 transition-all">
                <UserIcon className="size-4" />
                <span className="hidden sm:inline font-semibold">Profile</span>
              </Link>
              <div className="ml-2 hover:scale-105 transition-transform">
                <UserButton />
              </div>
            </>
          ) : (
            <>
              <SignInButton mode="modal">
                <button className="btn btn-ghost btn-sm rounded-full font-semibold hover:bg-base-200 transition-all">Sign In</button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button className="btn btn-primary btn-sm rounded-full font-semibold shadow-md shadow-primary/20 hover:scale-105 transition-all">Get Started</button>
              </SignUpButton>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
}
export default Navbar;
