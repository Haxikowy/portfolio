import React from 'react';
import Slider from './helperComponents/Slider';
import WorkDescription from './helperComponents/WorkDescription';
import { tetrisImages } from './helperComponents/SliderData';
import { tetrisDescription } from './helperComponents/WorkDescriptionData';

const Work = () => {
  return (
    <div className="Work container">
      <Slider data={tetrisImages} />
      <WorkDescription data={tetrisDescription} />
    </div>
  );
};

export default Work;
