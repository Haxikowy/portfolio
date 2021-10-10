import React from 'react';
import { Link } from 'react-router-dom';
import {FaArrowLeft, FaArrowRight} from 'react-icons/fa'

import Slider from './helperComponents/Slider';
import WorkDescription from './helperComponents/WorkDescription';
import WorkData from '../data/WorkData';

const Work = (props) => {
  const currentProject = parseInt(props.match.params.project, 10);
  if(!WorkData[currentProject]){
    return <>404</> //TODO
  }
  const renderNav = () => {
    const prevProject = currentProject === 0 ? WorkData.length - 1 : currentProject - 1;
    const nextProject = currentProject === WorkData.length - 1 ? 0 : currentProject + 1;
    return (<nav className="work__nav"> 
      <Link to={`/work/${prevProject}`} className="nav__arrow nav__prev"><FaArrowLeft />{WorkData[prevProject].title}</Link>
      <Link to={`/work/${nextProject}`} className="nav__arrow nav__next"><FaArrowRight />{WorkData[nextProject].title}</Link>
    </nav>)
  }

  return (
    <div className="Work container">
      <Slider data={WorkData[currentProject]} />
      <WorkDescription data={WorkData[currentProject]} />
      {renderNav()}
    </div>
  );
};

export default Work;
