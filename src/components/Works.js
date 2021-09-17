import React from 'react';
import capstone from '../assets/capstone.png';
import Work from './Work';

const Works = () => {
  const description =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. ';
  return (
    <div>
      <h3>Some of my works</h3>
      <div className="works row">
        <Work
          description={description}
          img={capstone}
        />
        <Work
          description={description}
          img={capstone}
        />
        <Work
          description={description}
          img={capstone}
        />
      </div>
      <div className="works row">
        <Work
          description={description}
          img={capstone}
        />
        <Work
          description={description}
          img={capstone}
        />
        <Work
          description={description}
          img={capstone}
        />
      </div>
    </div>
  );
};

export default Works;
