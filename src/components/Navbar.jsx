import icon from "../assets/icon.png";
import { FaHeart, FaCheckCircle } from "react-icons/fa";

const Navbar = ({
  wishlistCount = 0,
  watchedCount = 0,
  onOpenWishlist,
  onOpenWatched,
}) => {
  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="bg-base-100/90 backdrop-blur supports-[backdrop-filter]:bg-base-100/70 py-2">
        <div className="rounded-2xl bg-base-100 shadow-sm border border-base-200">
          <div className="navbar px-4 sm:px-6">
            <div className="flex-1">
              <div className="flex items-center gap-3">
                <img src={icon} alt="MovieMango icon" className="w-9 h-9 rounded-xl" />
                <div className="leading-tight">
                  <div className="text-xl font-bold">MovieMango</div>
                  <div className="text-xs opacity-70">Browse • Filter • Wishlist • Watched</div>
                </div>
              </div>
            </div>

            <nav className="flex-none">
              <div className="flex items-center gap-2">
                <button className="btn btn-sm btn-outline" onClick={onOpenWatched} type="button">
                  <FaCheckCircle />
                  Watched
                  <span className="badge badge-neutral ml-2">{watchedCount}</span>
                </button>

                <button className="btn btn-sm btn-outline" onClick={onOpenWishlist} type="button">
                  <FaHeart />
                  Wishlist
                  <span className="badge badge-neutral ml-2">{wishlistCount}</span>
                </button>
              </div>
            </nav>
          </div>

          <div className="h-px bg-base-200" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
