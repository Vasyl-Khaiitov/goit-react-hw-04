import { RiseLoader } from 'react-spinners';
import css from './Loader.module.css';

export default function Loader() {
  return (
    <div className={css.loader_box}>
      <RiseLoader size={10} />;
    </div>
  );
}
