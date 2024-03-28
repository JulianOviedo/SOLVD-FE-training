import { useState } from 'react';
import './App.css';
import Tile from './Tile';
import NewPhoto from './NewPhoto';
import { API_URL } from './data';

function App() {
  const [photoBase, setPhotoBase] = useState([])

  const fetchPhoto = async () => {
    try {
      const response = await fetch(API_URL);
      const json = await response.json();
      return json;
    } catch (error) {
      console.log("error", error);
    }
  };

  const addNewPhoto = async () => {
    const [photo] = await fetchPhoto();
    setPhotoBase([...photoBase, photo])
  };

  const updatePhoto = async (index) => {
    const [photo] = await fetchPhoto();
    setPhotoBase([...photoBase.slice(0, index), photo, ...photoBase.slice(index + 1)])
  }

  return (
    <div className="App">
      <div className='tile-container'>
        {photoBase.map((item, index) => <Tile data={item} handleDataUpdate={() => updatePhoto(index)} key={item.id} />)}
        <NewPhoto handleClick={addNewPhoto} />
      </div>
    </div>
  );
}

export default App;
