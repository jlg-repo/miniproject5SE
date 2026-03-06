// src/App.jsx
import { useMemo, useState } from "react";
import useMovies from "./hooks/useMovies";
import useWishlist from "./useWishlist";
import Loader from "./components/Loader";
import MovieGrid from "./components/MovieGrid";
import FilterBar from "./components/FilterBar";
import SortControls from "./components/SortControls";
import WishlistModal from "./components/WishlistModal";
import WatchedModal from "./components/WatchedModal";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { filterMovies, sortMovies } from "./filterSort";
import useAuth from "./hooks/useAuth";
import Login from "./components/pages/Login";
import { toast } from "react-toastify";

function App() {
  const { user, loading: authLoading, signOutUser } = useAuth();
  const { movies, loading, error } = useMovies();
  const {
    wishlist,
    watched,
    addToWishlist,
    removeFromWishlist,
    addToWatched,
    handleDownload,
    isInWishlist,
    isWatched,
  } = useWishlist();

  const [filters, setFilters] = useState({ genre: "", ageGroup: "", year: "" });
  const [sortBy, setSortBy] = useState("year-desc");
  const [showWishlist, setShowWishlist] = useState(false);
  const [showWatched, setShowWatched] = useState(false);

  const handleSignOut = async () => {
    try {
      await signOutUser();
      toast.success("Signed out successfully.");
    } catch (error) {
      toast.error(error?.message || "Sign-out failed.");
    }
  };

  const visibleMovies = useMemo(() => {
    const filtered = filterMovies(movies, filters);
    return sortMovies(filtered, sortBy);
  }, [movies, filters, sortBy]);

  if (authLoading) return <Loader />;
  if (!user) return <Login />;
  if (loading) return <Loader />;
  if (error) return <p>{error}</p>;

  return (
    <div className="mx-auto max-w-6xl px-4 py-6 space-y-4">
      <Navbar
        wishlistCount={wishlist.length}
        watchedCount={watched.length}
        onOpenWishlist={() => setShowWishlist(true)}
        onOpenWatched={() => setShowWatched(true)}
      />

      <div className="flex justify-end">
        <button className="btn btn-sm btn-neutral" type="button" onClick={handleSignOut}>
          Sign Out
        </button>
      </div>

      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <FilterBar filters={filters} onChange={setFilters} />
        <SortControls value={sortBy} onChange={setSortBy} />
      </div>

      <MovieGrid
        movies={visibleMovies}
        movieActions={{
          addToWishlist,
          removeFromWishlist,
          addToWatched,
          isInWishlist,
          isWatched,
        }}
      />

      {showWishlist && (
        <WishlistModal
          wishlist={wishlist}
          onRemove={removeFromWishlist}
          onDownload={handleDownload}
          onClose={() => setShowWishlist(false)}
        />
      )}

      {showWatched && (
        <WatchedModal watched={watched} onClose={() => setShowWatched(false)} />
      )}

      <Footer />
    </div>
  );
}

export default App;
