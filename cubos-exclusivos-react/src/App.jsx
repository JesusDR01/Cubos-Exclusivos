import './App.css';
import t from './locales/es';

const App = () => (
  <div className="App">
    <header>
      <h1>{t.title}</h1>
      <p>{t.subtitle.first}</p>
      <p>{t.subtitle.second}</p>
    </header>
    <section>{/* cubes here */}</section>
  </div>
);

export default App;
