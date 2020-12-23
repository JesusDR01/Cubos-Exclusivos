import { useState } from 'react';
import t from '../locales/es';

const Cube = ({ title, image }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleShowDetails = () => setShowDetails(!showDetails);
  
  return (
    <div>
      <div class="clickable" onClick={() => toggleShowDetails(!showDetails)}>
        {showDetails ? '⬅️' : '➡️'}
      </div>
      {showDetails && (
        <div>
          <h3>{title}</h3>
          <h3>{t.showMore}</h3>
        </div>
      )}
      <img src={image} alt={title} />
    </div>
  );
};

export default Cube;
