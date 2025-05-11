import { Formik, Form, Field } from 'formik';
import toast, { Toaster } from 'react-hot-toast';
import css from './SearchBar.module.css';

export default function SearchBar({ onSubmit }) {
  const handleSubmit = (value, helpers) => {
    const inputValue = value.searchphoto;
    if (inputValue.trim() !== '') {
      onSubmit(inputValue);
    } else {
      toast.error('Enter a keyword to search for', {
        duration: 2500,
        position: 'top-right',
      });
    }
    helpers.resetForm();
  };

  return (
    <header className={css.container}>
      <Formik
        initialValues={{
          searchphoto: '',
        }}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <Field
            className={css.form_iput}
            type="text"
            name="searchphoto"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />

          <button className={css.form_btn} type="submit">
            Search
          </button>
        </Form>
      </Formik>
      <Toaster />
    </header>
  );
}
