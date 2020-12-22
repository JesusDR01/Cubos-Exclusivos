import { useState } from 'react';

import Cube from './components/Cube';
import t from './locales/es';
import './App.css';
import imgGans356 from './assets/images/gans356.png';
import img33x33x33 from './assets/images/33x33x33.png';
import imgMasterPieceCube from './assets/images/masterpiececube.png';
import imgVCubeMaze from './assets/images/v-cube-maze.png';

const App = () => {
  const [cubes, setCubes] = useState([
    {
      title: 'Gans356',
      image: imgGans356
    },
    {
      title: '33x33x33',
      image: img33x33x33
    },
    {
      title: 'Masterpiececube',
      image: imgMasterPieceCube
    },
    {
      title: 'V-Cube Maze',
      image: imgVCubeMaze
    }
  ]);

  return (
    <div className="App">
      <header>
        <h1>{t.title}</h1>
        <p>{t.subtitle.first}</p>
        <p>{t.subtitle.second}</p>
      </header>
      <section>
        {cubes.map(({ title, image }) => (
          <Cube title={title} image={image} />
        ))}
      </section>
    </div>
  );
};

export default App;
