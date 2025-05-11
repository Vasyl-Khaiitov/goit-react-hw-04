import Modal from 'react-modal';
import css from './ImageModal.module.css';

Modal.setAppElement('#root');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export default function ImageModal({
  modalIsOpen,
  closeModal,
  modalSrc,
  modalDesc,
}) {
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        className={css.Modal}
        overlayClassName={css.Overlay}
      >
        <img
          className={css.image_modal}
          src={modalSrc}
          alt={modalDesc}
          onClick={closeModal}
        />
      </Modal>
    </div>
  );
}
