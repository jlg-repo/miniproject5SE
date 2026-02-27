import { FIELDS } from '../constants'

const WishlistModal = ({ wishlist, onRemove, onDownload, onClose }) => {
  return (
    <dialog className="modal modal-open">
      <div className="modal-box">
      </div>
      <div className="modal-backdrop" onClick={onClose} />
    </dialog>
  )
}

export default WishlistModal