import css from './ImageCard.module.css';

export default function ImageCard({
  altDescrp,
  smallPhoto,
  largePhoto,
  openModal,
}) {
  return (
    <div onClick={() => openModal(largePhoto, altDescrp)}>
      <img className={css.image} src={smallPhoto} alt={altDescrp} />
    </div>
  );
}
