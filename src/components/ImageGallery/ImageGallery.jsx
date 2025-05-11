import ImageCard from './ImageCard/ImageCard';
// import css from '../ImageGallery/ImageCard';

export default function ImageGallery({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <ImageCard
            altDescrp={item.alt_description}
            smallPhoto={item.urls.small}
            largePhoto={item.urls.regular}
          />
          <div>
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
  );
}
