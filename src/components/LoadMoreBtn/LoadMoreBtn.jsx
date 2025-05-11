export default function LoadMoreBtn({ incrPage }) {
  return (
    <div>
      <button type="button" onClick={incrPage}>
        Load More
      </button>
    </div>
  );
}
