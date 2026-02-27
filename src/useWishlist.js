import { useState } from 'react'
import { downloadWishlist } from './utils/downloadWishlist'
import { FIELDS } from './constants'

const useWishlist = () => {
  const [wishlist, setWishlist] = useState([])
  const [watched, setWatched] = useState([])

  const addToWishlist = (movie) => {}
  const removeFromWishlist = (movie) => {}
  const addToWatched = (movie) => {}
  const handleDownload = () => downloadWishlist(wishlist)

  return { wishlist, watched, addToWishlist, removeFromWishlist, addToWatched, handleDownload }
}

export default useWishlist