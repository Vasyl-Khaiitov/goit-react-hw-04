export default function ImageCard({ altDescrp, smallPhoto }) {
  return (
    <div>
      <img src={smallPhoto} alt={altDescrp} />
    </div>
  );
}
