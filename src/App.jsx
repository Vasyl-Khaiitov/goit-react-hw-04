import SearchBar from './components/SearchBar/SearchBar';
import { useState } from 'react';
import { fetchArticlesWithTopic } from './Serwis-api/Serwis-api';

export default function App() {
  const [photoCollections, setPhotoCollections] = useState([]);

  const handleSearch = async (newValue) => {
    try {
      const data = await fetchArticlesWithTopic(newValue);
      setPhotoCollections(data);
      console.log('🚀 ~ handleSearch ~ data:', data);
    } catch (error) {}
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      {/* (photos.length >0 && <ImageGallery />) */}
    </div>
  );
}
