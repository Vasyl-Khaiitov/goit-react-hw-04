import { useEffect, useState, useRef } from 'react';
import ImageGallery from './components/ImageGallery/ImageGallery';
import SearchBar from './components/SearchBar/SearchBar';
import { fetchArticlesWithTopic } from './Serwis-api/Serwis-api';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import Message from './components/Message/Message';
import Loader from './components/Loader/Loader';
import ImageModal from './components/ImageModal/ImageModal';

export default function App() {
  const [photoCollections, setPhotoCollections] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [topic, setTopic] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [message, setMessage] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalSrc, setModalSrc] = useState(null);
  const [modalDesc, setModalDesc] = useState('');

  const itemRefs = useRef([]);

  const handleSearch = async (newTopic) => {
    setTopic(newTopic);
    setCurrentPage(1);
    setPhotoCollections([]);
    setMessage(null);
  };

  const scrollToElement = () => {
    setTimeout(() => {
      if (!itemRefs.current.length || currentPage >= totalPages) return;

      const firstNewIndex = itemRefs.current.length - 3;
      const targetElement = itemRefs.current[firstNewIndex];

      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 500);
  };

  const incrementPage = () => {
    setLoading(true);
    setCurrentPage((prev) => prev + 1);
  };

  useEffect(() => {
    if (topic === '') {
      return;
    }

    async function fetchData() {
      try {
        setIsError(false);
        setLoading(true);
        const data = await fetchArticlesWithTopic(topic, currentPage);
        setPhotoCollections((prevPhotoCollections) => [
          ...prevPhotoCollections,
          ...data.results,
        ]);
        setTotalPages(data.total_pages);
      } catch {
        setIsError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [topic, currentPage]);

  useEffect(() => {
    if (photoCollections.length > 0 && currentPage < totalPages) {
      scrollToElement();
    }
  }, [photoCollections, currentPage, totalPages]);

  function openModal(imageSrc, imageAlt) {
    setModalSrc(imageSrc);
    setModalDesc(imageAlt);
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  const valueTopic = topic.trim() !== '';
  const collectionsLength = photoCollections.length > 0;
  const lastPage = currentPage < totalPages;

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      {isLoading && <Loader />}
      {isError && <ErrorMessage message={isError} />}
      {!isLoading &&
        !isError &&
        valueTopic &&
        photoCollections.length === 0 && <Message message={message} />}
      {collectionsLength && (
        <ImageGallery
          items={photoCollections}
          openModal={openModal}
          itemRefs={itemRefs}
        />
      )}
      {isLoading && currentPage > 1 && <Loader />}
      {collectionsLength && !isLoading && lastPage && (
        <LoadMoreBtn incrPage={incrementPage} />
      )}
      {collectionsLength && currentPage === totalPages && (
        <strong>
          Thanks for watching, you have reached the end of the collection.
        </strong>
      )}
      <ImageModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        modalDesc={modalDesc}
        modalSrc={modalSrc}
      />
    </div>
  );
}
