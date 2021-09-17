import React from 'react'
import img from '../assets/capstone.png'
import Work from './Work';

const Works = () => {
  return (
    <div>
      <h3>Best of my works</h3>
      <div className="works row">
        <Work
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
        repudiandae sed. Ad excepturi, aliquid consequuntur dolore nesciunt"
          img={img}
        />
        <Work
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
        repudiandae sed. Ad excepturi, aliquid consequuntur dolore nesciunt"
          img={img}
        />
        <Work
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
        repudiandae sed. Ad excepturi, aliquid consequuntur dolore nesciunt"
          img={img}
        />
      </div>
      <div className="works row">
        <Work
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
        repudiandae sed. Ad excepturi, aliquid consequuntur dolore nesciunt"
          img={img}
        />
        <Work
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
        repudiandae sed. Ad excepturi, aliquid consequuntur dolore nesciunt"
          img={img}
        />
        <Work
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
        repudiandae sed. Ad excepturi, aliquid consequuntur dolore nesciunt"
          img={img}
        />
      </div>
    </div>
  );
}

export default Works
