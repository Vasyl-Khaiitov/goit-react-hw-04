import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

export default function ImageGallery({ items, openModal, itemRefs }) {
  return (
    <div className={css.list_box}>
      <ul className={css.list}>
        {items.map((item, index) => (
          <li
            className={css.list_items}
            key={item.id}
            ref={(el) => (itemRefs.current[index] = el)}
          >
            <ImageCard
              openModal={openModal}
              altDescrp={item.alt_description}
              smallPhoto={item.urls.small}
              largePhoto={item.urls.regular}
            />
            <div className={css.descr_box}>
              <p>
                <b>Name:</b> {item.user.name}
              </p>
              <p>
                <b>Likes:</b> {item.likes}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
