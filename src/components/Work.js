import React, {useContext} from 'react';
import { __RouterContext } from 'react-router';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { animated } from 'react-spring';

import { work } from '../data/work';
import Slider from './helperComponents/Slider';
import WorkDescription from './helperComponents/WorkDescription';

const Work = ({style}) => {
  const history = useContext(__RouterContext);
  const currentProject = parseInt(history.match.params.project, 10);

  if(!work[currentProject]){
    return (<animated.main style={style} className="ERROR">404</animated.main>)
  }

  const renderNav = () => {
    // desktop nav
    if(window.innerWidth >= 1100){
      return (
        <nav className="work__nav-d">
      haxikowy<span className="highlight">.</span><span className="orange-hi">work</span> <span className="highlight">{' ='}</span> 
        <div className="work-nav__links">
        <span className="orange-hi">{'['}</span>
          {work.map((item, index) => {
            return (
            <React.Fragment key={index}>
              <Link to={`/work/${index}`} className={`work-nav__item ${currentProject === index ? 'active' : ''}`}>{item.title}</Link>
              {index === work.length - 1 ? null : <span className="highlight">, </span>}
            </React.Fragment>
            )
          })}
        <span className="orange-hi">{']'}</span>
        </div>
      </nav>
      )
    }
    // mobile nav
    const prevProject = currentProject === 0 ? work.length - 1 : currentProject - 1;
    const nextProject = currentProject === work.length - 1 ? 0 : currentProject + 1;
    return (<nav className="work__nav"> 
      <Link to={`/work/${prevProject}`} className="nav__arrow nav__prev"><FaArrowLeft />{work[prevProject].title}</Link>
      <Link to={`/work/${nextProject}`} className="nav__arrow nav__next"><FaArrowRight />{work[nextProject].title}</Link>
    </nav>)
  }

  return (
  <animated.main style={style} className="Work container">
    <div className="work__content">
    <Slider data={work[currentProject]} />
    <WorkDescription data={work[currentProject]} />
    </div>
    {renderNav()}
  </animated.main>
  )
};

export default Work;
