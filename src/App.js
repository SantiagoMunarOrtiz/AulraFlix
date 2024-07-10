import { useState } from 'react';
import { v4 as uuid } from "uuid"
import './App.css';
import Header from "./componentes/Header/Header"



import Footer from './componentes/Footer';
import VideoFormulario from './componentes/Formulario/VideoFormulario';
import VideoLista from './componentes/VideoLista';


function App() {
  const [videos, setVideos] = useState([
    {
      id: uuid(),
      titulo: 'Video de prueba de YouTube',
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    },
  ]);

  const registrarVideo = (video) => {
    setVideos([...videos, { ...video, id: uuid() }]);
  };

  const eliminarVideo = (id) => {
    const nuevosVideos = videos.filter((video) => video.id !== id);
    setVideos(nuevosVideos);
  };

  const actualizarVideo = (id, videoActualizado) => {
    const nuevosVideos = videos.map((video) =>
      video.id === id ? { ...videoActualizado, id } : video
    );
    setVideos(nuevosVideos);
  };

  return (
    <div>
      <Header />
      <VideoFormulario registrarVideo={registrarVideo} />
      <VideoLista
        videos={videos}
        eliminarVideo={eliminarVideo}
        actualizarVideo={actualizarVideo}
      />
      <Footer />
    </div>
  );
}

export default App;