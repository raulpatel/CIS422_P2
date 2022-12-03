import React, { useState } from 'react'

const ViewAccordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(true);

  return (
    <fieldset>
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div> {isActive ? 'ⱽ' : '>'} {title}</div>
      </div>
      {isActive && <div className="accordion-content">{content}</div>}
    </div>
    </fieldset>
  );
};

export default ViewAccordion;