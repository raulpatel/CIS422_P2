import React from 'react'
import ScheduleForm from './ScheduleForm';
import CreateTabRadio from '../CreateTabRadio';


const TabCreate = () => {
  return (
    <>
        <div className ="TabCreate">
            {/* Tab Content Here */}
            <div>
          <CreateTabRadio />
          {/* Note! Forms are under their respective radio options! */}
      </div>
        </div>
    </>
  );
}

export default TabCreate;
