import React from 'react';

const WorkDescription = ({data}) => {
  const { title, description, technologies, linkCode, linkLive } = data;

  return (
    <div className="WorkDescription">      
      <h1 className="work-title">{title}</h1>
      <section className="row">
        <div className="work-technologies">{technologies}</div>
        <div className="work-buttons">
          <a
            className="button"
            rel="noreferrer"
            target="_blank"
            href={linkCode}>
            code
          </a>
          <a
            className="button"
            rel="noreferrer"
            target="_blank"
            href={linkLive}>
            live
          </a>
        </div>
      </section>
      <p className="work-description">{description}</p>
      
    </div>
  );
};

export default WorkDescription;
