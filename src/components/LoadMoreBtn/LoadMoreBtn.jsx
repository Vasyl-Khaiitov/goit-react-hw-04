import css from './LoadMoreBtn.module.css';

export default function LoadMoreBtn({ incrPage }) {
  return (
    <div className={css.btn_box}>
      <button className={css.btn_more} type="button" onClick={incrPage}>
        Load More
      </button>
    </div>
  );
}
