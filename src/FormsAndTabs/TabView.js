import React from 'react'
import ViewAccordion from './ViewAccordion';

const TabView = () => {
  const accordionData = [
    
    {
      title: 'Schedules',
      content: `Here we will display schedules attached to the user`
    },
    {
      title: 'Polls',
      content: `Here we will display polls attached to the user`
    },
    {
      title: 'Containers',
      content: `Here we will display containers attached to the user`
    }
    
  ];
  const { title, content } = accordionData;
  return (
    <div>
      <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <ViewAccordion title={title} content={content} />
        ))}
      </div>
    </div>
  );
};
export default TabView;
