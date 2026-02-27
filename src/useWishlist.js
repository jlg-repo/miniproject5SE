import { useMemo, useState } from "react";
import { downloadWishlist } from "./downloadWishlist";
import { FIELDS } from "./constants";

const useWishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const [watched, setWatched] = useState([]);

  const getKey = (movie) => String(movie?.[FIELDS.TITLE] ?? "").trim();

  const wishlistKeys = useMemo(
    () => new Set(wishlist.map(getKey).filter(Boolean)),
    [wishlist]
  );
  const watchedKeys = useMemo(
    () => new Set(watched.map(getKey).filter(Boolean)),
    [watched]
  );

  const addToWishlist = (movie) => {
    const key = getKey(movie);
    if (!key) return;

    setWishlist((prev) => {
      if (prev.some((m) => getKey(m) === key)) return prev;
      return [...prev, movie];
    });
  };

  const removeFromWishlist = (movie) => {
    const key = getKey(movie);
    if (!key) return;

    setWishlist((prev) => prev.filter((m) => getKey(m) !== key));
  };

  const addToWatched = (movie) => {
    const key = getKey(movie);
    if (!key) return;

    setWatched((prev) => {
      if (prev.some((m) => getKey(m) === key)) return prev;
      return [...prev, movie];
    });

    setWishlist((prev) => prev.filter((m) => getKey(m) !== key));
  };

  const handleDownload = () => downloadWishlist(wishlist);

  return {
    wishlist,
    watched,
    addToWishlist,
    removeFromWishlist,
    addToWatched,
    handleDownload,

    isInWishlist: (movie) => wishlistKeys.has(getKey(movie)),
    isWatched: (movie) => watchedKeys.has(getKey(movie)),
  };
};

export default useWishlist;
