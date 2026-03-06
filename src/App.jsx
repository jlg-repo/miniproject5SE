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
import { filterMovies, sortMovies } from "./filterSort";

function App() {
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

  const visibleMovies = useMemo(() => {
    const filtered = filterMovies(movies, filters);
    return sortMovies(filtered, sortBy);
  }, [movies, filters, sortBy]);

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

    </div>
  );
}

export default App;
